function useThrottle<T extends (...args: any[]) => void>(func: T, delay: number) {
    let shouldWait = false;
    let lastArgs: any[] | null = null;

    return (...args: any[]) => {
        if (shouldWait) {
            lastArgs = args;
            return;
        }

        func(...args);
        shouldWait = true;

        setTimeout(() => {
            if (lastArgs === null) {
                shouldWait = false;
            } else {
                shouldWait = false;
                func(...lastArgs);
                lastArgs=null;
            }
        }, delay)
    }

}

export default useThrottle;