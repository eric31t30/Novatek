import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurStackComponent } from './our-stack.component';

describe('OurStackComponent', () => {
  let component: OurStackComponent;
  let fixture: ComponentFixture<OurStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurStackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
