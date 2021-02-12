import client from './';
import { MyString } from '../proto/hello_pb';

function sayHello(name: string): Promise<string> {
    const request = new MyString();
    request.setValue(name);

    return new Promise<string>((resolve, reject) => {
        client.sayHello(request, (err, ret) => {
            if (err) {
                return reject(err);
            }
            return resolve(ret.getValue());
        });
    });
}

export default {
    command: 'sat-hello',
    describe: 'Get a random song',
    builder: {},
    handler: async (): Promise<void> => {
        const song = await sayHello('sid');
        console.log(song.toString());
    },
};
