import { Component } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { AddUserGQL, ExampleQueryGQL, ExampleQueryQuery } from 'src/shared/graphql';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'devschool-graphql-frontend';
  query: QueryRef<ExampleQueryQuery, any>;

  constructor(
    private apollo: Apollo,
    private usersQuery: ExampleQueryGQL,
    private addUserGQL: AddUserGQL) {
    this.query = usersQuery.watch()

    this.query.valueChanges.subscribe({
      next: (next) => {
        console.log(next);
      }
    })
  }

  fetchUsers() {
    this.query.refetch();
  }

  addUser() {
    this.addUserGQL.mutate({
      addUserData: {
        name: '345345',
      }
    })
    .subscribe({
      next: (next) => {
        console.log(next.data?.addUser.id);
      }
    })
  }
}
