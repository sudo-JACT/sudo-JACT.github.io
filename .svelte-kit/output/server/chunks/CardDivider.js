import { c as create_ssr_component } from "./ssr.js";
const CardDivider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="bg-[var(--border)] h-1px m-y-10px"></div>`;
});
export {
  CardDivider as C
};
