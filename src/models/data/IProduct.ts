import { ISitecoreField } from "../generic/ISitecoreField";
import { ISitecoreImage } from "../generic/ISitecoreImage";

export interface IProduct {
    Title: ISitecoreField<string>;
    Description: ISitecoreField<string>;
    Image: ISitecoreField<ISitecoreImage>;
    OfferDate: ISitecoreField<string>;
    Quantity: ISitecoreField<string>;
}
