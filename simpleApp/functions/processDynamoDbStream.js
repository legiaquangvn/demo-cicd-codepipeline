const {saveCount, getCount} = require('./db/dynamodb');
exports.handler = async (event, context)  => {

    const insertedRecord = event.Records[0].dynamodb.NewImage;
	
    console.log('inserted record:', insertedRecord);

    let count = 0;
    try {
        count = parseInt(await getCount());
    } catch (e) {
        // no count record in the database
        count = 0;
    }
    
    await saveCount(count + 1);

    console.log('new count:', count);
};
