import { Image, Typography } from 'antd';
import React from 'react';
import image from '../../assets/iphone_13_pro.png';

const { Title, Link } = Typography;

function Iphone13() {
	return (
		<div
			style={{
				color: '#000',
				textAlign: 'center',
				background: 'lightgrey',
				padding: '0px',
				margin: '0px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
				height: '83vh',
			}}
		>
			{/* <div> */}
			<Title>iPhone 13 Website</Title>
			<Image width={'52%'} preview={false} src={image} />
			<Title level={5} style={{ width: '50%' }}>
				iPhone 13 Pro marketing website. Project from a web development course.
				I added my own animations using the GreenSock Animation Platform.
			</Title>
			<div
				style={{
					height: '30px',
					marginBottom: '20px',
					width: '450px',
					display: 'flex',
					justifyContent: 'space-evenly',
				}}
			>
				<Link
					style={{ fontSize: '18px', padding: '0px', margin: '0px' }}
					href='https://iphone-13-website.vercel.app/'
					target='_blank'
				>
					See the Website
				</Link>
				<Link
					style={{ fontSize: '18px' }}
					href='https://github.com/danrobinson94/iPhone_13_Website'
					target='_blank'
				>
					View the Repo
				</Link>
			</div>
			{/* </div> */}
		</div>
	);
}

export default Iphone13;
