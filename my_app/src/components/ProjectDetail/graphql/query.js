import gql from "graphql-tag";

export default gql`
query GetProjectsById($id: ID!) {
	project: Projects(id: $id) {
    description
    id
	titulo
    projectimages {
      url
    }
  }
}`;
