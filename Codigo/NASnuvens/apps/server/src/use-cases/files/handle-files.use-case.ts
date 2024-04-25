import { FilesProviderPort } from "use-cases/ports/files-provider.port";
import { HandleFiles } from "./handle-files";

export class HandleFilesUseCase implements HandleFiles {
    constructor(private filesProvider: FilesProviderPort) { }
    async saveUserFiles(path: string, files: File[]): Promise<void> {
        await this.filesProvider.saveFile(path, files);
    }
    async getUserFiles(userId: string): Promise<File[]> {
        throw new Error("Method not implemented.");
    }

}