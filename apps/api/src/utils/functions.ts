import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

interface FormattedResponseProps {
  statusCode?: number;
  body?: any;
  event: APIGatewayProxyEvent;
}

export const formattedResponse = ({
  statusCode = 200,
  body = {},
  event,
}: FormattedResponseProps): APIGatewayProxyResult => {
  return {
    statusCode,
    body: JSON.stringify({ data: { ...body }, event }),
  };
};
