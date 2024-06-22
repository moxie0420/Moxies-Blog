<template>
    <NuxtParticles
        id="tsparticles"
        :options="options"
        @load="onLoad"
    />
    <NavigationBar />
    <slot />
</template>

<script setup lang="ts">
import type {Container} from "@tsparticles/engine"
const options  = {
    fullScreen: {    
        enable: true,
        zIndex: -1,
    },
    background: {
        color: {
            value: "#111"
        },
    },
    particles: {
        color: {
            value: "#9fe2bf"
        },
        links: {
            color: "#9fe2bf",
            enable: true,
        },
        move: {
            enable: true,
        },
        number: {
            value: 100,
        },
        effect: {
            close: false,
            fill: true,
            options: {},
        },
    }
}

const onLoad = (container: Container ) => container.play();
</script>