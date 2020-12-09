
const {DynamoDB} = require('aws-sdk');

const db = new DynamoDB.DocumentClient();
const TableName = process.env.TABLE_NAME;

const saveItem = async (id, count) => {
    const item = {
        itemId: id,
        count: count
    };

    await db.put({
        TableName,
        Item: item
    }).promise();

    console.log('saved: ', item);
}


const getCount = async (id, count) => {
    const item = {
        itemId: id,
        count: count
    };

    await db.put({
        TableName,
        Item: item
    }).promise();

    console.log('saved: ', item);
}

module.exports = { saveItem };