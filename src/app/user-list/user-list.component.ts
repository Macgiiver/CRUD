import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interface/user-interface';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environment/environment';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  displayedColumns: string[] = ['Id', 'Nombre', 'Edad', 'CorreoElectronico', 'Telefono', 'Ocupacion', 'acciones'];
  private localStorageKey = 'userList';
  localStorageData: any;

  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.clearStorage();
    this.loadUsers();
  }

  loadUsers() {
    const storedUsers = localStorage.getItem(this.localStorageKey);
    if (storedUsers && storedUsers !== "[]") {
      this.users = JSON.parse(storedUsers);
    } else {
      this.userService.getUsers().subscribe(
        users => {
          this.users = users;
          this.saveToLocalStorage(users);
        },
        error => console.error('Error loading users:', error)
      );
    }
  }



  openEditDialog(user?: User): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '500px',
      data: user ? { ...user } : {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.Id) {
          const index = this.users.findIndex(u => u.Id === result.Id);
          if (index !== -1) {
            this.users[index] = result;
          }
        } else {
          const randomNumber = Math.floor(Math.random() * 1000);
          result.Id = randomNumber;
          result._id = this.generateRandomAlphanumeric(20);
          this.users.push(result);
        }
        this.saveToLocalStorage(this.users);

        const storedUsers = localStorage.getItem(this.localStorageKey);
        if (storedUsers) {
          this.users = JSON.parse(storedUsers);
        }
      }
    });
  }


  saveToLocalStorage(users: User[]) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(users));
  }

  clearStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify([]));
  }


  generateRandomAlphanumeric(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }

  delete(user: User): void {
    const index = this.users.indexOf(user);
    if (index >= 0) {
      this.users.splice(index, 1);
      this.saveToLocalStorage(this.users);
    }
    const storedUsers = localStorage.getItem(this.localStorageKey);
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }



}
