import { spawn }  from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const src = join(__dirname, './files/script.js');

const spawnChildProcess = async (args) => {
    let initiated = false;
    const childProcess = spawn('node', [src, ...args.split(' ')]);

    process.stdin.on('data', (msg) => {
        childProcess.stdin.write(msg);
    });

    childProcess.stdout.on('data', (data) => {
        console.log(data.toString());
        if (!initiated) {
            console.log('Type any data..\n');
            initiated = true;
        }
    });
};

spawnChildProcess('--silent --all');