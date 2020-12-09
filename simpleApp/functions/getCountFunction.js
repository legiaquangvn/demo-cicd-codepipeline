'use strict';

const {saveItem} = require('./db/dynamodb');

exports.handler = async (event, context)  => {

	const count = 1;
	// const count = await getCount();
	
	return sendResponse(200, count, context);
};

function sendResponse(statusCode, message, context) {
	const message1 = JSON.stringify(message) 
	const response = {
		statusCode: statusCode,
		body: message1
	};
	return response
}
