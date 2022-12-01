import {
    AvoidNullUniforms,
    ExtractUniforms,
    ShaderMaterial,
    ShaderMaterialParameters,
    TFullUniforms,
    TUniforms,
} from '../../../src/Three';

import { FullScreenQuad, Pass } from './Pass';

export type ShaderLike<T extends TUniforms = any, U extends TFullUniforms = ExtractUniforms<T>> = Partial<
    Pick<ShaderMaterial<any, U>, 'fragmentShader' | 'vertexShader' | 'defines' | 'uniforms'>
>;

export class ShaderPass<T extends TUniforms = any, U extends TFullUniforms = ExtractUniforms<T>> extends Pass {
    constructor(shader: ShaderLike<any, U>, textureID?: string);
    textureID: string;
    uniforms: U;
    material: ShaderMaterial<any, U>;
    fsQuad: FullScreenQuad<typeof this.material>;
}
