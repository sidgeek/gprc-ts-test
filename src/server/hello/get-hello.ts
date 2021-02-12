import { MyString } from "../../proto/hello_pb";

export default function (name: MyString): MyString {
  const reply = new MyString();
  reply.setValue("Hello " + name.getValue());
  return reply;
}
