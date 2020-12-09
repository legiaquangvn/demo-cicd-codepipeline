'use strict';

const {getCount} = require('./db/dynamodb');

exports.handler = async (event, context)  => {
	
    let count = 1;
    try {
        count = parseInt(await getCount());
    } catch (e) {
        // no count record in the database
        count = 1;
    }

	console.log('getCount:', count);
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
