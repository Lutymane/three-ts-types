import { ShaderMaterialParameters, ShaderMaterial, TUniforms, ExtractUniforms } from './ShaderMaterial';

export type RawShaderMaterialParameters<
    T extends {} = TUniforms,
    Uniforms extends TUniforms = ExtractUniforms<T>,
> = ShaderMaterialParameters<Uniforms> & {
    vertexShader: string;
    fragmentShader: string;
};

export class RawShaderMaterial<
    T extends {} = TUniforms,
    Uniforms extends TUniforms = ExtractUniforms<T>,
> extends ShaderMaterial<T, Uniforms> {
    constructor(parameters?: RawShaderMaterialParameters<Uniforms>);
}
