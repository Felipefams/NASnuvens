import { HandleFiles } from "use-cases/files/handle-files";
import { RestRequest, RestResponse } from "./types";

export class UserController {
    constructor(private handleFilesUseCase: HandleFiles) {}

    async saveUserFiles(req: RestRequest, res: RestResponse): Promise<void> {
        const { path, files } = req.body;
        await this.handleFilesUseCase.saveUserFile(path, files);
    }
}