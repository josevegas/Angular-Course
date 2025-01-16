import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgdesingComponent } from './orgdesing.component';

describe('OrgdesingComponent', () => {
  let component: OrgdesingComponent;
  let fixture: ComponentFixture<OrgdesingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrgdesingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgdesingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
