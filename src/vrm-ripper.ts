import { GlTf } from "gltf-loader-ts/lib/gltf";

const fs = require('fs');
import axios from 'axios';
import { VRMMeta } from "./vrm-meta";

export class VRMRipper {
  private vrmBuffer = [];

  async loadVrmFromUrl(url: string): Promise<void> {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    this.vrmBuffer = response.data;
  }

  loadVrmFromFile(filePath: string): void {
    this.vrmBuffer = fs.readFileSync(filePath);
  }

  getLoadedBuffer() {
    return this.vrmBuffer;
  }

  getMeta(): VRMMeta {
    return this.parseMetum();
  }

  private parseMetum(): VRMMeta {
    const fileSizeBuffer = Buffer.from(this.vrmBuffer.slice(8, 12));
    const chunkSizeBuffer = Buffer.from(this.vrmBuffer.slice(12, 16));
    const fileSize = this.convertBufferToInt(fileSizeBuffer);
    const chunkSize = this.convertBufferToInt(chunkSizeBuffer);
    const jsonMetaJSON = this.vrmBuffer.slice(20, 20 + chunkSize).toString();
    return {
      fileSize,
      chunkSize,
      meta: JSON.parse(jsonMetaJSON) as GlTf,
    };
  }

  private convertBufferToInt(byteSizeBuffer: Buffer): number {
    const reverseBuffer = byteSizeBuffer.reverse();
    let hexSumString = '';
    for (const byte of reverseBuffer) {
      hexSumString = hexSumString + byte.toString(16);
    }
    return parseInt(hexSumString, 16);
  }
}
