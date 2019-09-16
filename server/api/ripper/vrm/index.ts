import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

import { VRMRipper } from '../../../src/vrm-ripper';

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  const vrmFileUrl = event.queryStringParameters.url;
  const vrmRipper = new VRMRipper();
  await vrmRipper.loadVrmFromUrl(vrmFileUrl);
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify(
      vrmRipper.getMeta(),
      null,
      2
    )
  }
};
