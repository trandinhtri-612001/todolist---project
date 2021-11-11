import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import learnItLogo from '../../assets/logo.svg'
import logoutIcon from '../../assets/logout.svg'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/esm/Badge'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useContext } from 'react'
import {AuthContext} from '../../contexts/AuthContext'

const NavbarMenu = () => {

    const { authState: { user }, logoutUser } = useContext(AuthContext)
    console.log(user)
    const logoutuser=() => {
        logoutUser()
    }
	return (
		<Navbar expand='lg' bg='primary' variant='dark' className='shadow'>
            <div className='container'>
                <Navbar.Brand className='font-weight-bolder text-white '>
				<img
					src={learnItLogo}
					alt='learnItLogo'
					width='32'
					height='32'
					className='mr-2'
				/>
				LearnIt
			</Navbar.Brand>

			<Navbar.Toggle aria-controls='basic-navbar-nav' />

			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto'>
					<Nav.Link
						className='font-weight-bolder text-white'
						to='/home'
						as={Link}
					>
						Home
					</Nav.Link>
					<Nav.Link
						className='font-weight-bolder text-white'
						to='/above'
						as={Link}
					>
						Above
					</Nav.Link>
				</Nav>

					<Nav className='mr-l'>
					<Nav.Link className='font-weight-bolder text-white'  to ='/update' as={Link}>
							Welcome ({user.username})
					</Nav.Link>
						 <NavDropdown title="setting" id="basic-nav-dropdown">
							<NavDropdown.Item>
								<Nav.Link className='font-weight-bolder text-dark' to='/update' as={Link}>
									profile
								</Nav.Link>
							</NavDropdown.Item>
							
							<NavDropdown.Item>
								<Nav.Link className='font-weight-bolder text-dark' to='/updateuser' as={Link}>
									setting update_profile
								</Nav.Link>
							</NavDropdown.Item>
							
							<NavDropdown.Divider />
							
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
							
						</NavDropdown>
						

						
					<Button
						variant='secondary'
                        className='font-weight-bolder text-white text-white'
                        onClick = {logoutuser}
						
					>
						<img
							src={logoutIcon}
							alt='logoutIcon'
							width='32'
							height='32'
							className='mr-2'
						/>
						Logout
					</Button>
				</Nav>
			</Navbar.Collapse>
            </div>
		</Navbar>
	)
}

export default NavbarMenu