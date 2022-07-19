import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchStateComponent } from '../src/app/components/switch-state/switch-state.component';

describe('SwitchStateComponent', () => {
  let component: SwitchStateComponent;
  let fixture: ComponentFixture<SwitchStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
