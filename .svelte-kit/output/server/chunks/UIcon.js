import { c as create_ssr_component, a as add_attribute } from "./ssr.js";
const UIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon = void 0 } = $$props;
  let { classes = "" } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  return `<i${add_attribute("class", `${icon} ${classes}`, 0)}></i>`;
});
export {
  UIcon as U
};
