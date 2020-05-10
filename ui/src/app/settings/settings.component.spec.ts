//
// Swiss QR Bill Generator
// Copyright (c) 2018 Manuel Bleichenbacher
// Licensed under MIT License
// https://opensource.org/licenses/MIT
//
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { SettingsComponent } from './settings.component';
import { TranslateMockLoader } from '../mock/translate-mock.loader';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsComponent],
      imports: [
        FormsModule,
        MatButtonToggleModule,
        MatCardModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateMockLoader }
        })
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render radio buttons', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-button-toggle').textContent).toEqual(
      'Deutsch'
    );
  }));

  it('should call switchLanguage()', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    spyOn(component, 'switchLanguage');
    compiled.querySelector('button').click();
    expect(component.switchLanguage).toHaveBeenCalled();
  }));
});
