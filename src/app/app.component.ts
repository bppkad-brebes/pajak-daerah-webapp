import { Component, NgZone } from '@angular/core';
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
  showNopTxt: boolean = true;
  showCariBtn: boolean = true;
  showKembaliBtn: boolean = false;

  constructor(private router: Router, private zone: NgZone) {
    if(this.nop != null) 
      this.cekNop(this.nop);
  }

  ngOnInit(): void {
  }

  public cekNop(nop) {
    if(nop.length != 18) {
      return;
    }
    this.zone.run(() => {
      this.showNopTxt = false;
      this.showCariBtn = false;
      this.showKembaliBtn = true;
      this.router.navigate(['/sppt/' + nop]);
    });
  };

  kembali() {
    this.showNopTxt = true;
    this.showCariBtn = true;
    this.showKembaliBtn = false;
    this.router.navigate(['/']);
  }
}


