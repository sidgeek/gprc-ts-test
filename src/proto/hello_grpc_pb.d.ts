// package: proto
// file: hello.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as hello_pb from "./hello_pb";

interface IHelloService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IHelloService_ISayHello;
}

interface IHelloService_ISayHello extends grpc.MethodDefinition<hello_pb.MyString, hello_pb.MyString> {
    path: "/proto.Hello/SayHello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<hello_pb.MyString>;
    requestDeserialize: grpc.deserialize<hello_pb.MyString>;
    responseSerialize: grpc.serialize<hello_pb.MyString>;
    responseDeserialize: grpc.deserialize<hello_pb.MyString>;
}

export const HelloService: IHelloService;

export interface IHelloServer {
    sayHello: grpc.handleUnaryCall<hello_pb.MyString, hello_pb.MyString>;
}

export interface IHelloClient {
    sayHello(request: hello_pb.MyString, callback: (error: grpc.ServiceError | null, response: hello_pb.MyString) => void): grpc.ClientUnaryCall;
    sayHello(request: hello_pb.MyString, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hello_pb.MyString) => void): grpc.ClientUnaryCall;
    sayHello(request: hello_pb.MyString, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hello_pb.MyString) => void): grpc.ClientUnaryCall;
}

export class HelloClient extends grpc.Client implements IHelloClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sayHello(request: hello_pb.MyString, callback: (error: grpc.ServiceError | null, response: hello_pb.MyString) => void): grpc.ClientUnaryCall;
    public sayHello(request: hello_pb.MyString, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hello_pb.MyString) => void): grpc.ClientUnaryCall;
    public sayHello(request: hello_pb.MyString, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hello_pb.MyString) => void): grpc.ClientUnaryCall;
}
