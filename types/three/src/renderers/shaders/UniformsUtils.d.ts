import { TUniforms } from 'three';

export function cloneUniforms<U extends TUniforms>(uniforms_src: U): U;
export function mergeUniforms(uniforms: any[]): any;

export namespace UniformsUtils {
    export { mergeUniforms as merge, cloneUniforms as clone };
}
