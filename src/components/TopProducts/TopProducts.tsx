import React, { FunctionComponent } from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import ISitecoreProduct from '../../models/data/ISitecoreProduct';
import { ISitecoreProps } from '../../models/generic/ISitecoreProps';
import ITopProducts from '../../models/data/ITopProducts';

export const TopProducts: FunctionComponent<ISitecoreProps<ITopProducts>> = ({ fields }) => {
  return (
    <React.Fragment>
      <Text field={fields.Title} tag="p" />
      <Text field={fields.Description} tag="p" />
      {fields.ListOfProducts.map((product) => {
        return (
          <div key={`${product.id}`}>
            <Text field={product.fields.Title} tag="p" />
            <Text field={product.fields.ShortDescription} tag="p" />
          </div>
        );
      })}
    </React.Fragment>
  );
};