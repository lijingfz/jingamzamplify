/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCFtemplate = /* GraphQL */ `
  subscription OnCreateCFtemplate {
    onCreateCFtemplate {
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCFtemplate = /* GraphQL */ `
  subscription OnUpdateCFtemplate {
    onUpdateCFtemplate {
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCFtemplate = /* GraphQL */ `
  subscription OnDeleteCFtemplate {
    onDeleteCFtemplate {
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCFstack = /* GraphQL */ `
  subscription OnCreateCFstack {
    onCreateCFstack {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCFstack = /* GraphQL */ `
  subscription OnUpdateCFstack {
    onUpdateCFstack {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCFstack = /* GraphQL */ `
  subscription OnDeleteCFstack {
    onDeleteCFstack {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
