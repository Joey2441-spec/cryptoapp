import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';
import './Navbar.css';

const Navbar = () => {
	const [activeMenu, setActiveMenu] = useState(false);
	const [purposelyClicked, setPurposelyClicked] = useState(false);
	console.count('rerenders:');
	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth > 800 && !activeMenu) {
				setActiveMenu(true);
				setPurposelyClicked(false);
			} else if (window.innerWidth <= 800 && activeMenu && !purposelyClicked) {
				setActiveMenu(false);
			}
		});

		return () => window.removeEventListener('resize', () => {});
	}, []);

	return (
		<div className='nav-container'>
			<div className='logo-container'>
				<Avatar src={icon} />
				<Typography.Title level={2} className='logo'>
					<Link to='/'>Cryptoverse</Link>
				</Typography.Title>
				<Button
					className='menu-control-container'
					onClick={() => {
						setActiveMenu(!activeMenu);
						setPurposelyClicked(true);
					}}
				>
					<MenuOutlined />
				</Button>
			</div>
			{activeMenu && (
				<Menu theme='dark'>
					<Menu.Item icon={<HomeOutlined />}>
						<Link to='/'>Home</Link>
					</Menu.Item>

					<Menu.Item icon={<FundOutlined />}>
						<Link to='/cryptocurrencies'>Cryptocurrencies</Link>
					</Menu.Item>

					<Menu.Item icon={<MoneyCollectOutlined />}>
						<Link to='/exchanges'>Exchanges </Link>
					</Menu.Item>

					<Menu.Item icon={<BulbOutlined />}>
						<Link to='/news'>News</Link>
					</Menu.Item>
				</Menu>
			)}
		</div>
	);
};

export default Navbar;
