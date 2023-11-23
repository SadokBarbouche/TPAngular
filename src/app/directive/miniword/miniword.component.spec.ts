import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniwordComponent } from './miniword.component';

describe('MiniwordComponent', () => {
  let component: MiniwordComponent;
  let fixture: ComponentFixture<MiniwordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniwordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiniwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
