import Button from 'react-bootstrap/Button'
import playIcon from '../../assets/play-btn.svg'
import editIcon from '../../assets/pencil.svg'
import deleteIcon from '../../assets/trash.svg'
import { useContext } from 'react'
import { PostContext } from '../../contexts/PostContext'

const ActionButtons = ({ url, _id }) => {
const {setshowupdatepostmodal,findone,deletepost}= useContext(PostContext)
	const setshow = (_id) => {
		findone(_id)
		setshowupdatepostmodal({ show: 'true' })
		
	
	}
	const Deletepost = (_id) => {
		deletepost(_id)
	}
	
	return (
		<>
			<Button className='post-button' href={url} target='_blank'>
				<img src={playIcon} alt='play' width='32' height='32' />
			</Button>
			<Button className='post-button' onClick={setshow.bind(this, _id)} >
				<img src={editIcon} alt='edit' width='24' height='24' />
			</Button>
			<Button className='post-button' onClick = {Deletepost.bind(this, _id)}>
				<img src={deleteIcon} alt='delete' width='24' height='24' />
			</Button>
		</>
	)
}

export default ActionButtons