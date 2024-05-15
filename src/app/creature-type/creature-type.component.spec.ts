import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatureTypeComponent } from './creature-type.component';

describe('CreatureTypeComponent', () => {
  let component: CreatureTypeComponent;
  let fixture: ComponentFixture<CreatureTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatureTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatureTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
