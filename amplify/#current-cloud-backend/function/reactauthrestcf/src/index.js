const AWS = require("aws-sdk");
const cloudformation = new AWS.CloudFormation();

exports.handler = async (event) => {
  if (event.requestContext.authorizer) {
      console.log('Notice:',(event.requestContext.authorizer.claim))
  }
  const eventinfo = JSON.stringify(event)
  console.log(`EVENT:`,eventinfo);
  console.log( `Input For CF:`,event.queryStringParameters.CFname)

  const stackName = "jingamz0508"; // 请替换为你的 Stack 名称
  const templateUrl = "https://jingamz.s3.us-west-2.amazonaws.com/reacthook/react-test.yaml"; // 请替换为你的 CloudFormation 模板 URL

  const params = {
    StackName: event.queryStringParameters.CFname,
    TemplateURL: templateUrl,
    // Capabilities: ["CAPABILITY_NAMED_IAM"], // 根据需要添加其他能力
    // Parameters: [], // 如果有参数，请将其添加到这里
  };

  try {
    const response = await cloudformation.createStack(params).promise();
    console.log("Stack creation started:", response);
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*"
    }, 
      body: JSON.stringify(response),
    };
  } catch (error) {
    console.error("Error creating stack:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*"
    }, 
      body: JSON.stringify(error),
    };
  }
};
