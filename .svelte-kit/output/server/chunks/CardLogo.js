import { c as create_ssr_component, a as add_attribute } from "./ssr.js";
const CardLogo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt } = $$props;
  let { size = 50 } = $$props;
  let { radius = "15px" } = $$props;
  let { classes = "" } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.radius === void 0 && $$bindings.radius && radius !== void 0)
    $$bindings.radius(radius);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  return `<img${add_attribute("class", `rounded-${radius} ${classes} aspect-square`, 0)}${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)}${add_attribute("height", size, 0)}${add_attribute("width", size, 0)}>`;
});
export {
  CardLogo as C
};
