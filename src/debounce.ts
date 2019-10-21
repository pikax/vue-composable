import { debounce } from 'lodash-es'

export function useDebounce<T extends Function>(handler: T, wait?: number ): T{
    return debounce(handler as any, wait) as T;
}