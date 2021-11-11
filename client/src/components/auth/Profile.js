import React from 'react'

import Table from 'react-bootstrap/Table'

import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
const Profile = () => {

  const { authState: { user } } = useContext(AuthContext)
 
    return (
        
        <div className = 'mt-4 container'>
             <Table striped bordered hover className = "container">
  <thead>
    <tr>
      <th>#</th>
      <th>full Name</th>
      <th>_id</th>  
              <th>password</th>
              <th>createdAt</th>

              
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
              <td>{user.username}</td>
              <td>{user._id}</td>
            <td>{user.password}</td>
            <id>{user.createdAt}</id>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
            
            
           </div>
            
        
      
    )
}

export default Profile
