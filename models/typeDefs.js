const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    students: [Student] 
    student(id: ID): Student 
  }
  type Student {
    id: ID
    firstName: String!
    lastName: String!
    age: Int
    email: String
    sex: String
  }
  type Mutation {
    create(
      firstName: String, 
      lastName: String, 
      age: Int, email: 
      String, 
      sex: String): Student
    update(
      id: ID, 
      firstName: String, 
      lastName: String, 
      age: Int, email: 
      String, sex: 
      String): Student
    delete(id: ID): Student
  }
`;

module.exports = { typeDefs };
