import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sppt',
  templateUrl: './sppt.component.html',
  styleUrls: ['./sppt.component.css']
})
export class SpptComponent implements OnInit {

  nop: string;
  luasBumi: number;
  luasBangunan: number;
  njopBumi: number;
  njopBangunan: number;
  lokasi: string;
  spId: string;
  namaSp: string;
  alamatSp: string;
  listSppt: any;
  apiUrl = 'http://192.168.2.27:1328/android_service'

  constructor(
    private route: ActivatedRoute ,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.nop = this.route.snapshot.paramMap.get('nop');
    let body = 'keyword=op&nop=' + this.nop;
    this.http.post(this.apiUrl, body)
      .subscribe(data => {
        this.luasBumi = data['op_luas_bumi'];
        this.luasBangunan = data['op_luas_bng'];
        this.njopBumi = data['op_njop_bumi'];
        this.njopBangunan = data['op_njop_bng'];
        this.lokasi = data['op_jalan'] + ' ' + data['op_rtrw'] + ' ' + data['op_kel'] + ', ' + data['op_kec'];
        this.spId = data['op_wp_id'];
        this.initSp(this.spId);
      });

    let spptBody = 'keyword=sppt&nop=' + this.nop;
    this.http.post(this.apiUrl + '/sppt', spptBody) 
      .subscribe(data => {
        this.listSppt = data;
        console.log(data);
      });
  }

  initSp(id): void {
    let bodySp = 'keyword=wp&subjek_pajak_id=' + this.spId;
    this.http.post(this.apiUrl, bodySp)
      .subscribe(data => {
        this.namaSp = data['wp_nama'];
        this.alamatSp = data['wp_jalan'] + ' ' + data['wp_rtrw'] + ' ' + data['wp_kel'] + ', ' + data['wp_kota'];
      });
  }  

}
