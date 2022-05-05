import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  friends: Array<User>;
  fullName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  name: Scalars['String'];
};

export type UserInput = {
  name: Scalars['String'];
};

export type AddUserMutationVariables = Exact<{
  data: UserInput;
}>;


export type AddUserMutation = { __typename?: 'Mutation', addUser: { __typename?: 'User', id: string, name: string } };

export type FetchUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, name: string }> };

export const AddUserDocument = gql`
    mutation addUser($data: UserInput!) {
  addUser(data: $data) {
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
export const FetchUsersDocument = gql`
    query FetchUsers {
  users {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchUsersGQL extends Apollo.Query<FetchUsersQuery, FetchUsersQueryVariables> {
    document = FetchUsersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }