import { City, Conveniences, HouseTypeEnum } from './index.js';

export type Offer = {
  title: string;
  description: string;
  postDate: Date;
  city: City;
  preview: string;
  images: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rate: number;
  houseType: HouseTypeEnum;
  room: number;
  guest: number;
  price: number;
  conveniences: Conveniences[];
  userId: string;
  commentsCount: number;
  coords: [string, string];
}