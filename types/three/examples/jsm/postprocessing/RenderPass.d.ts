import { Object3D, Camera, Material, Color } from '../../../src/Three';

import { Pass } from './Pass';

export class RenderPass extends Pass {
    constructor(scene: Object3D, camera: Camera, overrideMaterial?: Material, clearColor?: Color, clearAlpha?: number);
    scene: Object3D;
    camera: Camera;
    overrideMaterial: Material;
    clearColor: Color;
    clearAlpha: number;
    clearDepth: boolean;
}
