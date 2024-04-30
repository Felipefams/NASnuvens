import { FileType } from "controllers/types";

export interface HandleFiles {
    saveUserFile(path: string, files: FileType[]): Promise<void>;
    getUserFiles(userId: string): Promise<File[]>;
}