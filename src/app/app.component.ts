import { Component } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'devschool-graphql-frontend';
  constructor(apollo: Apollo) {
    const watchQuery = apollo.watchQuery({
      query: gql`query ExampleQuery {
        users {
          id
          name
        }
      }
      `,
      fetchPolicy: 'network-only',

    });
    watchQuery.valueChanges.subscribe(result => {
      console.log(result);
    })

    apollo.mutate({
      mutation: gql`
        mutation addUser($data: UserInput!) {
          addUser(data: $data) {
            id
            name
          }
        }
      `,
      variables: {
        data: {
          name: "Ravi"
        }
      }
    }).subscribe(result => {
      console.log(result);
    })

  }
}
