import gql from "graphql-tag";

const PORTFOLIO_SINGLE_QUERY = gql`
query Portfolio($slug: String!) {
    portfolios(filters: { Slug: { eq: $slug } }) {
      data {
        id
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

export default PORTFOLIO_SINGLE_QUERY;