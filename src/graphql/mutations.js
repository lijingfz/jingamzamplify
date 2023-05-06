/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCFtemplate = /* GraphQL */ `
  mutation CreateCFtemplate(
    $input: CreateCFtemplateInput!
    $condition: ModelCFtemplateConditionInput
  ) {
    createCFtemplate(input: $input, condition: $condition) {
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
export const updateCFtemplate = /* GraphQL */ `
  mutation UpdateCFtemplate(
    $input: UpdateCFtemplateInput!
    $condition: ModelCFtemplateConditionInput
  ) {
    updateCFtemplate(input: $input, condition: $condition) {
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
export const deleteCFtemplate = /* GraphQL */ `
  mutation DeleteCFtemplate(
    $input: DeleteCFtemplateInput!
    $condition: ModelCFtemplateConditionInput
  ) {
    deleteCFtemplate(input: $input, condition: $condition) {
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
export const createCFstack = /* GraphQL */ `
  mutation CreateCFstack(
    $input: CreateCFstackInput!
    $condition: ModelCFstackConditionInput
  ) {
    createCFstack(input: $input, condition: $condition) {
      id
      stackname
      stack
      status
      createuser
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
export const updateCFstack = /* GraphQL */ `
  mutation UpdateCFstack(
    $input: UpdateCFstackInput!
    $condition: ModelCFstackConditionInput
  ) {
    updateCFstack(input: $input, condition: $condition) {
      id
      stackname
      stack
      status
      createuser
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
export const deleteCFstack = /* GraphQL */ `
  mutation DeleteCFstack(
    $input: DeleteCFstackInput!
    $condition: ModelCFstackConditionInput
  ) {
    deleteCFstack(input: $input, condition: $condition) {
      id
      stackname
      stack
      status
      createuser
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
