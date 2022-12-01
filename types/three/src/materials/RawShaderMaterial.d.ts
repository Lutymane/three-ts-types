import { ShaderMaterialParameters, ShaderMaterial, TUniforms, ExtractUniforms, TFullUniforms } from './ShaderMaterial';

export type RawShaderMaterialParameters<
    T extends TUniforms = any,
    U extends TFullUniforms = ExtractUniforms<T>,
> = ShaderMaterialParameters<any, U> & {
    vertexShader: string;
    fragmentShader: string;
};

export class RawShaderMaterial<
    T extends TUniforms = any,
    U extends TFullUniforms = ExtractUniforms<T>,
> extends ShaderMaterial<any, U> {
    constructor(parameters?: RawShaderMaterialParameters<any, U>);
}
