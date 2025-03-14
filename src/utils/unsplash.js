import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: 'YOUR_UNSPLASH_ACCESS_KEY' // Get this from unsplash.com/developers
});

export const getImages = async (query) => {
  const result = await unsplash.search.getPhotos({
    query,
    perPage: 10
  });
  return result.response.results;
}; 