import { createReadStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const read = async () => {
    const __dirname = fileURLToPath(new URL('.', import.meta.url));
    const src = join(__dirname, './files/fileToRead.txt');
    const readStream = createReadStream(src, 'utf-8');
    readStream.pipe(process.stdout);
};

await read();