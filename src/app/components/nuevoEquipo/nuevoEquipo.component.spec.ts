/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NuevoEquipoComponent } from './nuevoEquipo.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

describe('NuevoEquipoComponent', () => {
  let component: NuevoEquipoComponent;
  let fixture: ComponentFixture<NuevoEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule],
      declarations: [NuevoEquipoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
