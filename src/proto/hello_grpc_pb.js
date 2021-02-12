// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var hello_pb = require('./hello_pb.js');

function serialize_proto_MyString(arg) {
  if (!(arg instanceof hello_pb.MyString)) {
    throw new Error('Expected argument of type proto.MyString');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_MyString(buffer_arg) {
  return hello_pb.MyString.deserializeBinary(new Uint8Array(buffer_arg));
}


var HelloService = exports.HelloService = {
  sayHello: {
    path: '/proto.Hello/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: hello_pb.MyString,
    responseType: hello_pb.MyString,
    requestSerialize: serialize_proto_MyString,
    requestDeserialize: deserialize_proto_MyString,
    responseSerialize: serialize_proto_MyString,
    responseDeserialize: deserialize_proto_MyString,
  },
};

exports.HelloClient = grpc.makeGenericClientConstructor(HelloService);
