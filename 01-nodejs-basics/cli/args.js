import { argv } from 'node:process';

const parseArgs = () => {
    const argsArr = argv.slice(2);
    const subRes = argsArr.map((arg, i) => {
        return i%2 === 0 ? arg.slice(2) : arg;
    });
    const res = [];
    for (let i = 0; i < subRes.length; i += 2) {
        res.push(`${subRes[i]} is ${subRes[i + 1]}`);
    }
    console.log(res.join(', '));
};

parseArgs();