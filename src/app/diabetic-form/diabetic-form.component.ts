import { Component, OnInit } from '@angular/core';
import { DiabeticService } from '../diabetic-service.service';
import { Diabetic } from '../diabetic';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diabetic-form',
  templateUrl: './diabetic-form.component.html',
  standalone: true,
  styleUrls: ['./diabetic-form.component.css']
})
export class DiabeticFormComponent implements OnInit {
  diabetic: Diabetic = new Diabetic();

  constructor(private diabeticService: DiabeticService, private router: Router) { }

  ngOnInit() {
  }

  saveDiabetic() {
    this.diabeticService.createDiabetic(this.diabetic).subscribe(data => {
      console.log(data);
      this.goToDiabeticList();
    }, error => console.log(error));
  }

  goToDiabeticList() {
    this.router.navigate(['/diabetics']);
  }

  onSubmit() {
    this.saveDiabetic();
  }
}
