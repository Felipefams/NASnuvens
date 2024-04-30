import { FilesProviderPort } from "use-cases/ports/files-provider.port";
import { HandleFiles } from "./handle-files";
import { FileType } from "controllers/types";

export class HandleFilesUseCase implements HandleFiles {
    constructor(private filesProvider: FilesProviderPort) { }
    async saveUserFile(path: string, files: FileType[]): Promise<void> {
        await this.filesProvider.saveFile(path, files);
    }

    async getUserFiles(userId: string): Promise<File[]> {
        throw new Error("Method not implemented.");
    }

}