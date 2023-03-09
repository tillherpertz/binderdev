import gql from "graphql-tag";

const HOME_QUERY = gql`
  query Homepage {
    homepage {
      data {
        attributes {
          Headline
          Paragraph
        }
      }
    }
  }
`;

export default HOME_QUERY;