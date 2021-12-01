import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};



export type Mutation = {
  __typename?: 'Mutation';
  addUser: User;
};


export type MutationAddUserArgs = {
  data: UserInput;
};

export type Query = {
  __typename?: 'Query';
  users: Array<User>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  friends: Array<User>;
  firstName: Scalars['String'];
};

export type UserInput = {
  name: Scalars['String'];
};

export type AddUserMutationVariables = Exact<{
  addUserData: UserInput;
}>;


export type AddUserMutation = { __typename?: 'Mutation', addUser: { __typename?: 'User', id: string, name: string } };

export type BasicUserFragment = { __typename?: 'User', id: string, name: string };

export type ExampleQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ExampleQueryQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, name: string }> };

export const BasicUserFragmentDoc = gql`
    fragment BasicUser on User {
  id
  name
}
    `;
export const AddUserDocument = gql`
    mutation AddUser($addUserData: UserInput!) {
  addUser(data: $addUserData) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddUserGQL extends Apollo.Mutation<AddUserMutation, AddUserMutationVariables> {
    document = AddUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ExampleQueryDocument = gql`
    query ExampleQuery {
  users {
    ...BasicUser
  }
}
    ${BasicUserFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ExampleQueryGQL extends Apollo.Query<ExampleQueryQuery, ExampleQueryQueryVariables> {
    document = ExampleQueryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }