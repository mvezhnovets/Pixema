export interface CardAPI {
  id: number;
  name: string;
  alternativeName: string;
  poster: Record<'url', string>;
  year: number;
  rating: Record<'kp', number>;
  genres: Record<'name', string>[];
  countries: Record<'name', string>[];
  type: string;
  budget: Record<'value', number>;
  productionCompanies: Record<'name', string>[];
  description: string;
}
