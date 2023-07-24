/**
 * Add your hosted dev URL here
 */
const HOSTED_URL = 'https://main.d1q01t4bo0fbdw.amplifyapp.com';

const configDevelopment = {
  HOSTED_URL,
  MODE: 'DEVELOPMENT',
  REGION: 'eu-west-1',
  REDIRECT_SIGN_IN: `${HOSTED_URL}/`,
  REDIRECT_SIGN_OUT: `${HOSTED_URL}/signout/`,
  AUTHENTICATION_TYPE: 'AWS_IAM' as const,

  /**
   * Add the details from the Pulumi output here, after running 'pulumi up'
   */
  appSyncID       : "2owe6qjuinhmljtvlxapdbzugu",
  dynamoID        : "users-2fb7ddd",
  graphQLEndpoint : {
      GRAPHQL : "https://5plwtusfvbbcnnlb6hfaly7ppi.appsync-api.us-west-2.amazonaws.com/graphql",
      REALTIME: "wss://5plwtusfvbbcnnlb6hfaly7ppi.appsync-realtime-api.us-west-2.amazonaws.com/graphql"
  },
  identityPoolID  : "us-west-2:7b8ad00f-6581-4005-825f-ecbef1270e19",
  userpoolClientID: "16qik2vr8e1gg0bt063lq3bmi1",
  userpoolID      : "us-west-2_v9dXJXwjq",

  USER_POOL_CLIENT_ID: '',
  USER_POOL_ID: '',
  IDENTITY_POOL_ID: '',
  GRAPHQL_ENDPOINT: '',
};

export default configDevelopment;
