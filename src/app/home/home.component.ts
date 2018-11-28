import { Component, OnInit, OnDestroy } from '@angular/core';
import { TargetRealisasiPdService } from '../services/target-realisasi-pd.service';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

export interface ParameterData {
  mataAnggaran: string;
  namaPajak: string;
  nilaiTarget: number;
  nilaiRealisasi: number;
  prosentase: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  displayedColumns = ['mataAnggaran', 'namaPajak', 'nilaiTarget', 'nilaiRealisasi', 'prosentase'];
  dataSource: Array<ParameterData>;
  private alive: boolean;

  constructor(private targetRealisasiPdService: TargetRealisasiPdService) {
    this.alive = true;
  }

  ngOnInit() {
    this.targetRealisasiPdService.getTargetRealisasiPd().subscribe(
      result => {
        this.dataSource = new Array<ParameterData>();        
        for(let i=0; i<12; i++) {
          if(i == 9) continue;
          if(i == 11) continue; // skip bphtb
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

    this.targetRealisasiPdService.getRealisasiPbb().subscribe(
      result => {
        let temp = JSON.parse(JSON.stringify(this.dataSource));
        let data: ParameterData;
        this.dataSource = new Array<ParameterData>();
        for(let data in temp) {
          if(temp[data].mataAnggaran != '4.1.1.11') {
            this.dataSource.push(temp[data]);
          } else {
            temp[data].nilaiRealisasi = result;
            temp[data].prosentase = temp[data].nilaiRealisasi / temp[data].nilaiTarget * 100;
            this.dataSource.push(temp[data]);
          }
        }
      }
    )

    IntervalObservable.create(10000)
      .subscribe(() => {
        console.log('cek data baru');
        this.targetRealisasiPdService.getTargetRealisasiPd().subscribe(
          result => {
            this.dataSource = new Array();
            for(let i=0; i<12; i++) {
              if(i == 9) continue;
              if(i == 11) continue; // skip bphtb
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

    IntervalObservable.create(10000).subscribe(
      () => {
        this.targetRealisasiPdService.getRealisasiPbb().subscribe(
          result => {
            let temp = JSON.parse(JSON.stringify(this.dataSource));
            let data: ParameterData;
            this.dataSource = new Array<ParameterData>();
            for(let data in temp) {
              if(temp[data].mataAnggaran != '4.1.1.11') {
                this.dataSource.push(temp[data]);
              } else {
                temp[data].nilaiRealisasi = result;
                temp[data].prosentase = temp[data].nilaiRealisasi / temp[data].nilaiTarget * 100;
                this.dataSource.push(temp[data]);
              }
            }
          }
        )
    });

  }

  ngOnDestroy() {
    this.alive = false;
  }

}
