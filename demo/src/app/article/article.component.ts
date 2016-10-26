import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() item: any;
  @Output() seleteKey = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selete_item(key, str){
    this.seleteKey.emit([key, str]);
  }


}
