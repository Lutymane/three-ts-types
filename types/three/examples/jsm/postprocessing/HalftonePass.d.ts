import type { ShaderMaterial, Texture } from '../../../src/Three';

import { Pass } from './Pass';

export interface HalftonePassParameters {
    shape?: number;
    radius?: number;
    rotateR?: number;
    rotateB?: number;
    rotateG?: number;
    scatter?: number;
    blending?: number;
    blendingMode?: number;
    greyscale?: boolean;
    disable?: boolean;
}

export class HalftonePass extends Pass {
    constructor(width: number, height: number, params: HalftonePassParameters);
    uniforms: object;
    material: ShaderMaterial<{
        tDiffuse: { value: Texture | null };
        shape: { value: number };
        radius: { value: number };
        rotateR: { value: number };
        rotateG: { value: number };
        rotateB: { value: number };
        scatter: { value: number };
        width: { value: number };
        height: { value: number };
        blending: { value: number };
        blendingMode: { value: number };
        greyscale: { value: boolean };
        disable: { value: boolean };
    }>;
    fsQuad: object;
}
