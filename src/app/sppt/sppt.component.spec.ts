import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpptComponent } from './sppt.component';

describe('SpptComponent', () => {
  let component: SpptComponent;
  let fixture: ComponentFixture<SpptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
