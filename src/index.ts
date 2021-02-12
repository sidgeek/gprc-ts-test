import yargs from 'yargs';
import serve from './server/index';

yargs
    .command(serve)
    .help().argv;
