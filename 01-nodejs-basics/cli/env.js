import { env } from 'node:process';

const parseEnv = () => {
    const res = [];
    for (const [key, value] of Object.entries(env)) {
        if (key.substring(0, 4) === 'RSS_') res.push(`${key}=${value}`);
    }
    console.log(res.join('; '));
};

parseEnv();