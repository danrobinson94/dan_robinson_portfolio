import React from 'react';
import { Carousel } from 'antd';
import NextLvLAi from '../components/CarouselComponents/NextLvLAi';
import Iphone13 from '../components/CarouselComponents/iPhone13';
import NFStripes from '../components/CarouselComponents/NFStripes';
const contentStyle = {
	color: '#000',
	textAlign: 'center',
	background: 'lightgrey',
	padding: '0px',
	margin: '0px',
};
const HomePage = () => (
	<div>
		<Carousel
			autoplay
			autoplaySpeed={5000}
			arrows={true}
			style={{ height: '83vh' }}
		>
			<div>
				<NextLvLAi />
			</div>
			<div>
				<Iphone13 />
			</div>
			<div>
				<NFStripes />
			</div>
		</Carousel>
	</div>
);
export default HomePage;
