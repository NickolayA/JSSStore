import * as React from 'react';
import { useContext, useState } from "react";
import { gql } from '@apollo/client';

import { SitecoreContextReactContext } from "@sitecore-jss/sitecore-jss-react";

import { ApolloConsumer, getApolloContext } from "react-apollo";
import { ISitecoreProps } from '../../models/generic/ISitecoreProps';

import ContentSearchProduct from "../../queries/ContentSearchProduct";


// export default class Products extends React.Component<ISitecoreProps<IProducts>> {
//   //static contextType = getApolloContext();
//   //private sitecoreContext = useContext(SitecoreContextReactContext); 

//   static contextType = SitecoreContextReactContext;

//   componentDidMount(): void {
//     console.log(this, this.context, SitecoreContextReactContext);

//     // this.context.client.query({
//     //   query: gql`
//     //   {
//     //     search(
//     //       fieldsEqual:[{name:"_content", value:"home" }, {name:"_fullpath", value:"/sitecore/content*"}]) {
//     //         results {
//     //           items {
//     //             item {
//     //               id
//     //             }
//     //           }
//     //         }
//     //       }
//     //   }
//     //   `
//     // }).then((value: object) => console.log(value))
//   }

//   render(){
//     return (
//       <ApolloConsumer>
//         {
//           (client) => {
//             return <p>Hello from Products</p>
//           }
//         }
//       </ApolloConsumer>
//     )
//   }
// }
// TODO change object to interface
const Products: React.FunctionComponent<ISitecoreProps<object>> = (props: ISitecoreProps<object>) => {
  const sitecoreContext = useContext(SitecoreContextReactContext);
  const apolloContext = useContext(getApolloContext());

  console.log(sitecoreContext.context, props);

  const [products, setProducts] = useState([{name: "Title", value: "Test Product"}]);

  apolloContext.client?.query({ query: ContentSearchProduct(sitecoreContext.context.language) })
  .then(result => setProducts(result.data.search.results.items.map((item: any) => item.fields.map((field: any) => field))));

  // apolloContext.client?.query({ query: ContentSearchProduct(sitecoreContext.context.language) })
  // .then(result => console.log(result));

  // TODO STRONG TYPE

  return (
    <React.Fragment>
      <h1>Hello from Products</h1>
      {products.map(product => {
        return <h1>Hello {product.name}</h1>
      })};
    </React.Fragment>
  )
}

export default Products;