import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogesComponent } from './dialoges.component';

describe('DialogesComponent', () => {
  let component: DialogesComponent;
  let fixture: ComponentFixture<DialogesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
