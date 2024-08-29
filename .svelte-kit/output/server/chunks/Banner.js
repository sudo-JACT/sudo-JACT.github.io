import { c as create_ssr_component, a as add_attribute, e as escape } from "./ssr.js";
import "marked-gfm-heading-id";
import "marked-mangle";
import "prismjs";
import "dompurify";
import "marked";
import "prismjs/components/prism-typescript.js";
import { n as null_to_empty } from "./utils.js";
const prismTomorrow = "";
const Markdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let container;
  let { content } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  return `<div class="markdown-container"${add_attribute("this", container, 0)}></div>`;
});
const Banner_svelte_svelte_type_style_lang = "";
const css = {
  code: ".skill-cover.svelte-1lxhlqn{background:linear-gradient(90deg, var(--main) 0%, var(--main) 55%, var(--main-60) 130%), no-repeat 110% 45%/50% var(--bg-img);border-block-end:1px solid var(--border)}",
  map: null
};
const Banner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { img = "" } = $$props;
  let { useDefaultDimensions = true } = $$props;
  let { classes = "" } = $$props;
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.useDefaultDimensions === void 0 && $$bindings.useDefaultDimensions && useDefaultDimensions !== void 0)
    $$bindings.useDefaultDimensions(useDefaultDimensions);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  $$result.css.add(css);
  return `<div${add_attribute("style", `--bg-img:url(${img})`, 0)} class="${escape(
    null_to_empty(`row w-[100%] ${useDefaultDimensions ? "min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[350px] px-4 md:px-10" : ""} items-center skill-cover  ${classes}`),
    true
  ) + " svelte-1lxhlqn"}"><div class="p-x-2 col flex-1">${slots.default ? slots.default({}) : ``}</div> </div>`;
});
export {
  Banner as B,
  Markdown as M
};
