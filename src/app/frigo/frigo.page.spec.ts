import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrigoPage } from './frigo.page';

describe('FrigoPage', () => {
  let component: FrigoPage;
  let fixture: ComponentFixture<FrigoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrigoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrigoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
