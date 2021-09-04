import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendrfqComponent } from './sendrfq.component';

describe('SendrfqComponent', () => {
  let component: SendrfqComponent;
  let fixture: ComponentFixture<SendrfqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendrfqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendrfqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
