import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => dispatch => {
    jsonPlaceholder.get('/posts')
    .then(response => {
        return dispatch({ type: 'FETCH_POSTS', payload: response.data })
    })
}

export const fetchUser = (id) => dispatch => {
    _fetchUser(id, dispatch);
}

const _fetchUser = _.memoize((id, dispatch) => {
    
    jsonPlaceholder.get(`/users/${id}`)
    .then(response => {
        return dispatch({ type: 'FETCH_USER', payload: response.data });
    })
});