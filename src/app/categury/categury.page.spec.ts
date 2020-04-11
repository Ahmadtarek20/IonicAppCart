import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CateguryPage } from './categury.page';

describe('CateguryPage', () => {
  let component: CateguryPage;
  let fixture: ComponentFixture<CateguryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateguryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CateguryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
