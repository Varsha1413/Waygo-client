export interface ICommonApiResponse<T> {
  statusCode: number;
  message: string;
  error?: any;
  data: T;
}
export interface IAppError {
  statuCode?: number;
  message?: string;
  error?: string;
}
