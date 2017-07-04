import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewUserComponent } from './modal-view-user.component';

describe('ModalViewUserComponent', () => {
  let component: ModalViewUserComponent;
  let fixture: ComponentFixture<ModalViewUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalViewUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalViewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
