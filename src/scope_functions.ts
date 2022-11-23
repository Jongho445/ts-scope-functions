import ScopeMonad from "./ScopeMonad";

export function run<T>(elem: T): ScopeMonad<T> {
  return new ScopeMonad<T>(elem)
}

export function runWith<T>(fx: () => T): ScopeMonad<T> {
  return new ScopeMonad<T>(fx())
}