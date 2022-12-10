import { readFile } from 'node:fs/promises';

const read = async () => {
    try {
        const src = new URL('./files/fileToRead.txt', import.meta.url);
        const content = await readFile(src, { encoding: 'utf8' });
        console.log(content);
    } catch (err) {
        console.error('FS operation failed');
    }
};

await read();