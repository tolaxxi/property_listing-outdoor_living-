import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Properties } from '../types/propertyListing';

export const propertyApi = createApi({
  reducerPath: 'propertyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/',
  }),

  endpoints: (builder) => ({
    getProperties: builder.query<Properties, void>({
      query: () => `4-frontend-libaries/challenges/group_1/data/property-listing-data.json`,
    }),
  }),
});
export const { useGetPropertiesQuery } = propertyApi;
