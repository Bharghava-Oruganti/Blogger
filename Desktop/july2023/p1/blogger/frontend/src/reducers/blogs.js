import { GET_BLOGS } from '../actions/types.js'

const initialState = {
    blogs : []
}

export default function BlogReducer(state = initialState, action){
    switch (action.type) {
        case GET_BLOGS:
            return {
                ...state,
                blogs : action.payload
            }
            
        default:
            return state
    }
}