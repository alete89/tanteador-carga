import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TanteadorComponent } from './tanteador.component';

describe('TanteadorComponent', () => {
  let component: TanteadorComponent;
  let fixture: ComponentFixture<TanteadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TanteadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TanteadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
