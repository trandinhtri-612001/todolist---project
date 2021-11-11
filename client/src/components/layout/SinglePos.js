import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import ActionButtons from '../post/ActionButtons'
import "./SinglePos.css"
const SinglePost = ({ posts: { _id, status, title, description, url }, username }) => (
	<Card
		className='shadow'
		border={
			status === 'LEARNED'
				? 'success'
				: status === 'LEARNING'
				? 'warning'
				: 'danger'
		}
	>
		<Card.Body>
			<Card.Title>
				<Row>
					<Col>
						<p className='post-title'>{title}</p>
						<Badge
							pill
					
							className={
								status == 'LEARNED'
									? 'success'
									: status === 'LEARNING'
										? 'warning'
										: 'danger'
							}
                           
						>
							{status}
						</Badge>
					</Col>
					<Col className='text-right'>
						<ActionButtons url={url} _id={_id} />
						<Badge className ='status' >{ username} </Badge>
					</Col>
				</Row>
			</Card.Title>
			<Card.Text>{description}</Card.Text>
		</Card.Body>
	</Card>
)

export default SinglePost