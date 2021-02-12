import * as grpc from "@grpc/grpc-js";
import { sendUnaryData } from "@grpc/grpc-js/build/src/server-call";
import { MyString } from "../../proto/hello_pb";
import { IHelloServer } from "../../proto/hello_grpc_pb";
import getHello from "./get-hello";

class HelloServer implements IHelloServer {
  sayHello(
    call: grpc.ServerUnaryCall<MyString, MyString>,
    callback: sendUnaryData<MyString>
  ): void {
    console.log(`${new Date().toISOString()}    getSong`);
    callback(null, getHello(call.request));
  }
}

export default HelloServer;
