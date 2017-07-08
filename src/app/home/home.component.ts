import { Component, OnInit, AfterContentInit } from '@angular/core';
import { User } from "app/models/user.model";
import { UserService } from "app/services/user.service";


@Component({
  selector: 'cps-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterContentInit {



  listUser: User[]

  dataSet = [
              ["1","2", "3", "4", "5", "6","7"]
            ]

  constructor(private userService: UserService) {}

  ngOnInit() {
    



  }

  ngAfterContentInit(){
    
    
    this.userService.getUsers().subscribe(pUser => {
      this.listUser = pUser
      console.log(pUser)
     // console.log(JSON.stringify(pUser))
      
      let dataTable = []


      for (var i = 0; i < pUser.length; i++) {
        let row = []
        let params:Array<string> = new Array()
        row.push(pUser[i].name)
        row.push(pUser[i].nuProntuario)
        row.push(pUser[i].nuCartSus)
        row.push(pUser[i].fileLocal)
        
        params.push(pUser[i].id.toString())
        params.push(pUser[i].address.city.state.id.toString())

        row.push(this.buildLinkButon("edit", params, "btn btn-primary", true, "mode_edit" ))
        row.push(this.buildModalLinkButon(`#modal-view${pUser[i].id}`,"btn btn-info", true, "visibility" ))
        row.push(this.buildModalLinkButon(`#modalDelete${pUser[i].id}`,"btn btn-danger", true, "delete" ))
        dataTable.push(row)
      }

      console.log("-----dataTable-----")
      console.log(dataTable)
      
      
      
      $("#tabelaInicio").DataTable({
       
        data:dataTable,
          language:{
                    url:"https://cdn.datatables.net/plug-ins/1.10.15/i18n/Portuguese-Brasil.json"
           },
         });
     
     // $("#tabelaInicio_filter").remove();

      //$("#tabelaInicio_wrapper")
        //      .append("<div id='tabelaInicio_filter' class='dataTables_filter'> <label>Pesquisar: <input type='search' class='form-control input-sm' placeholder='' aria-controls='tabelaInicio'> </label> </div>")
              
    });
    
  }

  /*<div id="tabelaInicio_filter" class="dataTables_filter">
  <label>Search:
    <input type="search" class="form-control input-sm teste" placeholder="" aria-controls="tabelaInicio">
  </label>
  </div>*/

  




buildLinkButon(pLink:string, paramLink:Array<string>, classButton:string, isIcon:boolean=false, icon="", nameButton:string=""  ):string{
  let ret:string = ""
  let params:string = ""
  
  for (var i = 0; i < paramLink.length; i++) {
        params += `${paramLink[i]}`
        if(paramLink.length != i+1){
          params += `/`
        }
  }
  
  ret += `<a href="/${pLink}/${params}" class="${classButton}">`
  
  isIcon ? ret += `<i class="material-icons">${icon}</i>` : ret += `${nameButton}`  
  
  ret += `</a>`

  return ret
}


buildModalLinkButon(pLink:string, classButton:string, isIcon:boolean=false, icon="", nameButton:string=""  ):string{
  let ret:string = ""

  
  ret += `<a data-toggle="modal" href="${pLink}" class="${classButton}">`
  
  isIcon ? ret += `<i class="material-icons">${icon}</i>` : ret += `${nameButton}`  
  
  ret += `</a>`

  return ret
}
  
  
}
