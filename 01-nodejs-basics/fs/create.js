import { writeFile } from 'node:fs/promises';

const create = async () => {
    try {
        const filePath = new URL('./files/fresh.txt', import.meta.url);
        const data = 'I am fresh and young';
        await writeFile(filePath, data, { flag: 'wx' });
    } catch (err) {
        console.error('FS operation failed');
    }
};

await create();