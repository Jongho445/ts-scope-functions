class ScopeMonad<T> {

  public constructor(
    private readonly elem: T
  ) {}

  public get = (): T => this.elem;

  public let<R>(fx: (elem: T) => R): ScopeMonad<R> {
    return new ScopeMonad<R>(fx(this.elem));
  }

  public also(fx: (elem: T) => void): ScopeMonad<T> {
    fx(this.elem);

    return this;
  }
}

export function runWith<T>(elem: T): ScopeMonad<T> {
  return new ScopeMonad<T>(elem)
}

export function run<T>(fx: () => T): ScopeMonad<T> {
  return new ScopeMonad(fx())
}