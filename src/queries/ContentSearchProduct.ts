import { gql } from "@apollo/client";

const ContentSearchProductQuery = (language: string) =>  gql`
{
    search($fieldsEqual: [{name: "_templateName", value: "Product"}], language: "${language}") {
        results {
          items {
              item {
              fields(ownFields: true) {
                name
                value
              }
            }
          }
        }
    }
}`;

export default ContentSearchProductQuery;