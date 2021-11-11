import { createContext, useState ,useReducer , useEffect} from "react";
import { apiUrl } from "./contens";
import axios from "axios";
import { postreducer } from "../reducers/postreducer";


export const PostContext = createContext();


const PostContextProvider = ({children}) => {
     
    const [postState, dispatch] = useReducer(postreducer, {
        posts: [],
        postloading:true
    })
  
    
    const [postdata, setpostdata] = useState({
        _id:'',
        title: '',
        description:'',
        url:'',
        status:''
    })
    const [showAddpostmodal, setshowAddpostmodal] = useState(false)
    // state show update post
    const [showupdatepostmodal, setshowupdatepostmodal] = useState({
        show:false
        
    })
    // get full post of user
    const getPostUser = async() => {
        
        try {
            const responsePost = await axios.get(`${apiUrl}/post`)
            if (responsePost.data.success) {
               dispatch({type:'GET_POST', payload:responsePost.data.posts})
               return responsePost.data.posts
            }
        } catch (error) {
            return error.data ? error.data : {success:false, message:'error server'}
            
        }
    }

  
    //add post
    const addPostuser = async (addform) => {
        
        try {
            const response = await axios.post(`${apiUrl}/post`, addform)
          
            if (response.data.success) { 
                dispatch({type:'ADD_POST', payload:response.data.post})
 return response.data.post
            }
            
        } catch (error) {
           return error.data
				? error.data
				: { success: false, message: 'Server error' }
            
        }
         
    }
    //get one post id
    const findone = (postid) => {
        const post = postState.posts.find(post => postid === post._id)
        setpostdata(post)
        
    }
    
    //update post
    const updatepost = async (_id, updatepost) => {
        
        try {
             
            const response = await axios.put(`${apiUrl}/post/${_id}`, updatepost)
            if (response.data.success) {
              
                 dispatch ({type:'UPDATE_POST', payload:response.data.post})

                return response.data
            }
        } catch (error) {
             return error.data
				? error.data
				: { success: false, message: 'Server error' }
            
        }
        
    }
    // delete post
    const deletepost = async (_id) => {
        try {
            const response = await axios.delete(`${apiUrl}/post/${_id}`)
            
            if (response.data.success) {
                dispatch({type:'DELETE_POST', payload:_id})
                return response.data
            }

        } catch (error) {
                  return error.response.data
				? error.response.data
				: { success: false, message: 'Server error' }
        }
    }
   
      
  
    const postContextData = {
        getPostUser,
        postState,
        showAddpostmodal,
        setshowAddpostmodal,
        addPostuser,
        showupdatepostmodal,
        setshowupdatepostmodal,
        findone,
        postdata,
        deletepost,updatepost
        
    }
    
return (
		<PostContext.Provider value={postContextData}>
			{children}
        </PostContext.Provider>
)
}
export default PostContextProvider