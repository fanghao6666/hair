#version 400 core

#include "hairlighting.glsl"

in vec4 position_g;
in vec3 tangent_g;

out vec4 fragColor;

void main()
{
    fragColor = hairLighting(position_g, tangent_g);
}
