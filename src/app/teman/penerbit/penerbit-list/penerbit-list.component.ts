import { Component, OnInit } from '@angular/core';
import { PenerbitService } from '../penerbit.service';
import { PenerbitModel } from '../penerbit.model';

@Component({
  selector: 'app-penerbit-list',
  templateUrl: './penerbit-list.component.html',
  styleUrls: ['./penerbit-list.component.css'],
  providers: [PenerbitService]
})
export class PenerbitListComponent implements OnInit {

  constructor(private penerbitService: PenerbitService) { }

  penerbitList: PenerbitModel[];

  ngOnInit() {
    
    this.penerbitService.getListPenerbit()
    .subscribe(data => {
      this.penerbitList = data;
    });
  }

}
