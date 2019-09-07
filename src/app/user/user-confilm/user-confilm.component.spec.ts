import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConfilmComponent } from './user-confilm.component';

describe('UserConfilmComponent', () => {
  let component: UserConfilmComponent;
  let fixture: ComponentFixture<UserConfilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserConfilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConfilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
