import movieAPI from "./movieAPI";

export const searchShows = async () => {
  const showSearch = 'rick and morty';
  const response = await movieAPI
    .get(`/search/shows?q=${showSearch}`)
    .catch(error => {
      console.log(error);
    });
  const data = await response.data;
  console.log(data);
};
