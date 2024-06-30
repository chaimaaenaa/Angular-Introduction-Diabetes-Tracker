import { Component, OnInit } from '@angular/core';
import { DiabeticService } from '../diabetic-service.service';
import { Diabetic } from '../diabetic';

@Component({
  selector: 'app-diabetic-list',
  templateUrl: './diabetic-list.component.html',
  standalone: true,
  styleUrls: ['./diabetic-list.component.css']
})
export class DiabeticListComponent implements OnInit {
  diabetics: Diabetic[] | undefined;

  constructor(private diabeticService: DiabeticService) { }

  ngOnInit() {
    this.getDiabetics();
  }

  private getDiabetics() {
    this.diabeticService.getDiabeticsList().subscribe(data => {
      this.diabetics = data;
    });
  }
}
