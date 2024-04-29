import React, { useState } from 'react';
import { Modal, Form, Input, Button, Tooltip } from 'antd';
import emailjs from '@emailjs/browser';

const ContactModal = ({
	open,
	handleOk,
	confirmLoading,
	handleCancel,
	modalText,
	form,
	emailSent,
	setEmailSent,
	stateMessage,
	setStateMessage,
}) => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [loading, setLoading] = useState(false);

	const sendEmail = () => {
		setLoading(true);
		form
			.validateFields() // Validate form fields
			.then((values) => {
				setIsSubmitting(true);
				emailjs
					.send(
						process.env.REACT_APP_SERVICE_ID,
						process.env.REACT_APP_TEMPLATE_ID,
						values, // Use form values as parameters
						process.env.REACT_APP_PUBLIC_KEY,
					)
					.then(
						(result) => {
							setStateMessage('Message sent!');
							setIsSubmitting(false);
							// form.resetFields(); // Clear form fields after successful submission
							// setTimeout(() => {
							// 	setStateMessage(null);
							// }, 5000);
							setEmailSent(true);
						},
						(error) => {
							setStateMessage('Something went wrong, please try again later');
							setIsSubmitting(false);
							setTimeout(() => {
								setStateMessage(null);
							}, 5000);
						},
					);
			})
			.catch((errorInfo) => {
				console.log('Validation failed:', errorInfo);
			});
		setLoading(false);
		setEmailSent(false);
	};

	const sendEmailButtons = [
		<Button key='back' onClick={handleCancel}>
			Cancel
		</Button>,
		<Tooltip title='Will be sent using EmailJS'>
			<Button key='submit' type='primary' loading={loading} onClick={sendEmail}>
				Send
			</Button>
		</Tooltip>,
	];

	const closeModalButtons = [
		<Button key='back' onClick={handleCancel}>
			Ok
		</Button>,
	];

	return (
		<Modal
			title='Email Me'
			open={open}
			// onOk={handleOk}
			confirmLoading={confirmLoading}
			onCancel={handleCancel}
			footer={emailSent ? closeModalButtons : sendEmailButtons}
		>
			{/* <h2>Contact Me</h2> */}
			<div style={{ padding: '8px' }} />
			<Form form={form} onFinish={sendEmail} layout='vertical'>
				<Form.Item
					name='user_name'
					label='Name'
					rules={[{ required: true, message: 'Please input your name!' }]}
				>
					<Input disabled={emailSent} placeholder='Name' />
				</Form.Item>
				<Form.Item
					name='user_email'
					label='Email'
					rules={[{ required: true, message: 'Please input your email!' }]}
				>
					<Input disabled={emailSent} placeholder='Email' />
				</Form.Item>
				<Form.Item
					name='message'
					label='Message'
					rules={[{ required: true, message: 'Please input your message!' }]}
				>
					<Input.TextArea disabled={emailSent} placeholder='Message' />
				</Form.Item>
				{/* <Form.Item>
					<Button type='primary' htmlType='submit' disabled={isSubmitting}>
						Send
					</Button>
				</Form.Item> */}
				{stateMessage && <p>{stateMessage}</p>}
			</Form>
		</Modal>
	);
};

export default ContactModal;
