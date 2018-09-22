import { Component, OnInit, OnDestroy } from '@angular/core';
import { TargetRealisasiPdService } from '../services/target-realisasi-pd.service';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  displayedColumns = ['mataAnggaran', 'namaPajak', 'nilaiTarget', 'nilaiRealisasi', 'prosentase'];
  dataSource: any;
  private alive: boolean;

  constructor(private targetRealisasiPdService: TargetRealisasiPdService) {
    this.alive = true;
  }

  ngOnInit() {
    this.targetRealisasiPdService.getTargetRealisasiPd().subscribe(
      result => {
        console.log(result);
        this.dataSource = new Array();        
        for(let i=0; i<9; i++) {
          this.dataSource.push( {
            mataAnggaran: result[i].mataAnggaran, 
            namaPajak: result[i].namaPajak,
            nilaiTarget: result[i].nilaiTarget,
            nilaiRealisasi: result[i].nilaiRealisasi,
            prosentase: (result[i].nilaiRealisasi / result[i].nilaiTarget * 100)
          } );
        }
      }
    );

    IntervalObservable.create(10000)
      .subscribe(() => {
        console.log('ambil data periodik');
        this.targetRealisasiPdService.getTargetRealisasiPd().subscribe(
          result => {
            this.dataSource = new Array();
            for(let i=0; i<9; i++) {
              this.dataSource.push( {
                mataAnggaran: result[i].mataAnggaran, 
                namaPajak: result[i].namaPajak,
                nilaiTarget: result[i].nilaiTarget,
                nilaiRealisasi: result[i].nilaiRealisasi,
                prosentase: (result[i].nilaiRealisasi / result[i].nilaiTarget * 100)
              });
            }
          }
        );
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
