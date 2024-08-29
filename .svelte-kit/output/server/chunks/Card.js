import { n as null_to_empty } from "./utils.js";
import { c as create_ssr_component, a as add_attribute, e as escape, d as add_styles } from "./ssr.js";
import { i as is_void } from "./names.js";
import { isHexColor, changeColorOpacity } from "@riadh-adrani/utils";
const NAMED_COLORS = {
  aliceblue: "#F0F8FF",
  antiquewhite: "#FAEBD7",
  aqua: "#00FFFF",
  aquamarine: "#7FFFD4",
  azure: "#F0FFFF",
  beige: "#F5F5DC",
  bisque: "#FFE4C4",
  black: "#000000",
  blanchedalmond: "#FFEBCD",
  blue: "#0000FF",
  blueviolet: "#8A2BE2",
  brown: "#A52A2A",
  burlywood: "#DEB887",
  cadetblue: "#5F9EA0",
  chartreuse: "#7FFF00",
  chocolate: "#D2691E",
  coral: "#FF7F50",
  cornflowerblue: "#6495ED",
  cornsilk: "#FFF8DC",
  crimson: "#DC143C",
  cyan: "#00FFFF",
  darkblue: "#00008B",
  darkcyan: "#008B8B",
  darkgoldenrod: "#B8860B",
  darkgray: "#A9A9A9",
  darkgreen: "#006400",
  darkgrey: "#A9A9A9",
  darkkhaki: "#BDB76B",
  darkmagenta: "#8B008B",
  darkolivegreen: "#556B2F",
  darkorange: "#FF8C00",
  darkorchid: "#9932CC",
  darkred: "#8B0000",
  darksalmon: "#E9967A",
  darkseagreen: "#8FBC8F",
  darkslateblue: "#483D8B",
  darkslategray: "#2F4F4F",
  darkslategrey: "#2F4F4F",
  darkturquoise: "#00CED1",
  darkviolet: "#9400D3",
  deeppink: "#FF1493",
  deepskyblue: "#00BFFF",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1E90FF",
  firebrick: "#B22222",
  floralwhite: "#FFFAF0",
  forestgreen: "#228B22",
  fuchsia: "#FF00FF",
  gainsboro: "#DCDCDC",
  ghostwhite: "#F8F8FF",
  gold: "#FFD700",
  goldenrod: "#DAA520",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#ADFF2F",
  grey: "#808080",
  honeydew: "#F0FFF0",
  hotpink: "#FF69B4",
  indianred: "#CD5C5C",
  indigo: "#4B0082",
  ivory: "#FFFFF0",
  khaki: "#F0E68C",
  lavender: "#E6E6FA",
  lavenderblush: "#FFF0F5",
  lawngreen: "#7CFC00",
  lemonchiffon: "#FFFACD",
  lightblue: "#ADD8E6",
  lightcoral: "#F08080",
  lightcyan: "#E0FFFF",
  lightgoldenrodyellow: "#FAFAD2",
  lightgray: "#D3D3D3",
  lightgreen: "#90EE90",
  lightgrey: "#D3D3D3",
  lightpink: "#FFB6C1",
  lightsalmon: "#FFA07A",
  lightseagreen: "#20B2AA",
  lightskyblue: "#87CEFA",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#B0C4DE",
  lightyellow: "#FFFFE0",
  lime: "#00FF00",
  limegreen: "#32CD32",
  linen: "#FAF0E6",
  magenta: "#FF00FF",
  maroon: "#800000",
  mediumaquamarine: "#66CDAA",
  mediumblue: "#0000CD",
  mediumorchid: "#BA55D3",
  mediumpurple: "#9370DB",
  mediumseagreen: "#3CB371",
  mediumslateblue: "#7B68EE",
  mediumspringgreen: "#00FA9A",
  mediumturquoise: "#48D1CC",
  mediumvioletred: "#C71585",
  midnightblue: "#191970",
  mintcream: "#F5FFFA",
  mistyrose: "#FFE4E1",
  moccasin: "#FFE4B5",
  navajowhite: "#FFDEAD",
  navy: "#000080",
  oldlace: "#FDF5E6",
  olive: "#808000",
  olivedrab: "#6B8E23",
  orange: "#FFA500",
  orangered: "#FF4500",
  orchid: "#DA70D6",
  palegoldenrod: "#EEE8AA",
  palegreen: "#98FB98",
  paleturquoise: "#AFEEEE",
  palevioletred: "#DB7093",
  papayawhip: "#FFEFD5",
  peachpuff: "#FFDAB9",
  peru: "#CD853F",
  pink: "#FFC0CB",
  plum: "#DDA0DD",
  powderblue: "#B0E0E6",
  purple: "#800080",
  red: "#FF0000",
  rosybrown: "#BC8F8F",
  royalblue: "#4169E1",
  saddlebrown: "#8B4513",
  salmon: "#FA8072",
  sandybrown: "#F4A460",
  seagreen: "#2E8B57",
  seashell: "#FFF5EE",
  sienna: "#A0522D",
  silver: "#C0C0C0",
  skyblue: "#87CEEB",
  slateblue: "#6A5ACD",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#FFFAFA",
  springgreen: "#00FF7F",
  steelblue: "#4682B4",
  tan: "#D2B48C",
  teal: "#008080",
  thistle: "#D8BFD8",
  tomato: "#FF6347",
  turquoise: "#40E0D0",
  violet: "#EE82EE",
  wheat: "#F5DEB3",
  white: "#FFFFFF",
  whitesmoke: "#F5F5F5",
  yellow: "#FFFF00",
  yellowgreen: "#9ACD32"
};
const convertNamedToHexColor = (name) => {
  const color = NAMED_COLORS[name];
  if (!color) {
    return NAMED_COLORS.white;
  }
  return color;
};
const Card_svelte_svelte_type_style_lang = "";
const css = {
  code: ".card.svelte-1441skb{--border-color:transparent;--bg-color:transparent;--drop-color:transparent;--bg-img:url();--drop-x:0;--drop-y:0;--rot-x:0;--rot-y:0;background:linear-gradient(90deg, var(--main) 0%, var(--main) 60%, var(--main-60) 100%), no-repeat right 40%/40% var(--bg-img)}.card-bg-img.svelte-1441skb:hover{background-color:var(--bg-color);background-image:radial-gradient(circle at var(--drop-x) var(--drop-y), var(--drop-color), transparent)}.card.svelte-1441skb:hover{transform:perspective(1000px) rotateX(var(--rot-x)) rotateY(var(--rot-y)) scale(1.01);border-color:var(--border-hover)}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let computedColor;
  let el;
  let { color = "#ffffff00" } = $$props;
  let { margin = "0px" } = $$props;
  let { tiltDegree = 5 } = $$props;
  let { classes = [] } = $$props;
  let { href = void 0 } = $$props;
  let { bgImg = void 0 } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.margin === void 0 && $$bindings.margin && margin !== void 0)
    $$bindings.margin(margin);
  if ($$props.tiltDegree === void 0 && $$bindings.tiltDegree && tiltDegree !== void 0)
    $$bindings.tiltDegree(tiltDegree);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.bgImg === void 0 && $$bindings.bgImg && bgImg !== void 0)
    $$bindings.bgImg(bgImg);
  $$result.css.add(css);
  computedColor = isHexColor(color) ? color : convertNamedToHexColor(color);
  changeColorOpacity(computedColor, 0.5);
  changeColorOpacity(computedColor, 0.15);
  changeColorOpacity(computedColor, 0.01);
  return ` ${((tag) => {
    return tag ? `<${href ? "a" : "div"}${add_attribute("href", href, 0)} class="${escape(null_to_empty(`card text-inherit decoration-none inline-flex flex-col border-1px border-solid border-[var(--border)] rounded-15px duration relative ${classes.join(" ")}`), true) + " svelte-1441skb"}"${add_styles({ "bgColor": "red" })}${add_attribute("this", el, 0)}>${is_void(tag) ? "" : `<div class="card-bg-img flex-1 flex flex-col p-25px rounded-15px svelte-1441skb">${slots.default ? slots.default({}) : ``}</div> `}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "div")}`;
});
export {
  Card as C
};
