import gql from "graphql-tag";

const PORTFOLIO_COLLECTION_QUERY = gql`
query Portfolio {
    portfolios {
      data {
        attributes {
            Image {
                data {
                  attributes{
                    url
                  }
                }
              }
            Title
            Description
            Slug
        }
      }
    }
  }
`;

export default PORTFOLIO_COLLECTION_QUERY;