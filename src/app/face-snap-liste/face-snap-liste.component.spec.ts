import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceSnapListeComponent } from './face-snap-liste.component';

describe('FaceSnapListeComponent', () => {
  let component: FaceSnapListeComponent;
  let fixture: ComponentFixture<FaceSnapListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaceSnapListeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceSnapListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
