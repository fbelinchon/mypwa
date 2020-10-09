import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AltaMensajePage } from './alta-mensaje.page';

describe('AltaMensajePage', () => {
  let component: AltaMensajePage;
  let fixture: ComponentFixture<AltaMensajePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaMensajePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AltaMensajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
