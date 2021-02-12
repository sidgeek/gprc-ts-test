import * as grpc from '@grpc/grpc-js';
import { HelloClient } from '../proto/hello_grpc_pb';

export default new HelloClient(
    `localhost:${process.env.PORT}`,
    grpc.credentials.createInsecure(),
);
