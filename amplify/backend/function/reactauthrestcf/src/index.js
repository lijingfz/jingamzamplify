

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    if (event.requestContext.authorizer) {
        console.log('Notice:',(event.requestContext.authorizer.claim))
    }
    const eventinfo = JSON.stringify(event)
    console.log(`EVENT:`,eventinfo);
    console.log( `Input For CF:`,event.queryStringParameters)
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        }, 
        body: JSON.stringify('Hello from amplify invoked Lambda!'),
}}
