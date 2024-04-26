export interface HandleFiles {
    saveUserFile(path: string, files: File): Promise<void>;
    getUserFiles(userId: string): Promise<File[]>;
}