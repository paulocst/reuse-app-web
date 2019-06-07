import { Component, OnInit } from '@angular/core';
import { EntryService } from '../../../services/local/entry.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styles: []
})
export class EntryComponent implements OnInit {

  constructor( public entryService: EntryService) { }

  ngOnInit() {
  }
}
