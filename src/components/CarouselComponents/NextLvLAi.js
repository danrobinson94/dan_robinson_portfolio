import { Image, Typography } from 'antd';
import React from 'react';
import ReactPlayer from 'react-player';
import { Player } from 'video-react';
import video from '../../assets/next_lvl_tech_stack.mp4';
import { motion } from 'framer-motion';

const { Title, Link } = Typography;

function NextLvLAi() {
	return (
		<motion.div
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
			initial={{ opacity: 0.25, y: 15 }}
			transition={{ duration: 0.5 }}
			animate={{ opacity: 1, y: 0 }}
		>
			<Title
				style={{
					marginBottom: '0px',
					paddingBottom: '0px',
					marginTop: '24px',
				}}
			>
				Next LvL Ai
			</Title>
			<div style={{ height: '20px' }} />
			<ReactPlayer
				url={video}
				// playing={true}
				controls={true}
				muted={false}
				// playsinline={true}
				height={'400px'}
			/>
			<Title level={5} style={{ width: '70%' }}>
				As Co-Founder at Next LvL Ai, I conducted user interviews to identify
				client needs, built prototypes for user testing, and managed technical
				support. I built our app using React, Express.js, and Python. It
				featured Zoom and HubSpot app integrations to process meetings with the
				OpenAI API and automate data entry for sales reps. I used AWS for all
				DevOps. Next LvL Ai has been dissolved.
			</Title>
			<div
				style={{
					height: '12px',
					marginBottom: '20px',
					width: '450px',
					display: 'flex',
					justifyContent: 'space-evenly',
				}}
			></div>
		</motion.div>
	);
}

export default NextLvLAi;
