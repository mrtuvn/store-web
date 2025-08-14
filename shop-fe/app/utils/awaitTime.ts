export function awaitTime(time: number = 3000, isError: Boolean = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isError) {
                return resolve(Promise.reject('Error'));
            };
            resolve('');
        }, time)
    })
}