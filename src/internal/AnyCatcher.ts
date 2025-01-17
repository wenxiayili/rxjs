/**
 * This is just a type that we're using to identify `any` being passed to
 * function overloads. This is used because of situations like {@link forkJoin},
 * where it could return an `Observable<T[]>` or an `Observable<{ [key: K]: T }>`,
 * so `forkJoin(any)` would mean we need to return `Observable<unknown>`.
 *
 * @internal
 */
declare const anyCatcherSymbol: unique symbol;
export type AnyCatcher = typeof anyCatcherSymbol;
