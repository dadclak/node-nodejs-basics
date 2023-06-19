const parseEnv = () => {
    const envs = process.env;
    const resultArray = Object.keys(envs)
        .filter(s => s.startsWith('RSS_'))
        .reduce((accumulator, k) => {
            return [...accumulator, `${k}=${envs[k]}`];
        }, []);
    const result = resultArray.join(', ')
    console.log(result);
};

parseEnv();