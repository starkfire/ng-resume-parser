import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcrparserComponent } from './ocrparser.component';

describe('OcrparserComponent', () => {
  let component: OcrparserComponent;
  let fixture: ComponentFixture<OcrparserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OcrparserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OcrparserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
