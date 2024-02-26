type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    const firstNum = await promise1
    const secondNum = await promise2
    return new Promise(resolve => setTimeout(() => resolve(firstNum + secondNum),0))
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */