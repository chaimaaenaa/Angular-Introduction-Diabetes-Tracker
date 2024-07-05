import { Component } from '@angular/core';
import { GlycemieService } from '../glycemie-service.service';
import { Glycemie } from '../glycemie';
import { FormsModule } from "@angular/forms";
import { Router, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-glycemie-form',
  styleUrls: ['./glycemie-form.component.css'],
  templateUrl: './glycemie-form.component.html',
  standalone: true,
  imports: [
    FormsModule,
    RouterOutlet
  ],

})
export class GlycemieFormComponent {

  glycemie: Glycemie = { value: 0, unit: '', date: '' };
  glycemies: Glycemie[] = [];

  constructor(private glycemieService: GlycemieService, private router: Router) { }

  addGlycemie(): void {
    this.glycemieService.addGlycemie(this.glycemie).subscribe(newGlycemie => {
      this.glycemies.push(newGlycemie);
      this.glycemie = { value: 0, unit: '', date: '' };
      this.router.navigate(['/glycemie-list']);
    });
  }
}
