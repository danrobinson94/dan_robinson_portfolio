import React, { useState } from 'react';
import { Button, Layout, Menu, theme, Form, Typography } from 'antd';
import ContactModal from './components/ContactModal';
import { useNavigate, useLocation } from 'react-router-dom';
import ContentSelector from './components/ContentSelector';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Title } = Typography;

const { Header, Content, Footer } = Layout;

const App = () => {
	const [open, setOpen] = useState(false);
	const [confirmLoading, setConfirmLoading] = useState(false);
	const [modalText, setModalText] = useState('Content of the modal');
	const [stateMessage, setStateMessage] = useState(null);
	const [emailSent, setEmailSent] = useState(false);
	const [form] = Form.useForm();
	const navigate = useNavigate();
	const location = useLocation();
	const { pathname } = location;

	const showModal = () => {
		setOpen(true);
	};
	const handleOk = () => {
		setModalText('The modal will be closed after two seconds');
		setConfirmLoading(true);
		setTimeout(() => {
			setOpen(false);
			setConfirmLoading(false);
		}, 2000);
	};
	const handleCancel = () => {
		console.log('Clicked cancel button');
		setOpen(false);
		form.resetFields();
		setStateMessage(null);
		setEmailSent(false);
	};

	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Layout
			style={{
				padding: '0px',
				margin: '0px',
				overflow: 'hidden',
				boxSizing: 'border-box',
				minHeight: '100vh',
			}}
		>
			<Header
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					height: '54px',
				}}
			>
				<Title
					level={3}
					style={{
						color: 'white',
						display: 'flex',
						alignItems: 'center',
						height: '54px',
						margin: 0,
						paddingRight: '48px',
					}}
				>
					Dan Robinson - Software Engineer
				</Title>
				<Menu
					theme='dark'
					mode='horizontal'
					selectedKeys={[pathname]}
					style={{
						flex: 1,
						minWidth: 0,
						height: '54px',
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<Menu.Item
						style={{
							height: '54px',
							display: 'flex',
							alignContent: 'center',
							alignItems: 'center',
						}}
						path={'/'}
						key='/'
						onClick={() => navigate('/')}
					>
						Home
					</Menu.Item>
					<Menu.Item
						style={{
							height: '54px',
							display: 'flex',
							alignContent: 'center',
							alignItems: 'center',
						}}
						link={'/resume'}
						key='/resume'
						onClick={() => navigate('/resume')}
					>
						Resume
					</Menu.Item>
					<Menu.Item
						style={{
							height: '54px',
							display: 'flex',
							alignContent: 'center',
							alignItems: 'center',
						}}
						key='/about'
						onClick={() => navigate('/about')}
					>
						About
					</Menu.Item>
				</Menu>
				<Button onClick={showModal}>Email Me</Button>
			</Header>
			<ContactModal
				open={open}
				handleOk={handleOk}
				confirmLoading={confirmLoading}
				handleCancel={handleCancel}
				modalText={modalText}
				setModalText={setModalText}
				form={form}
				emailSent={emailSent}
				setEmailSent={setEmailSent}
				stateMessage={stateMessage}
				setStateMessage={setStateMessage}
			/>
			<div>
				<Content
					style={{
						background: colorBgContainer,
					}}
				>
					<ContentSelector />
				</Content>
				<Footer
					style={{
						textAlign: 'center',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						fontSize: '30px',
						alignText: 'center',
						height: '70px',
						width: '100%',
					}}
				>
					<div
						style={{
							width: '100px',
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<a href='https://www.linkedin.com' target='_blank' rel='noreferrer'>
							<LinkedinOutlined />
						</a>
						<a href='https://www.github.com' target='_blank' rel='noreferrer'>
							<GithubOutlined />
						</a>
					</div>
				</Footer>
			</div>
		</Layout>
	);
};
export default App;
