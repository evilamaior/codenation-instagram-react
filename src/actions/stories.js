export const GET_STORIES_REQUEST = '@actions/get_stories/request';
export const GET_STORIES_SUCCESS = '@actions/get_stories/success';
export const GET_STORIES_FAILURE = '@actions/get_stories/failure';

export const getStoriesRequest = () => ({
  type: GET_STORIES_REQUEST,
});

export const getStoriesSuccess = (stories) => ({
  type: GET_STORIES_SUCCESS,
  payload: [...stories],
});

export const getStoriesError = (error) => ({
  type: GET_STORIES_SUCCESS,
  error,
});

export const getStories = () => (dispatch) => {
  dispatch(getStoriesRequest());
  console.log('caiu');

  fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories')
    .then((response) => response.json())
    .then((data) => dispatch(getStoriesSuccess(data)))
    .catch((error) => dispatch(getStoriesError(error)));
};
