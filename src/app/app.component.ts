import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private db: AngularFirestore) {
    this.db
      .collection('a')
      .get()
      .toPromise()
      .then((res) => console.log('RES', res));
  }
  title = 'tienda-bolsos';
}
