export interface ApiReturnType<T> {
  data: T;
  msg: string;
  code: number;
}
