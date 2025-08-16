import { fetch } from "@tauri-apps/plugin-http";
import { writeFile } from "@tauri-apps/plugin-fs";
import { downloadDir, join } from "@tauri-apps/api/path";
import { fileTypeFromBuffer } from 'file-type';

export type ImagesType = {
    src: string;
    select: boolean;
};

export class ImgSave {
    static async imgTagToFile(imgs: ImagesType[]) {
        if (!imgs || imgs.length === 0) return;
        const downloads = await downloadDir();
        await Promise.all(imgs.map(async (img, idx) => {
            try {
                const res = await fetch(img.src, { method: "GET" });
                const blob = await res.blob();
                const arrayBuffer = await blob.arrayBuffer();
                const buffer = new Uint8Array(arrayBuffer);
                const type = await fileTypeFromBuffer(buffer);
                const filePath = await join(downloads, `${idx}.${type?.ext}`);
                await writeFile(filePath, buffer);
                console.log(`${idx}图片保存成功:`, filePath);
            } catch (err) {
                console.error(`${idx}保存图片失败:`, err);
            }
        }));
    }
}
