import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3multilinechartComponent } from './d3multilinechart.component';

describe('D3multilinechartComponent', () => {
  let component: D3multilinechartComponent;
  let fixture: ComponentFixture<D3multilinechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D3multilinechartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D3multilinechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
