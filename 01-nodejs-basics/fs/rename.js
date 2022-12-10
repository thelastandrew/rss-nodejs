import { access, rename } from 'node:fs/promises';

const fileExists = async (path) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};

const renameFn = async () => {
  try {
    const wrong = new URL('./files/wrongFilename.txt', import.meta.url);
    const proper = new URL('./files/properFilename.md', import.meta.url);
    const exists = await fileExists(proper);
    if (!exists) {
        await rename(wrong, proper);
        console.log('file renamed');
    } else {
        throw new Error;
    }
  } catch (err) {
    console.error('FS operation failed');
  }
};

await renameFn();

