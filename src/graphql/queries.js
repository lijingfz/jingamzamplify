/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCFtemplate = /* GraphQL */ `
  query GetCFtemplate($id: ID!) {
    getCFtemplate(id: $id) {
      id
      name
      S3link
      desc
      group
      cfstack {
        items {
          id
          stackname
          stack
          status
          createuser
          output
          templateID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCFtemplates = /* GraphQL */ `
  query ListCFtemplates(
    $filter: ModelCFtemplateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCFtemplates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        S3link
        desc
        group
        cfstack {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCFstack = /* GraphQL */ `
  query GetCFstack($id: ID!) {
    getCFstack(id: $id) {
      id
      stackname
      stack
      status
      createuser
      output
      templateID
      cftemplate {
        id
        name
        S3link
        desc
        group
        cfstack {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCFstacks = /* GraphQL */ `
  query ListCFstacks(
    $filter: ModelCFstackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCFstacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        stackname
        stack
        status
        createuser
        output
        templateID
        cftemplate {
          id
          name
          S3link
          desc
          group
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
