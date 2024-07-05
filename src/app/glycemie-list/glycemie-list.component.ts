import { Component, OnInit } from '@angular/core';
import { GlycemieService } from '../glycemie-service.service';
import { Glycemie } from '../glycemie';
import {GlycemieChartComponent} from "../glycemie-chart/glycemie-chart.component";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-glycemie-list',
  templateUrl: './glycemie-list.component.html',
  standalone: true,
  imports: [
    GlycemieChartComponent,
    NgIf,
    NgForOf,
    RouterLink
  ],
  styleUrls: ['./glycemie-list.component.css']
})
export class GlycemieListComponent implements OnInit {
  nom : string = "chaimaa";
  glycemies: Glycemie[] = [];

  constructor(private glycemieService: GlycemieService) { }

  ngOnInit(): void {
    this.getGlycemies();
  }

  getGlycemies(): void {
    this.glycemieService.getAllGlycemies().subscribe(
      glycemies => this.glycemies = glycemies,
      error => console.error('Error fetching glycemies:', error)
    );
  }


  getGlycemieDates(): string[] {
    return this.glycemies.map(glycemie => glycemie.date);
  }


  getGlycemieValues(): number[] {
    return this.glycemies.map(glycemie => glycemie.value);
  }

  deleteGlycemie(id: number | undefined): void {
    if (!id) {
      console.error('Invalid ID for deletion.');
      return;
    }

    this.glycemieService.deleteGlycemie(id).subscribe(
      () => {
        this.glycemies = this.glycemies.filter(g => g.id !== id);
      },
      error => console.error('Error deleting glycemie:', error)
    );
  }
}
