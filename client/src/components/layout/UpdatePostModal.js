import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext, useState, useEffect } from 'react'
import { PostContext } from '../../contexts/PostContext'

const UpdatePostModal = () => {
	// Contexts
	const { showupdatepostmodal: { show }, setshowupdatepostmodal,postdata ,updatepost} = useContext(PostContext)
	const setshow = () => {
		setshowupdatepostmodal({show:false})
	}
	const [updatepostdata, setupdatepostdata] = useState(postdata)
	
	 useEffect(()=> setupdatepostdata(postdata),[postdata])

	const {_id} = postdata
	const {title, description, url, status } = updatepostdata;
	const onchangeupdatepostform = (e) => {
		setupdatepostdata({...updatepostdata, [e.target.name]: e.target.value})
	}
	const update = (e) => {
		e.preventDefault()
		updatepost(_id, updatepostdata)
		setshow();
	}


	return (
		<Modal show={show} onHide = {setshow}>
			<Modal.Header >
				<Modal.Title>Making progress?</Modal.Title>
				<Button
                variant="danger"
                onClick = {setshow}
            >close</Button>
			</Modal.Header>
			<Form onSubmit = {update}>
				<Modal.Body>
					<Form.Group>
						<Form.Control
							type='text'
							placeholder='Title'
							name='title'
							required
							aria-describedby='title-help'
						    value= {title}
							onChange = {onchangeupdatepostform}
							
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
							 value = {description}
								onChange = {onchangeupdatepostform}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Control
							type='text'
							placeholder='Youtube Tutorial URL'
							name='url'
							 value = {url}
								onChange = {onchangeupdatepostform}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Control
							as='select'
							
							name='status'
							value = {status}
								onChange = {onchangeupdatepostform}
						>
							<option value='TO LEARN'>TO LEARN</option>
							<option value='LEARNING'>LEARNING</option>
							<option value='LEARNED'>LEARNED</option>
						</Form.Control>
					</Form.Group>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick = {setshow} >
						Cancel
					</Button>
					<Button variant='primary' type='submit'>
						Update!
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	)
}

export default UpdatePostModal