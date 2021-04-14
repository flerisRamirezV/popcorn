export const GET_MOVIES="GET_MOVIES";
export const API_KEY="3a1c0d290e53001f07de1f57d2cd42ce";
export const URL=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`
export const GET_MOVIES_RATED="GET_MOVIES_RATED";
export const URL_API_RATED=`http://api.themoviedb.org/3/discover/movie?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=${API_KEY}`