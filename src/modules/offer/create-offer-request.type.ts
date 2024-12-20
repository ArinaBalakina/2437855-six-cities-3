import { Request } from 'express';
import { RequestBody, RequestParams } from '../../rest/index.js';
import { CreateOfferDto } from './dto/index.js';
import { UpdateOfferDto } from './dto/update-offer.dto.js';

export interface GetOffers {
  size?: string,
  city?: string,
}

export type UpdateOfferParams = RequestParams & {
  id: string
}

export type CreateOfferRequest = Request<RequestParams, RequestBody, CreateOfferDto>;

export type UpdateOfferRequest = Request<RequestParams, RequestBody, UpdateOfferDto>;

export type GetOffersRequest = Request<RequestParams, RequestBody, CreateOfferDto, GetOffers>;
