import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerShutdownComponent } from './server-shutdown.component';

describe('ServerShutdownComponent', () => {
  let component: ServerShutdownComponent;
  let fixture: ComponentFixture<ServerShutdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerShutdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerShutdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
