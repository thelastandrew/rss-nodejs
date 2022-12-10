import { createWriteStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const write = async () => {
    const __dirname = fileURLToPath(new URL('.', import.meta.url));
    const dest = join(__dirname, './files/fileToWrite.txt');
    const writeString = createWriteStream(dest);
    process.stdin.pipe(writeString);
    console.log('Type something to write in the file..\n');
};

await write();