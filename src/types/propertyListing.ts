export interface Properties {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  superhost: boolean;
  location: string;
  capacity: {
    people: number;
    bedroom: number;
  };
  image: string;
}

export interface PropertyFilter {
  country?: string;
  superHost?: boolean;
  maxGuest?: number;
}
