import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderUpdateAddressComponent } from './reader-update-address.component';

describe('ReaderUpdateAddressComponent', () => {
  let component: ReaderUpdateAddressComponent;
  let fixture: ComponentFixture<ReaderUpdateAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReaderUpdateAddressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReaderUpdateAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
