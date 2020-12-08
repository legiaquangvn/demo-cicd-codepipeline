'use strict';

exports.handler = async (event, context)  => {
	console.log('Hello Simple Function of the version:', context.functionVersion);
	return sendResponse(200, "Hello Simple Function", context);
};

function sendResponse(statusCode, message, context) {
	const message1 = JSON.stringify(message) 
	const response = {
		statusCode: statusCode,
		body: message1
	};
	return response
}
