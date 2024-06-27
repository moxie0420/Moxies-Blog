/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
    particlesInit(Engine): Promise<void>;
    particlesLoaded(Container): void;
}