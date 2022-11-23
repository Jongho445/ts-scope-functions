class ScopeMonad<T>{

  public constructor(
    private readonly elem: T
  ) {}

  public let_<R>(fx: (elem: T) => R): ScopeMonad<R> {
    return new ScopeMonad<R>(fx(this.elem));
  }

  public also_(fx: (elem: T) => void): ScopeMonad<T> {
    fx(this.elem);

    return this;
  }

  public let<R>(fx: (elem: T) => R): R {
    return fx(this.elem);
  }

  public also(fx: (elem: T) => void): T {
    fx(this.elem);

    return this.elem;
  }

  public orElseGet_<R>(elem: R): ScopeMonad<T | R> {
    if (this.elem === null || this.elem === undefined) {
      return new ScopeMonad(elem);
    } else {
      return this;
    }
  }

  public orElseRun_<R>(fx: () => R): ScopeMonad<T | R> {
    if (this.elem === null || this.elem === undefined) {
      return new ScopeMonad(fx());
    } else {
      return this;
    }
  }

  public orElseThrow_<R>(err: Error): ScopeMonad<T | R> {
    if (this.elem === null || this.elem === undefined) {
      throw err;
    } else {
      return this;
    }
  }

  public orElseGet<R>(elem: R): T | R {
    if (this.elem === null || this.elem === undefined) {
      return elem;
    } else {
      return this.elem;
    }
  }

  public orElseRun<R>(fx: () => R): T | R {
    if (this.elem === null || this.elem === undefined) {
      return fx();
    } else {
      return this.elem;
    }
  }

  public orElseThrow<R>(err: Error): T | R {
    if (this.elem === null || this.elem === undefined) {
      throw err;
    } else {
      return this.elem;
    }
  }
}

export function run<T>(elem: T): ScopeMonad<T> {
  return new ScopeMonad<T>(elem)
}