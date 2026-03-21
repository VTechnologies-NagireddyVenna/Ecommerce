import { Component } from '@angular/core';
import { Navbar } from './shared/navbar/navbar';
import { Products } from './features/products/products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Products],
  template: `
    <app-navbar></app-navbar>
    <app-products></app-products>
  `
})
export class App {}