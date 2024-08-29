import * as universal from '../entries/pages/experience/_slug_/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/experience/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/experience/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/5.14ed2e9c.js","_app/immutable/chunks/experience.2d46f3d7.js","_app/immutable/chunks/UIcon.2475e4f7.js","_app/immutable/chunks/index.bc2cb9f6.js","_app/immutable/chunks/scheduler.98dcdc08.js","_app/immutable/chunks/paths.b8857b6a.js","_app/immutable/chunks/skills.7136af6b.js","_app/immutable/chunks/types.1ebf2f37.js","_app/immutable/chunks/app.24ab8b05.js","_app/immutable/chunks/CardLogo.d328c2ce.js","_app/immutable/chunks/Banner.f8a44530.js","_app/immutable/chunks/TabTitle.caadad9f.js","_app/immutable/chunks/Chip.5c5fc256.js","_app/immutable/chunks/CardDivider.927ca8d3.js"];
export const stylesheets = ["_app/immutable/assets/Banner.79dec521.css"];
export const fonts = [];
