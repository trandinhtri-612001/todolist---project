


 export const postreducer = (state, action) => {
  const { type, payload } = action 
    switch (type) {
        case 'GET_POST':
            return {
                ...state,
                posts: payload,
                postloading:false

            }
        case 'ADD_POST':
            return {
                ...state,
                posts:[...state.posts, payload]
            }
        case 'DELETE_POST':
            return {
                ...state,
                posts: state.posts.filter((post) => {
                    return post._id !== payload
                    
                })
            }
        case 'UPDATE_POST':
            
                const newpost = state.posts.map((post) => {
                    if (post._id == payload._id) {
                        return payload

                    } else {
                        return post
                    }
                })
            return {
                ...state,
                posts:newpost

            }
                default:
            return state
            
    }
}