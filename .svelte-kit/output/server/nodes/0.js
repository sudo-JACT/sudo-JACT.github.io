import * as universal from '../entries/pages/_layout.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.7adbd5b6.js","_app/immutable/chunks/scheduler.98dcdc08.js","_app/immutable/chunks/index.bc2cb9f6.js","_app/immutable/chunks/UIcon.2475e4f7.js","_app/immutable/chunks/paths.b8857b6a.js","_app/immutable/chunks/stores.645ff862.js","_app/immutable/chunks/singletons.4c817702.js","_app/immutable/chunks/home.e3a5d719.js","_app/immutable/chunks/types.1ebf2f37.js","_app/immutable/chunks/skills.7136af6b.js"];
export const stylesheets = ["_app/immutable/assets/0.bde0f33c.css"];
export const fonts = [];
