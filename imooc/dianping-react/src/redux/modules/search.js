export const types = {
  FETCH_POPULAR_KEYWORDS_REQUEST: 'SEARCH/FETCH_POPULAR_KEYWORDS_REQUEST',
  FETCH_POPULAR_KEYWORDS_SUCCESS: 'SEARCH/FETCH_POPULAR_KEYWORDS_SUCCESS',
  FETCH_POPULAR_KEYWORDS_FAILURE: 'SEARCH/FETCH_POPULAR_KEYWORDS_FAILURE',
} 

const initialState = {
  inputText: '',
  popularKeywords: {
    isFetching: false,
    ids: []
  },
  relatedKeywords: {

  },
  historyKeywords: []
}