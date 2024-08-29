

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/skills/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.b18078c5.js","_app/immutable/chunks/scheduler.98dcdc08.js","_app/immutable/chunks/index.bc2cb9f6.js","_app/immutable/chunks/UIcon.2475e4f7.js","_app/immutable/chunks/paths.b8857b6a.js","_app/immutable/chunks/skills.7136af6b.js","_app/immutable/chunks/SearchPage.ad74319b.js","_app/immutable/chunks/CommonPage.9029bce1.js","_app/immutable/chunks/app.24ab8b05.js","_app/immutable/chunks/TabTitle.caadad9f.js","_app/immutable/chunks/stores.645ff862.js","_app/immutable/chunks/singletons.4c817702.js","_app/immutable/chunks/Card.993dcae8.js","_app/immutable/chunks/index.90a5d2f7.js"];
export const stylesheets = ["_app/immutable/assets/SearchPage.d63b558a.css","_app/immutable/assets/Card.7a6abfc5.css"];
export const fonts = [];
