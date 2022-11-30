import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';


const calculateHash = async () => {
    try {
        const __dirname = fileURLToPath(new URL('.', import.meta.url));
        const src = join(__dirname, './files/fileToCalculateHashFor.txt');
        const fileBuffer = await readFile(src);
        const hash = createHash('sha256');

        hash.update(fileBuffer);

        const hex = hash.digest('hex');

        console.log(hex);
    } catch (e) {
        throw e;
    }
};

await calculateHash();