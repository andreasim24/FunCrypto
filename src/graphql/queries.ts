/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      name
      image
      networth
      portfolioCoins {
        items {
          id
          amount
          userId
          coinId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        name
        image
        networth
        portfolioCoins {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPortfolioCoin = /* GraphQL */ `
  query GetPortfolioCoin($id: ID!) {
    getPortfolioCoin(id: $id) {
      id
      amount
      userId
      user {
        id
        email
        name
        image
        networth
        portfolioCoins {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      coinId
      coin {
        id
        cgId
        name
        symbol
        image
        currentPrice
        valueChange24H
        valueChange1D
        valueChange7D
        priceHistoryString
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPortfolioCoins = /* GraphQL */ `
  query ListPortfolioCoins(
    $filter: ModelPortfolioCoinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPortfolioCoins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        amount
        userId
        user {
          id
          email
          name
          image
          networth
          createdAt
          updatedAt
          owner
        }
        coinId
        coin {
          id
          cgId
          name
          symbol
          image
          currentPrice
          valueChange24H
          valueChange1D
          valueChange7D
          priceHistoryString
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getCoin = /* GraphQL */ `
  query GetCoin($id: ID!) {
    getCoin(id: $id) {
      id
      cgId
      name
      symbol
      image
      currentPrice
      valueChange24H
      valueChange1D
      valueChange7D
      priceHistoryString
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listCoins = /* GraphQL */ `
  query ListCoins(
    $filter: ModelCoinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cgId
        name
        symbol
        image
        currentPrice
        valueChange24H
        valueChange1D
        valueChange7D
        priceHistoryString
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
