import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  list = [
    { id: 1, name: 'Usman', lastName: 'saleh' },
    { id: 2, name: 'Ibraheem', lastName: 'khan' },
    { id: 3, name: 'Moeez', lastName: 'khan' },
    { id: 4, name: 'Toseef', lastName: 'khan' }];

  constructor() { }

  getList() {
    return this.list;
  }

  getOne(id) {
    const i = this.list.findIndex((item) => item.id === id);
    return this.list[i];

  }
  save(user) {
    // this.list = [
    //   ...this.list,
    //   user,
    // ];
    this.list.push(user);
  }

  delete(id) {
    const index = this.list.findIndex((item) => item.id === id);
    this.list.splice(index, 1);
  }

  edit(value) {
    //  const updatedArray = this.list.map(x => x.id === value.id ? value : x);
    //  this.list = updatedArray;
    const index = this.list.findIndex((item) => item.id === value.id);
    this.list[index] = value;
  }
}
