import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../../../node_modules/@angular/forms';
import { AnggotaModel } from '../anggota.model';
import { AnggotaService } from '../anggota.service';
import { Subscription } from '../../../../../node_modules/rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-anggota-add',
  templateUrl: './anggota-add.component.html',
  styleUrls: ['./anggota-add.component.css'],
  providers: [AnggotaService]
})
export class AnggotaAddComponent implements OnInit {

  anggotaForm: FormGroup;
  private idx: string;
  private sub: Subscription;
  constructor(private anggotaService: AnggotaService, private route: ActivatedRoute) { 
    this.sub = this.route.params.subscribe(params => {
      this.idx = params['id'];
    })
    this.anggotaForm = new FormGroup({
      nama: new FormControl(null,
      [Validators.required, this.cekIsEmpty]),
      nomorKtp: new FormControl(null,
      [Validators.required]),
      alamat: new FormControl(null, [])
    });
  }

  ngOnInit() {
    if(this.idx) {
      this.anggotaService.getAnggota(this.idx).subscribe(data => {
        this.anggotaForm = new FormGroup({
          nomorKtp: new FormControl(data.nomorKtp, [Validators.required]),
          alamat: new FormControl(data.alamat, []),
          nama: new FormControl(data.nama, [Validators.required])
        });
      });
    }
  }

  kirim(){
    const anggotaModel = new AnggotaModel();

    anggotaModel.nama = this.anggotaForm.get('nama').value;
    anggotaModel.nomorKtp = this.anggotaForm.get('nomorKtp').value;
    anggotaModel.alamat = this.anggotaForm.get('alamat').value;
    
    if(!this.idx) {
      this.anggotaService.simpanKontak(anggotaModel).subscribe(data => {
        alert(data.nama + ' berhasil disimpan, dengan id ' + data.id)
      });
    } else {
      console.log('service update letakkan di sini');
    }
    console.log(anggotaModel);

  }

  cekIsEmpty(control: FormControl): {[s: string]: boolean} {
    if (control.value && control.value.trim().length === null){
      return { 'kosong': true };
    }
    return null;
  }

}
