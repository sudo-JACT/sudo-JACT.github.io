import { c as create_ssr_component, e as escape } from "./ssr.js";
import { u as useTitle, t as titleSuffix } from "./app.js";
const TabTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `${$$result.head += `<!-- HEAD_svelte-1tippc1_START -->${$$result.title = `<title>${escape(useTitle(title, titleSuffix))}</title>`, ""}<!-- HEAD_svelte-1tippc1_END -->`, ""}`;
});
export {
  TabTitle as T
};
