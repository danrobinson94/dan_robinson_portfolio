import { Image, Typography } from 'antd';
import React from 'react';
import image from '../../assets/NFStripes Site.png';

const { Title, Link } = Typography;

function NFStripes() {
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
			<Title>NFStripes, Free NFT Project</Title>

			<Image width={'52%'} preview={false} src={image} />
			<Title level={5} style={{ width: '50%' }}>
				Collection of 250 unique Ethereum Rinkby NFT's generated in Node. NFT
				Minting App built in React. Metadata hosted on IPFS, images hosted on
				S3.
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
					href='https://nfstripes-dan94robinson.vercel.app/'
					target='_blank'
				>
					Get an NFStripe
				</Link>
				<Link
					style={{ fontSize: '18px' }}
					href='https://github.com/danrobinson94/NFsTripes_App'
					target='_blank'
				>
					View the Repo
				</Link>
			</div>
			{/* </div> */}
		</div>
	);
}

export default NFStripes;
