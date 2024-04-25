export type RestResponse = {
  statusCode: number;
  body?: any;
  error?: {
    name: string;
    message: string;
  };
}

export type RestRequest<T = any> = {
  body?: T;
  query?: any;
  params?: any;
  headers?: any;
}