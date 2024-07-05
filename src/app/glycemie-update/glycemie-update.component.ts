import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlycemieService } from '../glycemie-service.service';
import { Glycemie } from '../glycemie';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-glycemie-update',
  templateUrl: './glycemie-update.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./glycemie-update.component.css']
})
export class GlycemieUpdateComponent implements OnInit {
  glycemie: Glycemie = new Glycemie();

  constructor(
    private glycemieService: GlycemieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.glycemieService.getGlycemieById(Number(id)).subscribe((data: Glycemie) => {
        this.glycemie = data;
      });
    }
  }

  onSubmit(): void {
    this.glycemieService.updateGlycemie(this.glycemie.id, this.glycemie).subscribe((res) => {
      console.log('Glycemie updated successfully');
      console.log(res);
      this.router.navigate(['/glycemie-list']); // Redirection après la mise à jour
    });
  }


}
