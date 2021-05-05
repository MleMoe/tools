import fs from "fs";
import axios from "axios";

/**
 * 下载文件
 * @para fileUrl
 * @param storagePath
 */

export async function downloadFile(url: string, path: string) {
  try {
    const res = await axios.get(url, {
      responseType: "arraybuffer",
    });
    fs.writeFileSync(path, res.data, "binary");
  } catch (err) {
    console.log(err.message);
  }
}
