import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { KeypadComponent } from './keypad/keypad.component';


const routes: Routes = [
  { path: 'calculator', 
    component: CalculatorComponent 
  },
  {
    path: 'keypad',
    component: KeypadComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
