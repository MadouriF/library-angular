import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderCreateComponent } from './reader-create.component';

describe('ReaderCreateComponent', () => {
  let component: ReaderCreateComponent;
  let fixture: ComponentFixture<ReaderCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReaderCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReaderCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
