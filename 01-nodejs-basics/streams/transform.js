import { Transform, pipeline } from 'node:stream'

const transform = async () => {
    const readable = process.stdin;
    const writable = process.stdout;
    const transform = new Transform({
        transform(chunk, enc, callback) {
            const chunkStr = chunk.toString().trim();
            const reverseChunk = chunkStr.split('').reverse('').join('');
            this.push(`${reverseChunk}\n`);
            callback();
        }
    });
    pipeline(
        readable,
        transform,
        writable,
        err => { console.error(`Error: ${err}`) }
    );
};

await transform();