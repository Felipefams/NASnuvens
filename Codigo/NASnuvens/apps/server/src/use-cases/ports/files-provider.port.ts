import { FileType } from "controllers/types";

export interface FilesProviderPort {
    saveFile(path: string, file: FileType[]): Promise<boolean>;
}