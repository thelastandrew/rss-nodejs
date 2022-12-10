import { readdir, mkdir, copyFile, constants } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const copy = async () => {
  try {
    const __dirname = fileURLToPath(new URL('.', import.meta.url));
    const src = path.join(__dirname, './files');
    const dest = path.join(__dirname, './files_copy');
    const files = await readdir(src);
    await mkdir(dest);
    for (const file of files) {
      await copyFile(path.join(src, file), path.join(dest, file), constants.COPYFILE_EXCL);
    }
  } catch (err) {
    console.error('FS operation failed');
  }
};

copy();