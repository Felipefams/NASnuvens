import { FilesProviderPort } from "../../../use-cases/ports/files-provider.port";

export class LocalFilesProvider implements FilesProviderPort {
    saveFile(path: string, file: File[]): Promise<boolean> {
        throw new Error("Method not implemented.");
    }    
}