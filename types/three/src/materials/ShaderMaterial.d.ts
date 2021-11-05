import { IUniform } from "../renderers/shaders/UniformsLib";
import { MaterialParameters, Material } from "./Material";
import { GLSLVersion } from "../constants";

type RecursivePartial<T> = { [P in keyof T]?: T[P] extends Object ? RecursivePartial<T[P]> : T[P] | undefined; }

interface Parameters<
  TUniforms extends { [uniform: string]: IUniform } = {}
> {
  uniforms: TUniforms;
  vertexShader: string;
  fragmentShader: string;
  linewidth: number;
  wireframe: boolean;
  wireframeLinewidth: number;
  lights: boolean;
  clipping: boolean;

  extensions: {
    derivatives: boolean;
    fragDepth: boolean;
    drawBuffers: boolean;
    shaderTextureLOD: boolean;
  };
  glslVersion: GLSLVersion;
}

export type ShaderMaterialParameters = MaterialParameters & RecursivePartial<Parameters>;

export declare class ShaderMaterial extends Material implements Parameters {
  constructor(parameters?: ShaderMaterialParameters);

  /**
   * @default 'ShaderMaterial'
   */
  type: string;

  /**
   * @default {}
   */
  defines: { [key: string]: any };

  /**
   * @default {}
   */
  uniforms: TUniforms;
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
  index0AttributeName: string | undefined;

  /**
   * @default false
   */
  uniformsNeedUpdate: boolean;

  /**
   * @default null
   */
  glslVersion: GLSLVersion | null;

  isShaderMaterial: boolean;

  setValues(parameters: ShaderMaterialParameters): void;
  toJSON(meta: any): any;
}
