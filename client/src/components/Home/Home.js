import React, { useEffect } from 'react'
import { PostContext } from '../../contexts/PostContext'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Col from 'react-bootstrap/Col'
import addicon from '../../assets/plus-circle-fill.svg'
import SinglePost from '../layout/SinglePos'
import AddPostModal from '../layout/AddPostModal'
import UpdatePostModal from '../layout/UpdatePostModal'
const Home = () => {
	
    const { postState:{posts,postloading}, getPostUser, setshowAddpostmodal } = useContext(PostContext)
	const { authState: { user: { username } } } = useContext(AuthContext)
	console.log(posts)
useEffect(() => {
		getPostUser()
	},[])
    let homebody;

	if (postloading) {
		homebody = (
		   			<div className='spinner-container'>
				<Spinner animation='border' variant='info' />
			</div>
	   )
   }else if (posts.length === 0) {
        homebody = (
        <>
				<Card className='text-center mx-5 my-5'>
					<Card.Header as='h1'>Hi {username}</Card.Header>
					<Card.Body>
						<Card.Title>Welcome to LearnIt</Card.Title>
						<Card.Text>
							Click the button below to track your first skill to learn
						</Card.Text>
						<Button
							variant='primary'
							onClick = {setshowAddpostmodal.bind(this,true)}
							
						>
							LearnIt!
						</Button>
					</Card.Body>
				</Card>
			</>
    )
    } else {
        homebody = (
            <>
				<Row className='row-cols-1 row-cols-md-3 g-4 mx-auto mt-3'>
					{posts.map(post => (
						<Col key={post._id} className='my-2'>
							<SinglePost posts={post}  username={ username} />
						</Col>
					))}
				</Row>

				{/* Open Add Post Modal */}
				<OverlayTrigger
					placement='left'
					overlay={<Tooltip>Add a new thing to learn</Tooltip>}
				>
					<Button
						className='btn-floating'
						onClick = {setshowAddpostmodal.bind(this,true)}
					>
						<img src={addicon} alt='add-post' width='60' height='60' />
					</Button>
				</OverlayTrigger>

			</>
        )
    }
    

    return (
        <>
			{homebody}
			<UpdatePostModal/>
			<AddPostModal />
			
			
		</>
    )
}

export default Home
