import { readdir } from 'node:fs/promises';

const list = async () => {
    try {
        const src = new URL('./files', import.meta.url);
        const files = await readdir(src);
        console.log(files);
    } catch (err) {
        console.error('FS operation failed');
    }
};

await list();