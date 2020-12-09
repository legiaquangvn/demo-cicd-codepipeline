exports.handler = async (event, context)  => {

    const insertedRecord = event.Records[0].dynamodb.NewImage;
	
    console.log('inserted record:', insertedRecord);

    let count = parseInt(await getCount()) + 1;
    await saveCount(count + 1);

    console.log('new count:', count);
};
