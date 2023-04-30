import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelboxComponent } from './panelbox.component';

describe('PanelboxComponent', () => {
  let component: PanelboxComponent;
  let fixture: ComponentFixture<PanelboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
