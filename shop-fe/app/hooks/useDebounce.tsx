function useDebounce<T extends (...args: any[]) => any>(func: T, delay: number) {
    //console.log(typeof setTimeout);
    let timeoutID: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => func(...args), delay);
    }
}

export default useDebounce;