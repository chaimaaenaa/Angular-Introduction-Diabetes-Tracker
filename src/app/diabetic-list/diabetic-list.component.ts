import { Component, OnInit } from '@angular/core';
import { DiabeticService } from '../diabetic-service.service';
import { Diabetic } from '../diabetic';
import {NgForOf} from "@angular/common";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-diabetic-list',
  templateUrl: './diabetic-list.component.html',
  standalone: true,
  imports: [
    NgForOf,
    RouterOutlet
  ],
  styleUrls: ['./diabetic-list.component.css']
})
export class DiabeticListComponent implements OnInit {
  diabetics: Diabetic[] = [];

  constructor(private diabeticService: DiabeticService) { }

  ngOnInit(): void {
    this.getDiabetics();
  }

  getDiabetics(): void {
    this.diabeticService.getAllDiabetics().subscribe(diabetics => this.diabetics = diabetics);
  }

  deleteDiabetic(id: number | undefined): void {
    this.diabeticService.deleteDiabetic(id).subscribe(() => {
      this.diabetics = this.diabetics.filter(d => d.id !== id);
    });
  }
}
