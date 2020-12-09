'use strict';

const {saveRequest} = require('./db/dynamodb');

exports.handler = async (event, context)  => {
	
	const currentTimeInMs = Date.now() + '';
	await saveRequest('Request', currentTimeInMs);
	
	const currentDate = new Date().toUTCString();
	
	return sendResponse(200, `You made a request at [${currentDate}]`, context);	
};

function sendResponse(statusCode, message, context) {
	const message1 = JSON.stringify(message) 
	const response = {
		statusCode: statusCode,
		body: message1
	};
	return response
}
