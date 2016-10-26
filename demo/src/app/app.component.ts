import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  articles: any[];
  datas: FirebaseListObservable<any[]>;

  constructor(private http: Http, private af: AngularFire){
    // firebase
    this.datas = af.database.list('demo');

    // http
    http.get('assets/api/article.json')
    .subscribe(value => {
      this.articles = value.json();
    })
  }

  add(data){
    this.datas.push(data);
  }

  choose(choose: any[]){
    switch(choose[1]){
      case 'delete':
        this.af.database.object('demo/' + choose[0]).remove();
        break;

      case 'update':
        var item = this.af.database.object('demo/' + choose[0]);
        item.update({
          name: 'XDD',
          content: 'XDD'
        });
        break;

      case 'set':
        var item = this.af.database.object('demo/' + choose[0]);
        item.set({
          name: 'XDD',
          content: 'XDD'
        });
        break;
    }
  }
}
