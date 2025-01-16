import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebdesingComponent } from './webdesing.component';

describe('WebdesingComponent', () => {
  let component: WebdesingComponent;
  let fixture: ComponentFixture<WebdesingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebdesingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebdesingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
