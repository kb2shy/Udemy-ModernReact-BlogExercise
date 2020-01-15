import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => dispatch => {
    jsonPlaceholder.get('/posts')
    .then(response => {
        return dispatch({ type: 'FETCH_POSTS', payload: response })
    })
}