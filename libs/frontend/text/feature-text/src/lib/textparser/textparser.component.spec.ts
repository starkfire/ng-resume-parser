import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextparserComponent } from './textparser.component';

describe('TextparserComponent', () => {
  let component: TextparserComponent;
  let fixture: ComponentFixture<TextparserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextparserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextparserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
