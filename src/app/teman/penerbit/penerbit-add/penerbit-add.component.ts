import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../../../node_modules/@angular/forms';
import { PenerbitModel } from '../penerbit.model';
import { PenerbitService } from '../penerbit.service';

@Component({
  selector: 'app-penerbit-add',
  templateUrl: './penerbit-add.component.html',
  styleUrls: ['./penerbit-add.component.css'],
  providers: [PenerbitService]
})
export class PenerbitAddComponent implements OnInit {

  penerbitForm: FormGroup;
  constructor(private penerbitService: PenerbitService) { }

  ngOnInit() {
    this.penerbitForm = new FormGroup({
      nama: new FormControl(null,
      [Validators.required, this.cekIsEmpty])
    });
  }

  kirim(){
    const penerbitModel = new PenerbitModel();

    penerbitModel.nama = this.penerbitForm.get('nama').value;
    
    this.penerbitService.simpanKontak(penerbitModel).subscribe(data => {
      alert(data.nama + ' berhasil disimpan, dengan id ' + data.id)
    });
    console.log(penerbitModel);

  }

  cekIsEmpty(control: FormControl): {[s: string]: boolean} {
    console.log('sebelum ' + control.value);
    if (control.value && control.value.trim().length === null){
      console.log('sesudah ' + control.value);
      return { 'kosong': true };
    }
    return null;
  }

}
