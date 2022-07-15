import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDetalleComponent } from './game-detalle.component';

describe('GameDetalleComponent', () => {
  let component: GameDetalleComponent;
  let fixture: ComponentFixture<GameDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
