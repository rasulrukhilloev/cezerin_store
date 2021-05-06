import axios from 'axios';

const sendMessage = message => {
	return new Promise((resolve, reject) => {
		// need to check is phone correct or not;
		// return reject() if false;
		//if(check);

		axios
			.post(
				'http://91.204.239.44/broker-api/send',
				{
					messages: [
						{
							recipient: message.to,
							'message-id': new Date().getTime().toString(),

							sms: {
								originator: '3900',
								content: {
									text: message.text
								}
							}
						}
					]
				},
				{
					auth: {
						username: 'mikrokreditb2',
						password: 'vY733Hxi5'
					}
				}
			)
			.then(data => {
				resolve(data);
			})
			.catch(err => {
				reject(err);
			});
	});
};

const send = message => {
	sendMessage(message);
};

export default { send };
