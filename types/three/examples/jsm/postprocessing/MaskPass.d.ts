import { Object3D, Camera } from '../../../src/Three';

import { Pass } from './Pass';

export class MaskPass extends Pass {
    constructor(scene: Object3D, camera: Camera);
    scene: Object3D;
    camera: Camera;
    inverse: boolean;
}

export class ClearMaskPass extends Pass {
    constructor();
}
