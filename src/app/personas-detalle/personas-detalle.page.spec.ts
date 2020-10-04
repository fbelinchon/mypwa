import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonasDetallePage } from './personas-detalle.page';

describe('PersonasDetallePage', () => {
  let component: PersonasDetallePage;
  let fixture: ComponentFixture<PersonasDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonasDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonasDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
