import { HandleFiles } from "use-cases/files/handle-files";
import { FileType, RestRequest, RestResponse } from "./types";

export class UserController {
    constructor(private handleFilesUseCase: HandleFiles) { }

    async saveUserFiles(req: RestRequest): Promise<void> {
        const { path } = req.body;

        const keys = Object.keys(req.files);
        let files: FileType[] = [];
        for (const key of keys) {
            files = files.concat(req.files[key]);
        }

        return await this.handleFilesUseCase.saveUserFile(path, files); 
    }
}