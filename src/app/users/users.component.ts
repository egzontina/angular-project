import { Component, OnInit } from '@angular/core';
import { LokiService } from '../loki/loki.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [];
  uniqueDocs = 0;
  duplicateDocs = 0;
  // initializing pagination variable to one
  page: number = 1;

  constructor(private http: Http, private db: LokiService) {
  }

  ngOnInit() {
    this.saveJsonData();
  }
  // fetch data from json file
  private getJsonData() {
    const jsonData = this.http.get('assets/people.json').map(res => res.json());
    return jsonData;
  }
  // save json data on the lokijs
  private saveJsonData() {
    this.getJsonData().subscribe((res: any) => {
      res.forEach((user) => {
        const insertedTimestamp = new Date();
        this.saveUser(user, insertedTimestamp);
      });
      // get all users data
      this.users = this.db.users.chain().find().simplesort('insertedTimestamp', true).data();
      // get number of unique documents stored on the db
      this.uniqueDocs = this.users.length;
    });
  }

  // insert data
  private saveUser(user, insertedTimestamp) {
    // check if user exists
    if (this.db.users.findOne({
        'name': user.name,
        'email': user.email,
        'mac': user.mac,
        'city': user.city,
        'timestamp': user.timestamp,
        'creditcard': user.creditcard}) === null) {
      try {
        this.db.users.insert({
          'name': user.name,
          'email': user.email,
          'mac': user.mac,
          'city': user.city,
          'timestamp': user.timestamp,
          'creditcard': user.creditcard,
          'insertedTimestamp': insertedTimestamp
        });
      }catch (error) {
        console.log(error);
      }
    }else {
      this.duplicateDocs += 1;
    }
  }

}

