import React from 'react';
import { Typography, Card, Image } from 'antd';
import image from '../assets/IMG_0174.jpg';
import { motion } from 'framer-motion';

const { Meta } = Card;
const { Title } = Typography;

const AboutPage = () => {
	return (
		<div
			style={{
				color: '#000',
				background: 'lightgrey',
				padding: '0px 0px',
				margin: '0px',
				display: 'flex',
				flexDirection: 'column',
				minHeight: '83vh',
				height: '100%',
				alignItems: 'center',
				justifyContent: 'space-evenly',
				textAlign: 'center',
			}}
		>
			<motion.div
				style={{
					color: '#000',
					background: 'lightgrey',
					padding: '0px 0px',
					margin: '0px',
					display: 'flex',
					flexDirection: 'column',
					height: '100%',
					alignItems: 'center',
					justifyContent: 'space-evenly',
					textAlign: 'center',
					width: '60%',
				}}
				animate={{
					opacity: [0, 1],
				}}
				transition={{
					duration: 1.7,
					ease: 'easeInOut',
				}}
			>
				<Title level={5} style={{ marginTop: '24px', marginBottom: '24px' }}>
					Hey there! I'm Dan. I'm passionate about software engineering and
					startups. I enjoy playing guitar, tennis, and video games. I love
					reading - let me know if you have any leadership or software books to
					recommend!
				</Title>
			</motion.div>
			<motion.div
				animate={{
					scale: [0.15, 1],
					rotate: [90, 360],
					x: [-300, 0],
					opacity: [0.35, 1],
				}}
				transition={{
					duration: 1.5,
					ease: 'easeInOut',
					// times: [0, 0.2, 0.5, 0.8, 1],
				}}
			>
				<Image width={575} src={image} />
			</motion.div>
			<motion.div
				animate={{
					opacity: [0, 1],
				}}
				transition={{
					duration: 2.2,
					ease: 'easeInOut',
				}}
				style={{
					color: '#000',
					background: 'lightgrey',
					padding: '0px 0px',
					margin: '0px',
					display: 'flex',
					flexDirection: 'column',
					height: '100%',
					alignItems: 'center',
					justifyContent: 'space-evenly',
					textAlign: 'center',
					width: '60%',
				}}
			>
				<Title level={5} style={{ marginBottom: '20px' }}>
					Ask me about the time I went backpacking with Llamas!
				</Title>
			</motion.div>
		</div>
	);
};

export default AboutPage;
