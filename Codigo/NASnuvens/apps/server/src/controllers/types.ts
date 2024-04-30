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
  files?: {[key: string]: FileType[]};
  params?: any;
  headers?: any;
}

export type FileType = {
  name: string;
  data: Buffer;
  encoding: string;
  mimetype: string;
  size: number;
  truncated: boolean;
  mv: (path: string) => Promise<void>;
  tempFilePath: string;
}