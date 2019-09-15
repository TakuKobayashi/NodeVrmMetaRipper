import { GlTf } from "gltf-loader-ts/lib/gltf";

export interface VRMMeta{
  fileSize: number;
  chunkSize: number;
  meta: GlTf;
}