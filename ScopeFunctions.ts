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

  public orElseGet<R>(elem: R): ScopeMonad<T | R> {
    if (this.elem === null || this.elem === undefined) {
      return new ScopeMonad(elem);
    } else {
      return this;
    }
  }

  public orElseRun<R>(fx: () => R): ScopeMonad<T | R> {
    if (this.elem === null || this.elem === undefined) {
      return new ScopeMonad(fx());
    } else {
      return this;
    }
  }

  public orElseThrow<R>(err: Error): ScopeMonad<T | R> {
    if (this.elem === null || this.elem === undefined) {
      throw err;
    } else {
      return this;
    }
  }
}

export function runWith<T>(elem: T): ScopeMonad<T> {
  return new ScopeMonad<T>(elem)
}

export function run<T>(fx: () => T): ScopeMonad<T> {
  return new ScopeMonad(fx())
}