export const authReducer = (state, action) => {
    const { type,
        payload,
    } = action
   
    switch (type) {
        case 'LOAD_USER':
            return {
                ...state,
                authLoading: payload,
                isAuthenticated: false,
                user: null
            }
        case 'SET_AUTH':
            return {
                ...state,
		authLoading:false,
		isAuthenticated:true,
		user:payload
            }
        
        case 'LOG_OUT':
            return {
                ...state,
                authLoading: false,
                isAuthenticated: false,
                user:payload
            }
        case 'update_user':
            return {
                ...state,
                authLoading: false,
                isAuthenticated: true,
                user:payload
            }
        default:
            return state
    }

}