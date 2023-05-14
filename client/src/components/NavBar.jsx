import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, BASKET_ROUTE} from "../shared/utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useNavigate} from 'react-router-dom'
import shoppingCart from '../shared/assets/shopping-cart.svg'

const NavBar = observer(() => {
	const {user} = useContext(Context)
	const navigate = useNavigate()

	const logOut = () => {
		user.setUser({})
		user.setIsAuth(false)
		user.setIsAdmin(false)
	}

	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<NavLink style={{color: 'white'}} to={SHOP_ROUTE} data-testid='main-link'>DeviceShop</NavLink>


				<Nav className="ml-auto" style={{color: 'white'}}>
					<button style={{background: 'none', marginRight: '20px', border: 'none'}} onClick={() => navigate(BASKET_ROUTE)} data-testid='basket-link'>
						<img src={shoppingCart} alt="shopping cart" />
					</button>
					{user.isAdmin &&
						<Button variant={"outline-light"} onClick={() => navigate(ADMIN_ROUTE)}>
							Админ панель
						</Button>}
					{user.isAuth ?
						<Button variant={"outline-light"} onClick={() => logOut()} className="ml-2">
							Выйти
						</Button>
						:
						<Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
					}
				</Nav>
			</Container>
		</Navbar>

	);
});

export default NavBar;
