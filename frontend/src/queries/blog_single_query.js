import gql from "graphql-tag";

const BLOG_SINGLE_QUERY = gql`
query Blogpost($slug: String!) {
    blogposts(filters: { Slug: { eq: $slug } }) {
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

export default BLOG_SINGLE_QUERY;