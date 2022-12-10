import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';
import { createReadStream, createWriteStream } from 'node:fs';
import { rm } from 'node:fs/promises';

const decompress = async () => {
    const __dirname = fileURLToPath(new URL('.', import.meta.url));
    const src = join(__dirname, './files/archive.gz');
    const srcStream = createReadStream(src);
    const destStream = createWriteStream(join(__dirname, './files/fileToCompress.txt'));
    const gzip = createUnzip();
    const pipe = promisify(pipeline);

    try {
        await pipe(srcStream, gzip, destStream);
        await rm(src);
    } catch (e) {
        throw e;
    }
};

await decompress();