import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AnggotaService } from '../anggota.service';
import { AnggotaModel } from '../anggota.model';

@Component({
  selector: 'app-anggota-list',
  templateUrl: './anggota-list.component.html',
  styleUrls: ['./anggota-list.component.css'],
  providers: [AnggotaService]
})
export class AnggotaListComponent implements OnInit {

  constructor(private anggService: AnggotaService) { }

  @Output() idAnggota: EventEmitter<String> = new EventEmitter();

  anggotaList: AnggotaModel[];

  ngOnInit() {
  
    
    this.anggService.getListAnggota()
    .subscribe(data => {
      this.anggotaList = data;
    });
  }

  edit(id) {
    this.idAnggota.emit(id);
  }

}
