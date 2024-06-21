import { FileType } from "@/types/files";
import axios from "axios";

export const postFiles = async (files: any[], userPath: string): Promise<unknown> => {
    try {
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i]);
        }
        formData.append('path', userPath)

        const ngrokUrl = "https://778d-2804-14c-5b70-80a8-95c4-18d8-1067-34fd.ngrok-free.app"
        const url = `${ngrokUrl}/user/files` as const;
        const { data } = await axios.post(url, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}