import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphD3VisualizerComponent } from './graph-d3-visualizer.component';

describe('GraphD3VisualizerComponent', () => {
  let component: GraphD3VisualizerComponent;
  let fixture: ComponentFixture<GraphD3VisualizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphD3VisualizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphD3VisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
