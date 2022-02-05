import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoBlurbComponent } from './logo-blurb.component';

describe('LogoBlurbComponent', () => {
  let component: LogoBlurbComponent;
  let fixture: ComponentFixture<LogoBlurbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoBlurbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoBlurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
