export interface HandleFiles {
    saveUserFiles(path: string, files: File[]): Promise<void>;
    getUserFiles(userId: string): Promise<File[]>;
}