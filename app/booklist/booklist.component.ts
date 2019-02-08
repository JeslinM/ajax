import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
public BookDetails:any=[{title:"Book 1",author:"author1",publisher:"publisher 1"},
{title:"Book 2",author:"author2",publisher:"publisher 2"},
{title:"Book 12",author:"author3",publisher:"publisher 3"}];
sellbook:any;
addBook(data:any){
this.sellbook=data;

}
  constructor() { }

  ngOnInit() {
  }

}
