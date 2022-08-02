import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsApiHeaders = {
	'X-BingApis-SDK': 'true',
	'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
	'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

/*
 params: {
    q: 'Cryptocurrency',
    cc: 'US',
    freshness: 'Day',
    textFormat: 'Raw',
    safeSearch: 'Off'
  },
*/
const createRequest = (url, newsCategory, count) => ({
	url,
	headers: cryptoNewsApiHeaders,
	params: { q: newsCategory, cc: 'US', freshness: 'Day', safeSearch: 'Off', count },
});

export const cryptoNewsApi = createApi({
	reducerPath: 'cryptoNewsApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptoNews: builder.query({
			query: ({ newsCategory, count }) => createRequest('news/search', newsCategory, count),
		}),
	}),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
