export const MimeType = {
    IMAGE: 'image/jpeg',
    PDF: 'application/pdf',
    DOC: 'application/msword',
} as const;
export type MimeType = typeof MimeType[keyof typeof MimeType];


export type FileType = {
  name: string;
  data: Buffer;
  encoding: string;
  mimeType: MimeType | string;
  size: number;
  truncated: boolean;
  mv: (path: string) => Promise<void>;
  tempFilePath: string;
}