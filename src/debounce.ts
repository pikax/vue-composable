import debounce from 'lodash.debounce'

export function useDebounce<T extends Function>(handler: T, wait?: number ): T{
    return debounce(handler as any, wait) as T;
}