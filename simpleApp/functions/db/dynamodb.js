
const {DynamoDB} = require('aws-sdk');

const db = new DynamoDB.DocumentClient();
const TableName = process.env.TABLE_NAME;

const saveRequest = async (pk, sk) => {
    const item = {
        PartitionKey: pk,
        SortKey: sk
    };

    await db.put({
        TableName,
        Item: item
    }).promise();

    console.log('saved: ', item);
}

const saveCount = async (count) => {
    const item = {
        PartitionKey: 'Count',
        SortKey: 'Current',
        Count: count
    };

    await db.put({
        TableName,
        Item: item
    }).promise();

    console.log('saved: ', item);
}

const getCount = () => {
	const params = {
		Key: {
            PartitionKey: 'Count',
            SortKey: 'Current'    
		},
		TableName
	};

	return db.get(params)
		.promise()
		.then((result) => {
            console.log('getCount result:', result);
            console.log('getCount:', result.Item.Count);
			return result.Item.Count;
		}, (error) => {
			return error;
		});
};


module.exports = { saveRequest, saveCount, getCount };