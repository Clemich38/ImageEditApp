import GL from "gl-react";
import React from "react";

const shaders = GL.Shaders.create({
  saturation: {
    frag: `
      precision highp float;
      varying vec2 uv;
      uniform sampler2D image;

      uniform float saturation;
      uniform float brightness;
      uniform float contrast;

      const vec3 W = vec3(0.2125, 0.7154, 0.0721);

      void main () {
        vec4 color = texture2D(image, uv);
        float luminance = dot(color.rgb, W);
        vec3 gray = vec3(luminance);

        // Algorithm from Chapter 16 of OpenGL Shading Language
        gl_FragColor = vec4(mix(gray, color.rgb, saturation), color.a);
      }
    `
  }
});

module.exports = GL.createComponent(
  ({ saturation, image, ...rest }) =>
    <GL.Node
      {...rest}
      shader={shaders.saturation}
      uniforms={{ saturation, image }}
    />,
  { displayName: "Saturation" });