import { IUniform, Texture } from '../../../src/Three';

export const AfterimageShader: {
    uniforms: {
        damp: IUniform<number>;
        tOld: IUniform<Texture>;
        tNew: IUniform<Texture>;
    };
    vertexShader: string;
    fragmentShader: string;
};
