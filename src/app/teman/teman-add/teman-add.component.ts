import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { Teman } from '../teman.model';
import { TemanserviceService } from '../teman-service.service';

@Component({
  selector: 'app-teman-add',
  templateUrl: './teman-add.component.html',
  styleUrls: ['./teman-add.component.css'],
  providers: [TemanserviceService]
})
export class TemanAddComponent implements OnInit {
  @ViewChild('inputNama') inputNama: ElementRef;
  @ViewChild('inputContact') inputContact: ElementRef;

  @Output() temanAdded = new EventEmitter<Teman>();

  @Input() temanChild: Teman;
  @Input() temanEditParent: Teman;

  // inputInfo didapat ng model di teman-add.componen.html dan Teman itu di dapat dari teman.model.ts
  inputInfo: Teman = new Teman();
  constructor(private temans: TemanserviceService) { }
  ngOnInit() {
  }

  // tambahTeman() di dapat dari teman-add.component.html
  tambahTeman(inputEmail: HTMLInputElement) {
    // console.log(this.inputInfo);
    // // ini tanpa @ViewChild
    // console.log(this.inputNama.nativeElement.value);
    // console.log(inputEmail.value);
    // console.log(this.inputContact.nativeElement.value);

    //ini convert nama teman didapat dari temans service
    this.temanAdded.emit(this.temans.converTeman(this.inputInfo));
    //instansisasi ulang, supaya tidak bisa edit di form
    this.inputInfo = new Teman();

  }

}
