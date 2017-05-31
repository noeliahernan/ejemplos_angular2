import { Component, OnInit } from '@angular/core';
import { ApiService, Note, User } from '../../services/api.service';

@Component({
  selector: 'note-cmp',
  template: '<p class="note"><i>{{note}}</i></p>'
})

export class NoteComponent implements OnInit 
{
  note: string = '...';
  user: User;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getNote(1).then(note => this.note = note.text);
  }
}