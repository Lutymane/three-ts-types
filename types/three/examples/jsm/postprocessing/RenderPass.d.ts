import { Object3D, Camera, Material, Color, Scene } from '../../../src/Three';

import { Pass } from './Pass';

export class RenderPass<C extends Camera = Camera> extends Pass {
    constructor(scene: Scene, camera: Camera, overrideMaterial?: Material, clearColor?: Color, clearAlpha?: number);
    scene: Object3D;
    camera: C;
    overrideMaterial: Material;
    clearColor: Color;
    clearAlpha: number;
    clearDepth: boolean;
}
