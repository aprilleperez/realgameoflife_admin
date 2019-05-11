export function partial(fn, ...args) {
    return (...rest) => {
        fn(...args, ...rest)
    }
}