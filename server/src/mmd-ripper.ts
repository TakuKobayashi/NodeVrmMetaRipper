const fs = require('fs');
import axios from 'axios';
import { Parser } from 'mmd-parser';

export class MMDRipper {
  private vmdBuffer = [];
  private parser: Parser;

  constructor(){
    this.parser = new Parser();
  }

  async parseVmdFromUrl(url: string): Promise<void> {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    this.vmdBuffer = response.data;
  }

  loadVmdFromFile(filePath: string): void {
    this.vmdBuffer = fs.readFileSync(filePath);
  }

  getLoadedBuffer() {
    return this.vmdBuffer;
  }

  getMeta(): any {
    return this.parseMetum();
  }

  private parseMetum(): any {
    const vmdUArray = new Uint8Array(this.vmdBuffer);
    for (let i = 0; i < this.vmdBuffer.length; ++i) {
      vmdUArray[i] = this.vmdBuffer[i];
    }
    return this.parser.parseVmd(vmdUArray, true);
  }
}
