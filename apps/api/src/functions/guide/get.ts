import { APIGatewayProxyEvent, Context } from "aws-lambda";

import { formattedResponse } from "../../utils/functions";
import { generateGuide } from "../../utils/generators/guide";

const singleHandler = async (event: APIGatewayProxyEvent, context: Context) => {
  return formattedResponse({ body: generateGuide(), event });
};

const regularHandler = async (
  event: APIGatewayProxyEvent,
  context: Context
) => {
  return formattedResponse({
    body: [
      generateGuide(),
      generateGuide(),
      generateGuide(),
      generateGuide(),
      generateGuide(),
    ],
    event,
  });
};

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context
) => {
  if (event.pathParameters?.id) {
    return await singleHandler(event, context);
  }

  return await regularHandler(event, context);
};
