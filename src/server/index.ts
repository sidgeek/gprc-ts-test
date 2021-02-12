import * as grpc from '@grpc/grpc-js';
import { HelloService } from '../proto/hello_grpc_pb';

function serve(): void {
    const server = new grpc.Server();
    // @ts-ignore
    server.addService(HelloService, new HelloService());
    server.bindAsync(`localhost:${process.env.PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err) {
            throw err;
        }
        console.log(`Listening on ${port}`);
        server.start();
    });
}

export default {
    command: 'serve',
    describe: 'Start the gRPC server',
    builder: {},
    handler: serve,
};
