import { c as create_ssr_component, e as escape, a as add_attribute } from "./ssr.js";
import { s as subscribe, n as null_to_empty, c as compute_slots } from "./utils.js";
import { i as is_void } from "./names.js";
import { t as theme } from "./assets.js";
const CardTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<h3 class="font-[var(--title-f)] text-1.25em">${escape(title)}</h3>`;
});
const ChipIcon_svelte_svelte_type_style_lang = "";
const css = {
  code: ".chip-icon.svelte-1m94jop:hover{border-color:var(--border-hover)}.chip-icon.svelte-1m94jop:hover:hover:after{content:attr(data-help);display:inline-block;position:absolute;width:max-content;background-color:var(--secondary);padding:5px 10px;left:10px;top:calc(100% + 0px);border:1px solid var(--border);border-radius:15px}.chip-icon-logo.svelte-1m94jop{height:15px;width:15px}.chip-icon-logo-inverted.svelte-1m94jop{filter:invert(100)}",
  map: null
};
const ChipIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  let { name = "" } = $$props;
  let { logo = "" } = $$props;
  let { inverted = false } = $$props;
  let { grayscale = true } = $$props;
  let { href = void 0 } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.logo === void 0 && $$bindings.logo && logo !== void 0)
    $$bindings.logo(logo);
  if ($$props.inverted === void 0 && $$bindings.inverted && inverted !== void 0)
    $$bindings.inverted(inverted);
  if ($$props.grayscale === void 0 && $$bindings.grayscale && grayscale !== void 0)
    $$bindings.grayscale(grayscale);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  $$result.css.add(css);
  $$unsubscribe_theme();
  return `${((tag) => {
    return tag ? `<${href ? "a" : "div"}${add_attribute("href", href, 0)} class="${escape(null_to_empty(`chip-icon row-center relative text-inherit decoration-none p-10px m-r-5px m-b-5px border-1px border-solid border-[var(--border)] hover:border-[var(--border-hover)] rounded-10px hover:z-5 ${href ? "cursor-pointer" : "cursor-help"} ${grayscale ? "grayscale-65 hover:grayscale-0" : ""}`), true) + " svelte-1m94jop"}"${add_attribute("data-help", name, 0)}>${is_void(tag) ? "" : `${$$slots.default ? `${slots.default ? slots.default({}) : ``}` : `<img class="${[
      escape(null_to_empty(`w-15px h-15px ${inverted ? "invert-100" : ""}`), true) + " svelte-1m94jop",
      $theme && inverted ? "chip-icon-logo-inverted" : ""
    ].join(" ").trim()}"${add_attribute("src", logo, 0)}${add_attribute("alt", name, 0)}>`} `}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "div")}`;
});
export {
  CardTitle as C,
  ChipIcon as a
};
