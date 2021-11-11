import { createContext, useReducer, useEffect } from "react";
import axios from 'axios'
import { authReducer } from "../reducers/authReducer";
import{apiUrl, LOCAL_STOGARE_TOKEN_NAME} from './contens'
import setaxiostoken from "../axiostken/axiostoken";


export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [authState, dispatch] = useReducer(authReducer, {
		authLoading: false,
		isAuthenticated: false,
		user: null
	})

    //data state frist
 
    
// set auth
    const loadUser =  () => {
        dispatch({
            type: 'LOAD_USER',
            payload:true
        })

        setTimeout(async() => {
            if (localStorage[LOCAL_STOGARE_TOKEN_NAME]) {
           
            setaxiostoken(localStorage[LOCAL_STOGARE_TOKEN_NAME])
        }
        try {
            const responseuser = await axios.get(`${apiUrl}/auth`);
            
          
            if (responseuser.data.success) {
               dispatch({
					type: 'SET_AUTH',
					payload:responseuser.data.user
				})
                   
            }
        } catch (error) {
            localStorage.removeItem(LOCAL_STOGARE_TOKEN_NAME)
            dispatch({
                type: 'log_out',
                payload:null
     
            })
            

            
        }
        },1000)
        
    }
// useEffect(() => loadUser(), [])
    
    //login
    const loginUser = async (userForm) => {
        try {

            const response = await axios.post(`${apiUrl}/auth/login`, userForm)
            

            if (response.data.success) {
                localStorage.setItem(LOCAL_STOGARE_TOKEN_NAME, response.data.accessToken);
                await loadUser();
            
                return response.data
            }
            
          
        } catch (error) {
            
            return error.response.data
            
        }
        
    }
     

    
    // register
    const registerUser = async(registerform) => {
        
        try {
            const resRegisterUser = await axios.post(`${apiUrl}/auth/register`,registerform)
            if (resRegisterUser.data.success) {
                return resRegisterUser.data
            }
           

        } catch (error) {

               return error.response.data
            
        }

    }
    // update user
    const updateuser = async(formupdate) => {
        
        try {
            const response = await axios.put(`${apiUrl}/auth/update`, formupdate)
            
            if (response.data.success) {
                dispatch({
                    type: 'update_user',
                    payload:response.data.user
                })
                
            }
              return response.data
    
        } catch (error) {
            return error.response.data
        }
    }
//logout
    const logoutUser = () => {
        localStorage.removeItem(LOCAL_STOGARE_TOKEN_NAME)
            dispatch({
                type: 'LOG_OUT',
                payload:null
     
            })
    }


    const AuthContextData = {
        loginUser,
        registerUser,
        authState,
        logoutUser,
        updateuser
    }
    console.log(children)
    return (
        <AuthContext.Provider value={AuthContextData}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;