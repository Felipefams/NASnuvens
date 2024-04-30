import { FileType } from "controllers/types";
import { FilesProviderPort } from "../../../use-cases/ports/files-provider.port";
import * as fs from "fs";

export class LocalFilesProvider implements FilesProviderPort {
    private readonly basePath = "uploads" as const;
    async saveFile(path: string, files: FileType[]): Promise<boolean> {
        try {
            const folderPath = this.getFolderPath(path);

            const fs_writeFile = fs.promises.writeFile;

            let filesPromises = files.map((file) => {
                const finalPath = `${folderPath}/${file.name}` as const;
                if (fs.existsSync(finalPath))
                    return;

                return fs_writeFile(finalPath, file.data);
            });

            await Promise.allSettled(filesPromises);

            return true;
        } catch (error) {
            throw new Error(`Error saving file: ${error}`);
        }
    }

    private getFolderPath(path: string): string {
        try {
            const folderPath = `${this.basePath}/${path}` as const;
            if (!fs.existsSync(folderPath))
                fs.mkdirSync(folderPath, { recursive: true });

            return folderPath;
        } catch (error) {
            throw new Error(`Error getting folder path: ${error}`);
        }
    }
}