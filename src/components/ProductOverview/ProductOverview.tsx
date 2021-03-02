import * as React from 'react';
import { ISitecoreProps } from '../../models/generic/ISitecoreProps';
import { IProduct } from '../../models/data/IProduct';
import { Text, RichText, Image, DateField } from '@sitecore-jss/sitecore-jss-react';

export default class ProductOverview extends React.Component<ISitecoreProps<IProduct>> {
  render() {
    return <div>
      <Text field={this.props.fields.Title} />
      <RichText field={this.props.fields.Description} />
      <Image field={this.props.fields.Image} />
      <DateField field={this.props.fields.OfferDate} />
      <Text field={this.props.fields.Quantity} />
    </div>
  }
}