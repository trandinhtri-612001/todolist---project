import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext, useState } from 'react'
import { PostContext } from '../../contexts/PostContext'



const AddPostModal = () => {


    const { showAddpostmodal, setshowAddpostmodal, addPostuser } = useContext(PostContext)
    const [addform, setaddform] = useState({
        title: '',
        description: '',
        url: '',
        status: 'TO LEARN'
    })
    const { title, description, url } = addform
    const onchanaddform = (event) => {
        setaddform({ ...addform, [event.target.name]: event.target.value })
       
    }
    const addpost = async(e) => {
        	e.preventDefault()
        const data = await addPostuser(addform)
     
       
 setshowAddpostmodal(false)
        setaddform({
        title: '',
        description: '',
        url: '',
        status: ''
    })    
    }
    const onclosemadal = () => {
        setshowAddpostmodal(false)
        setaddform({
        title: '',
        description: '',
        url: '',
        status: ''
    })
}

return (
		<Modal show = {showAddpostmodal} onHide ={onclosemadal}>
			<Modal.Header >
            <Modal.Title>What do you want to learn?</Modal.Title>
            <Button
                variant="danger"
                onClick = {onclosemadal}
            >close</Button>
			</Modal.Header>
			<Form onSubmit={addpost}>
				<Modal.Body>
					<Form.Group>
						<Form.Control
							type='text'
							placeholder='Title'
							name='title'
							required
                        aria-describedby='title-help'
                        value={title}
                        onChange = {onchanaddform}
							
							
						/>
						<Form.Text id='title-help' muted>
							Required
						</Form.Text>
					</Form.Group>
					<Form.Group>
						<Form.Control
							as='textarea'
							rows={3}
							placeholder='Description'
                        name='description'
                        value={description}
                        onChange = {onchanaddform}
							
							
						/>
					</Form.Group>
					<Form.Group className = 'mt-3'>
						<Form.Control
							type='text'
							placeholder='Youtube Tutorial URL'
                        name='url'
                        value={url}
                        onChange = {onchanaddform}
							
						/>
					</Form.Group>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' >
						Cancel
					</Button>
					<Button variant='primary' type='submit'>
						LearnIt!
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	)



}

export default AddPostModal
