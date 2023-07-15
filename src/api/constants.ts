import { type CardAPI } from '~/entities/Card';

export const BASE_API_URL = import.meta.env.VITE_API_URL as string;

export type ResponseAPI = {
  docs: CardAPI[];
  total: number;
  page: number;
  limit: number;
};

export const KeyAdmin = 'MQ8NM3X-032MMNR-HKKA254-T6Q26B4';

export const cardRequestFields = [
  'name',
  'year',
  'rating',
  'poster',
  'alternativeName',
  'id',
  'genres.name',
  'countries.name'
];

export const AmountViewsMovie = '500000-10000000';
export const AmountViewsBlank = '1-1000000000';
