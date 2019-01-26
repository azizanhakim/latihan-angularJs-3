import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../../node_modules/@angular/forms';
import { Subscription } from '../../../../node_modules/rxjs';
import { AnggotaModel } from './anggota.model';
import { ActivatedRoute } from '@angular/router';
import { AnggotaService } from './anggota.service';

@Component({
  selector: 'app-anggota',
  templateUrl: './anggota.component.html',
  styleUrls: ['./anggota.component.css'],
  providers: [AnggotaService]
})
export class AnggotaComponent implements OnInit {

  idx: string;

  kirimId(id){
    this.idx = id;
  }

  constructor(private anggotaService: AnggotaService, private route: ActivatedRoute) {
    
    
   }

  ngOnInit() {
  }

}
