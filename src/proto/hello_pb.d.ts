// package: proto
// file: hello.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class MyString extends jspb.Message { 
    getValue(): string;
    setValue(value: string): MyString;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MyString.AsObject;
    static toObject(includeInstance: boolean, msg: MyString): MyString.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MyString, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MyString;
    static deserializeBinaryFromReader(message: MyString, reader: jspb.BinaryReader): MyString;
}

export namespace MyString {
    export type AsObject = {
        value: string,
    }
}
