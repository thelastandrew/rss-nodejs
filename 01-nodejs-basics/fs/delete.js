import { rm } from 'node:fs/promises';

const remove = async () => {
    try {
        const filePath = new URL('./files/fileToRemove.txt', import.meta.url);
        await rm(filePath);
        console.log('file deleted');
    } catch (err) {
        console.error('FS operation failed');
    }
};

await remove();