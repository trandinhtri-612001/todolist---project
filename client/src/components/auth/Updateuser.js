import React, {useState, useContext} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import { AuthContext } from '../../contexts/AuthContext'
import AlertMessage from '../layout/alertmessage'
import { useHistory } from "react-router-dom";

const Updateuser = () => {
   let history = useHistory();
const {updateuser, authState:{user}} = useContext(AuthContext);

  const [updateuserform, setupdateuserform] = useState({
    _id:user._id,
    username:'',
    password:'',
    confirmpassword:'',
    oldpassword:'',
    
  })
  const {username, password, confirmpassword, oldpassword} = updateuserform
  const onchange = (e) => {
    setupdateuserform({ ...updateuserform, [e.target.name]: e.target.value })
    console.log(updateuserform)
  }
   const [alert, setalert] = useState(null)
  const submitupdateuser = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword   ) {
      setalert({ type: 'danger', message: 'password do not match' })
      setTimeout(() => {
        setalert(null)
     
      }, 3000);
      return 0;
    }
    try {
      const datasp = await updateuser(updateuserform)
      
      if (datasp.success) {
        setalert({ type: 'success', message: datasp.message })
        
      setTimeout(() => {
        setalert(null)
          history.push('/update')
      }, 3000);
      } else {
               setalert({ type: 'danger', message:datasp.message })
      setTimeout(() => {
        setalert(null)
      }, 3000);
      }
    } catch (error) {
      return error.messge
    }
  }

    return (
      <Row xs={4} >
        
         <Form Form  className = 'mt-4 container' onSubmit = {submitupdateuser} >
            <AlertMessage info={alert}/>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>User name</Form.Label>
            <Form.Control
              type="text"
              placeholder="user name..."
            name="username"
            value = {username}
              onChange = {onchange}
  
            />
          </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>new Password</Form.Label>
            
            <Form.Control
              type='password'
              placeholder=" new Password... "
            name="password"
            value = {password}
           onChange = {onchange}

            />
          </Form.Group>
                    
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Confirm new Password</Form.Label>
            
            <Form.Control
              type="password"
              placeholder="confirm password..."
            name="confirmpassword"
             value = {confirmpassword}
             onChange = {onchange}

            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>old Password</Form.Label>
            
            <Form.Control
              type="password"
              placeholder="old password..."
            name="oldpassword"
             value = {oldpassword}
           onChange = {onchange}

            />
            </Form.Group>

 
             <Button variant="primary" type="submit">
                        Submit
                       </Button>
           </Form>
       </Row>
    )
}

export default Updateuser
