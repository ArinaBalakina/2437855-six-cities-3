import {defaultClasses, getModelForClass, modelOptions, prop, Ref} from '@typegoose/typegoose';
import {Good, City, OfferType, Location} from '../../types/index.js';
import {UserEntity} from '../user/index.js';

export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({
    trim: true,
    required: true,
    type: () => String,
  })
  public title: string;

  @prop({
    trim: true,
    required: true,
    type: () => String,
  })
  public description: string;

  @prop({
    required: true,
    type: () => Date,
  })
  public postDate: Date;

  @prop({
    required: true,
    type: () => Object,
  })
  public city: City;

  @prop({
    required: true,
    type: () => String,
  })
  public previewImage: string;

  @prop({
    required: true,
    default: [],
    type: () => Array<string>,
  })
  public images: string[];

  @prop({
    required: true,
    type: () => Boolean,
  })
  public isPremium: boolean;

  @prop({
    required: true,
    type: () => Boolean,
  })
  public isFavorite: boolean;

  @prop({
    required: true,
    type: () => Number,
  })
  public rating: number;

  @prop({
    required: true,
    type: () => String,
    enum: OfferType
  })
  public type: OfferType;

  @prop({
    required: true,
    type: () => Number,
  })
  public bedrooms: number;

  @prop({
    required: true,
    type: () => Number,
  })
  public maxAdults: number;

  @prop({
    required: true,
    type: () => Number,
  })
  public price: number;

  @prop({
    required: true,
    type: () => Array<string>,
  })
  public goods: Good[];

  @prop({
    required: true,
    ref: UserEntity,
  })
  public host: Ref<UserEntity>;

  @prop({
    type: () => Number,
    default: 0
  })
  public commentCount: number;

  @prop({
    required: true,
    type: () => Object,
  })
  public location: Location;
}

export const OfferModel = getModelForClass(OfferEntity);
