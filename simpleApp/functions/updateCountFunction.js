'use strict';

const {saveCount} = require('./db/dynamodb');

exports.handler = async (event, context)  => {

	console.log('event: ', event);
	console.log("EVENT: \n" + JSON.stringify(event, null, 2))
	
	const count = parseInt(event.count);
	await saveCount(count);
	
	return sendResponse(200, `You update the count to ${count}`, context);	
};

function sendResponse(statusCode, message, context) {
	const message1 = JSON.stringify(message) 
	const response = {
		statusCode: statusCode,
		body: message1
	};
	return response
}
