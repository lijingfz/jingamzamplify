/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncCFtemplates = /* GraphQL */ `
  query SyncCFtemplates(
    $filter: ModelCFtemplateFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCFtemplates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        S3link
        desc
        group
        cfstack {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
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
          stackstatus
          createuser
          cfoutput
          templateID
          createdAt
          updatedAt
        }
        nextToken
        startedAt
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
          startedAt
        }
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCFstacks = /* GraphQL */ `
  query SyncCFstacks(
    $filter: ModelCFstackFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCFstacks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        stackname
        stack
        stackstatus
        createuser
        cfoutput
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
      startedAt
    }
  }
`;
export const getCFstack = /* GraphQL */ `
  query GetCFstack($id: ID!) {
    getCFstack(id: $id) {
      id
      stackname
      stack
      stackstatus
      createuser
      cfoutput
      templateID
      cftemplate {
        id
        name
        S3link
        desc
        group
        cfstack {
          nextToken
          startedAt
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
        stackstatus
        createuser
        cfoutput
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
      startedAt
    }
  }
`;
export const byStack = /* GraphQL */ `
  query ByStack(
    $stack: String
    $sortDirection: ModelSortDirection
    $filter: ModelCFstackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byStack(
      stack: $stack
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        stackname
        stack
        stackstatus
        createuser
        cfoutput
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
      startedAt
    }
  }
`;
