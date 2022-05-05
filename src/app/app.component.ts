import { Component } from '@angular/core';
import { Apollo, gql, } from 'apollo-angular';
import { AddUserGQL, FetchUsersGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'devschool-graphql-frontend';

  constructor(
    private fetchUsersGQL: FetchUsersGQL,
    private addUserGQL: AddUserGQL,

  ) {

  }

  fetchUsers() {
    this.fetchUsersGQL
      .fetch()
      .subscribe({
        next: (result) => {
          console.log(result.data.users);
        }
      })
  }

  addUser() {
    this.addUserGQL
      .mutate({
        data: {
          name: '435'
        }
      })
      .subscribe({
        next: (result) => {
          console.log(result)
        }
      })
  }
}
