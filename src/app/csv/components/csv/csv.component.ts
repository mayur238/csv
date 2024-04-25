import { Component } from '@angular/core';
import { User } from '../../class/user';
import { Papa } from 'ngx-papaparse';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css'],
})
export class CsvComponent {
  users: User[] = [];
  user: User = new User();
  constructor(private papa: Papa) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.readCSV(file);
    }
  }

  private readCSV(file: File) {
    this.papa.parse(file, {
      complete: (result) => {
        const data: any[] = result.data;
        this.users = data.map((row) => {
          let user = new User();
          user.name = row[0];
          user.address = row[1];
          user.phoneNo = row[2];
          return user;
        });
        console.log(this.users);
      },
    });
  }

  onAddUser(user: User) {
    this.users.push(user);

    this.parseAndSave(this.users);
  }

  onUpdateUser(user: User) {}

  onClickDelete(user: User) {
    console.log(this.users.indexOf(user));
    this.users.splice(this.users.indexOf(user), 1);
    this.parseAndSave(this.users);
  }

  onClickUpdate(user: User) {
    console.log(this.users.indexOf(user));

    this.users[this.users.indexOf(user)] = user;
    this.parseAndSave(this.users);
  }

  parseAndSave(users: User[]) {
    const arrayData = users.map((user) => [
      user.name,
      user.address,
      user.phoneNo,
    ]);

    const csv = this.papa.unparse(arrayData);

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });

    saveAs(blob, 'updated_users.csv');
  }
}
