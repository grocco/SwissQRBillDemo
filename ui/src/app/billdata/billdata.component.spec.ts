import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { BillDataComponent } from './billdata.component';
import { InputWithFormatDirective } from '../input-fields/input-with-format';
import { TranslateMockLoader } from '../mock/translate-mock.loader';
import { AmountFormatter } from '../input-fields/amount-formatter';

describe('BillDataComponent', () => {
  let component: BillDataComponent;
  let fixture: ComponentFixture<BillDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BillDataComponent, InputWithFormatDirective],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        BrowserAnimationsModule,
        RouterModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateMockLoader }
        })
      ],
      providers: [
        AmountFormatter
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
