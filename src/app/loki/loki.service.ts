import { Injectable } from '@angular/core';

declare var require: any;

@Injectable()
export class LokiService {

  // initialize lokijs database
  private Loki = require('lokijs');
  public db;
  public users;
  public testCollection;

  constructor() {
    // create db
    this.db = new this.Loki('db-test');
    // create users collection
    this.users = this.db.addCollection('users', {
      clone: true
    });
    // test collection
    this.testCollection = this.db.addCollection('testCollection', {
      clone: true,
      unique: ['name', 'email', 'city', 'mac', 'creditcard']
    });
  }

}
