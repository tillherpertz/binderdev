import gql from "graphql-tag";

const PORTFOLIO_QUERY = gql`
query Portfolio {
    portfolios {
      data {
        attributes {
          Name
          Slug
        }
      }
    }
  }
`;

export default PORTFOLIO_QUERY;