import axios from 'axios'

import { GET_BLOGS } from './types'

// Actions
// Get Blogs

export const getBlogs = () => dispatch => {
    axios.get('/api/blogs/')
        .then(res => {
            dispatch({
                type: GET_BLOGS,
                payload: res.data
            });
        })
        .catch(err => { console.log(err) });
}

// Delete blogs 
