import gql from "graphql-tag";

const BLOG_COLLECTION_QUERY = gql`
query Blogposts {
    blogposts {
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

export default BLOG_COLLECTION_QUERY;