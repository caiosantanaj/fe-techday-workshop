import gql from "graphql-tag";

export default gql`
  query ProjectsList {
    projects: allProjectses(orderBy:createdAt_DESC) {
      id
      title:titulo
      description
      images: projectimages {
        id
        url
      }
    }
  }`;
