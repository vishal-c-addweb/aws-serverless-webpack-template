import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  try {
    return formatJSONResponse({
      message: `Hello ${event?.queryStringParameters?.name}, welcome to the exciting Serverless world!`,
      event: event?.queryStringParameters?.name,
    });
  } catch (e) {
    console.log(e);
  }
};

export const main = middyfy(hello);
