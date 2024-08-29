import { c as create_ssr_component, a as add_attribute } from "./ssr.js";
import { i as is_void } from "./names.js";
const Chip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let className;
  let el;
  let { active = false } = $$props;
  let { size = "auto" } = $$props;
  let { classes = "" } = $$props;
  let { href = "" } = $$props;
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  className = `row-center cursor-pointer py-[5px] px-[15px] m-[2.5px] decoration-none inline-block border-[1px] border-solid border-[var(--border)] rounded-[20px] tracking-wider text-[0.9em] text-[var(--tertiary-text)] duration-[150ms] font-light  ${active ? "bg-[var(--accent)] hover:bg-[var(--accent-hover)]" : "bg-transparent hover:bg-[var(--main-hover)]"} ${classes}`;
  return ` ${((tag) => {
    return tag ? `<${href ? "a" : "button"}${add_attribute("href", href, 0)}${add_attribute("class", className, 0)}${add_attribute("this", el, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "button")}`;
});
export {
  Chip as C
};
