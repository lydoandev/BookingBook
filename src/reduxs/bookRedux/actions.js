export const FETCH_BOOKS = 'FETCH_BOOKS';
export const FETCH_BOOKS_SUCCESSED = 'FETCH_BOOKS_SUCCESSED';

export const FETCH_CMS_HOME = 'FETCH_CMS_HOME';
export const FETCH_CMS_HOME_SUCCESSED = 'FETCH_CMS_HOME_SUCCESSED';

export const fetchBooks = () => {
  return {type: FETCH_BOOKS};
};

export const fetchCmsHome = () => {
  return {type: FETCH_CMS_HOME};
};
