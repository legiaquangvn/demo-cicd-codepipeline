exports.handler = async (event, context)  => {

    const insertedRecord = event.Records[0].dynamodb.NewImage;
	
    console.log('inserted record:', insertedRecord);

};
