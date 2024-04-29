import React from 'react';
import { Button, Collapse, Typography } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import resume from '../assets/DanRobinson.Resume.pdf';
import { motion } from 'framer-motion';

const { Title } = Typography;

const nextLvL = `
Engineered an innovative full-stack application that revolutionized data entry for sales representatives by integrating Zoom Marketplace and Google Cloud Platform (GCP) apps with HubSpot CRM, utilizing OpenAI API for intelligent data generation.
`;
const daoHub = `
Championed the development of a robust cryptocurrency marketplace platform, facilitating user search, market insights, and seamless token-exchanging capabilities.
`;
const fragmints = `
Led the creation of smart contracts for NFT initiatives utilizing Solidity and the OpenZeppelin library, coupled with crafting marketing websites in React to support ERC-721 token transactions via MetaMask wallets.
`;
const current = `
Architected and integrated an advanced e-commerce solution, leveraging Shopify’s GraphQL API and WooCommerce’s REST API, with Node.js backend development, and established intuitive user interfaces using React/Material UI, enabling clients to effortlessly create discount offerings for an extensive network of over 84,000 influencers.
`;
const goldman = `
Conducted an in-depth analysis of over 405,000 data entries to identify and assess discrepancies, offering strategic insights on quarterly fluctuations affecting client net asset values, return on investments, and internal rates of return.
`;
const experienceNest = [
	{
		key: '1',
		label: 'NEXT LVL AI, Co-Founder, Founding Engineer | 2023 - 2024',
		children: <p>{nextLvL}</p>,
	},
	{
		key: '2',
		label: 'DAOHUB, Founding Engineer | 2022 - 2023',
		children: <p>{daoHub}</p>,
	},
	{
		key: '3',
		label: 'FRAGMINTS, Software Engineer | 2022 (7 Months)',
		children: <p>{fragmints}</p>,
	},
	{
		key: '4',
		label: 'CURRENT TECHNOLOGIES, Junior Software Engineer | 2021 - 2022',
		children: <p>{current}</p>,
	},
	{
		key: '5',
		label: 'GOLDMAN SACHS, Analyst | 2019 - 2020',
		children: <p>{goldman}</p>,
	},
];

const coreCompetencies = `
Strategic Planning | Software Architecture | Analytics & Reporting |
 Programming & Coding | Algorithm Design | Systems Analysis |
  Debugging & Troubleshooting | Agile Methodologies | Full-Stack Development |
   Financial Acumen | Database Management | Object-Oriented Design (ODD) |
    Version Control Systems | Cloud Computing | UX/UI Design |
	 Cybersecurity Fundamentals | Continuous Integration/Deployment |
	  Cross-Platform Compatibility | Performance Optimization | Problem Solving |
	   Team Collaboration | Technical Documentation & Reporting |
	    Change Management | Decision Making | Code Review | Quality Assurance
`;
const education = `
	Bachelor of Arts - Finance - UTAH STATE UNIVERSITY, Logan, UT, 2018
`;
const items = [
	{
		key: '1',
		label: 'Professional Summary',
		children: <Collapse items={experienceNest} />,
	},
	{
		key: '2',
		label: 'Core Competencies',
		children: <p>{coreCompetencies}</p>,
	},
	{
		key: '3',
		label: 'Education',
		children: <p>{education}</p>,
	},
];
const ResumePage = () => {
	const onChange = (key) => {
		console.log(key);
	};
	return (
		<>
			<motion.div
				style={{
					color: '#000',
					background: 'lightgrey',
					padding: '0px 48px',
					margin: '0px',
					display: 'flex',
					flexDirection: 'column',
					minHeight: '83vh',
					height: '100%',
				}}
				initial={{ opacity: 0.25, x: -25 }}
				transition={{ duration: 0.5 }}
				animate={{ opacity: 1, x: 0 }}
			>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Title style={{ marginBottom: '12px' }}>Resume</Title>
					<div>
						<a
							href={resume}
							download='DanRobinson.Resume.pdf'
							target='_blank'
							rel='noreferrer'
							style={{
								display: 'flex',
								alignItems: 'center',
								marginTop: '28px',
							}}
						>
							<Title
								level={5}
								style={{ margin: '0px', padding: '0px', marginRight: '8px' }}
							>
								Download Full Resume
							</Title>
							<DownloadOutlined
								style={{ fontSize: '20px', marginRight: '8px' }}
							/>
						</a>
					</div>
				</div>
				<Title
					level={5}
					style={{ margin: '0px 12px 24px 0px', padding: '0px' }}
				>
					Self-motivated and dynamic Software Engineer with a keen aptitude for
					pioneering user-centric applications. Remarkable in engineering
					advanced APIs and user interfaces. Agile and adaptive contributor to
					high-impact projects, aligning with shifting organizational
					objectives. Exhibits software development and business management
					talents, and a relentless pursuit of excellence. Possesses superior
					communication, critical thinking, and decision-making skills.
				</Title>
				<Collapse
					onChange={onChange}
					items={items}
					style={{ marginBottom: '48px' }}
				/>
			</motion.div>
		</>
	);
};
export default ResumePage;
