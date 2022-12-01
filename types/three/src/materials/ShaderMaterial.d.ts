import { IUniform } from '../renderers/shaders/UniformsLib';
import { MaterialParameters, Material } from './Material';
import { GLSLVersion } from '../constants';

type TFullUniforms = Record<string, IUniform>;
type TShortUniforms = Record<string, any>;
type TMaterialUniforms<U extends TFullUniforms = TFullUniforms> = { uniforms: U };
export type TUniforms = TMaterialUniforms | TFullUniforms | TShortUniforms;

// @note transform TShortUniforms to TFullUniforms
// { uniform1: type1, uniform2: type2 } => { uniform1: { value: type1 }, ...}
export type WrapUniforms<U extends TShortUniforms> = {
    [K in keyof U]: IUniform<U[K]>;
};

// @note replace null types by any (typically used by textures)
export type AvoidNullUniforms<U extends TFullUniforms> = {
    [K in keyof U]: IUniform<U[K]['value'] extends null ? any : U[K]['value']>;
};

export type ExtractUniforms<U extends TUniforms> = AvoidNullUniforms<
    U extends TMaterialUniforms<infer U2> ? U2 : U extends TFullUniforms ? U : WrapUniforms<U>
>;

export type ShaderMaterialParameters<
    T extends TUniforms = any,
    U extends TFullUniforms = ExtractUniforms<T>,
> = MaterialParameters & // if we have uniforms type defined in var declaration then this parameter is required
    // keyof { [string] } will result in string | number, since uniform names can't be numbers we can safely determine the type
    // check for extends never instead of extends number because never always extends everything
    // uniforms: Type | undefined !== uniforms?: Type
    // (Exclude<keyof U, string> extends never ? { uniforms: U } : { uniforms?: U }) &
    Partial<{
        uniforms: U;

        vertexShader: string;
        fragmentShader: string;
        linewidth: number;
        wireframe: boolean;
        wireframeLinewidth: number;
        lights: boolean;
        clipping: boolean;

        extensions: Partial<{
            derivatives: boolean;
            fragDepth: boolean;
            drawBuffers: boolean;
            shaderTextureLOD: boolean;
        }>;

        glslVersion: GLSLVersion;
    }>;

export class ShaderMaterial<T extends TUniforms = any, U extends TFullUniforms = ExtractUniforms<T>> extends Material {
    constructor(parameters?: ShaderMaterialParameters<any, U>);

    /**
     * @default 'ShaderMaterial'
     */
    type: string;

    /**
     * @default {}
     */
    defines: Record<string, any>;

    /**
     * @default {}
     */
    uniforms: U;
    // uniforms: Exclude<keyof Uniforms, string> extends never
    //     ? AvoidNullUniforms<Uniforms>
    //     : Partial<AvoidNullUniforms<Uniforms>>;
    vertexShader: string;
    fragmentShader: string;

    /**
     * @default 1
     */
    linewidth: number;

    /**
     * @default false
     */
    wireframe: boolean;

    /**
     * @default 1
     */
    wireframeLinewidth: number;

    /**
     * @default false
     */
    fog: boolean;

    /**
     * @default false
     */
    lights: boolean;

    /**
     * @default false
     */
    clipping: boolean;

    /**
     * @deprecated Use {@link ShaderMaterial#extensions.derivatives extensions.derivatives} instead.
     */
    derivatives: any;

    /**
     * @default { derivatives: false, fragDepth: false, drawBuffers: false, shaderTextureLOD: false }
     */
    extensions: {
        derivatives: boolean;
        fragDepth: boolean;
        drawBuffers: boolean;
        shaderTextureLOD: boolean;
    };

    /**
     * @default { 'color': [ 1, 1, 1 ], 'uv': [ 0, 0 ], 'uv2': [ 0, 0 ] }
     */
    defaultAttributeValues: any;

    /**
     * @default undefined
     */
    index0AttributeName?: string;

    /**
     * @default false
     */
    uniformsNeedUpdate: boolean;

    /**
     * @default null
     */
    glslVersion: GLSLVersion | null;

    isShaderMaterial: boolean;

    setValues(parameters: ShaderMaterialParameters<any, U>): void;
    toJSON(meta: any): any;
}
