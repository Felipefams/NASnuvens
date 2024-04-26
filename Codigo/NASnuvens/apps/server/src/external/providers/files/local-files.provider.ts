import { FilesProviderPort } from "../../../use-cases/ports/files-provider.port";
import * as fs from "fs";

export class LocalFilesProvider implements FilesProviderPort {
    async saveFile(path: string, file: File): Promise<boolean> {
        try {
            if (!fs.existsSync(path)) {
                fs.mkdirSync(path, { recursive: true });
            }
            const buffer = Buffer.from(await file.arrayBuffer());

            fs.writeFileSync(`${path}/${file.name}`, buffer);
            return true;
        } catch (error) {
            throw new Error(`Error saving file: ${error}`);
        }
    }
}