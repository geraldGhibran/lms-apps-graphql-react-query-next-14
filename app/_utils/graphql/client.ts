import { GraphQLClient } from 'graphql-request';
import { MASTER_URL } from '../GlobalApi';

const client = new GraphQLClient(MASTER_URL); // Adjust the endpoint as needed

export default client;
