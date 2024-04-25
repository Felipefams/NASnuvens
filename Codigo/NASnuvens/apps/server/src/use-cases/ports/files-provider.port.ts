export interface FilesProviderPort {
    saveFile(path: string, file: File[]): Promise<boolean>;
}