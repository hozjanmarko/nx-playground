import { Component } from '@angular/core';

// libs
import { BaseComponent } from '@nx-playground/core';
import { AppService } from '@nx-playground/nativescript/core';

export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
