import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcvComponent } from './editcv.component';

describe('EditcvComponent', () => {
  let component: EditcvComponent;
  let fixture: ComponentFixture<EditcvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditcvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditcvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
