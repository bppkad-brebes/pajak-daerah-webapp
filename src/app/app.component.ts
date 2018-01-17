import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormControl } from '@angular/forms/src/model';
import { Validators } from '@angular/forms/src/validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  nop: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  public cekNop(nop) {
    if(nop.length != 18) {
      return;
    }
    this.router.navigate(['/sppt/' + nop]);
  };
}


