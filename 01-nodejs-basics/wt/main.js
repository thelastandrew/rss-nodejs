import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { fileURLToPath } from 'node:url';
import { join } from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const workerSrc = join(__dirname, './worker.js')

const performCalculations = async () => {
    const cp = cpus();
    let num = 10;

    const workerResults = await Promise.allSettled(cp.map(() => {
        return new Promise((res, rej) => {
            const worker = new Worker(workerSrc, {
                workerData: num ++,
            })
            worker.on('message', msg => res(msg));
            worker.on('error', msg => rej(msg));
        });
    } ));

    const res = workerResults.map(({ status, value }) => ({
        status: status  === 'fulfilled' ? 'resolved' : 'error',
        data: status === 'fulfilled' ? value : null,
    }))
    console.log(res);
};

await performCalculations();