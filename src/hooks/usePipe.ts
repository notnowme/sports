export const usePipe = (...fns: Function[]) => {
    return function (arg: any) {
        return fns.reduce((args, fn) => fn(args), arg);
    }
}