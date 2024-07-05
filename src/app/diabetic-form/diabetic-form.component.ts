import { Component } from '@angular/core';
import { DiabeticService } from '../diabetic-service.service';
import { Diabetic } from '../diabetic';
import {FormsModule} from "@angular/forms";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-diabetic-form',
  templateUrl: './diabetic-form.component.html',
  standalone: true,
    imports: [
        FormsModule,
        RouterOutlet
    ],
  styleUrls: ['./diabetic-form.component.css']
})
export class DiabeticFormComponent {
  diabetic: Diabetic = { name: '', age: 0, weight: 0, height: 0, email: '' };

  constructor(private diabeticService: DiabeticService) { }

  addDiabetic(): void {
    this.diabeticService.addDiabetic(this.diabetic).subscribe(diabetic => {
      this.diabetic = { name: '', age: 0, weight: 0, height: 0, email: '' };
    });
  }
}
