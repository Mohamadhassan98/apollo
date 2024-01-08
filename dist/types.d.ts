
import type { ModuleOptions, RuntimeModuleHooks, ModuleRuntimeConfig, ModulePublicRuntimeConfig } from './module'

declare module '#app' {
  interface RuntimeNuxtHooks extends RuntimeModuleHooks {}
}

declare module '@nuxt/schema' {
  interface NuxtConfig { ['apollo']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['apollo']?: ModuleOptions }
  interface RuntimeConfig extends ModuleRuntimeConfig {}
  interface PublicRuntimeConfig extends ModulePublicRuntimeConfig {}
}

declare module 'nuxt/schema' {
  interface NuxtConfig { ['apollo']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['apollo']?: ModuleOptions }
  interface RuntimeConfig extends ModuleRuntimeConfig {}
  interface PublicRuntimeConfig extends ModulePublicRuntimeConfig {}
}


export type { ErrorResponse } from './module'
