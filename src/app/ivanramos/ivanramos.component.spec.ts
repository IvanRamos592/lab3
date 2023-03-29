import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvanramosComponent } from './ivanramos.component';

describe('IvanramosComponent', () => {
  let component: IvanramosComponent;
  let fixture: ComponentFixture<IvanramosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvanramosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IvanramosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
