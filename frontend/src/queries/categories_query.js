import gql from "graphql-tag";

const CAT_QUERY = gql`
query Categories {
    categories {
      data {
        attributes {
          Name
          Slug
        }
      }
    }
  }
`;

export default CAT_QUERY;