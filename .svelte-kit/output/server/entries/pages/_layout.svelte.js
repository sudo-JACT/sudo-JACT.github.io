import { s as subscribe, n as null_to_empty } from "../../chunks/utils.js";
import { c as create_ssr_component, a as add_attribute, v as validate_component, e as escape, b as each } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { t as theme } from "../../chunks/assets.js";
import { n as name, l as lastName } from "../../chunks/home.js";
import { b as base } from "../../chunks/paths.js";
import { U as UIcon } from "../../chunks/UIcon.js";
const __uno = "";
const items = [
  { title: "Skills", to: "/skills", icon: "i-carbon-software-resource-cluster" },
  { title: "Projects", to: "/projects", icon: "i-carbon-cube" },
  { title: "Experience", to: "/experience", icon: "i-carbon-development" },
  { title: "Education", to: "/education", icon: "i-carbon-education" },
  { title: "Resumé", to: "/resume", icon: "i-carbon-result" }
];
const NavMenu_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".nav-menu.svelte-jdc7ud{display:flex;justify-content:center;position:sticky;top:0px;z-index:10;padding:0px 10px;height:50px;border-bottom:1px solid var(--secondary);background-color:var(--main)}.nav-menu-item.svelte-jdc7ud{text-decoration:none;font-weight:400;padding:10px 20px;color:inherit;display:flex;align-items:center;border-bottom:3px solid transparent}.nav-menu-item-label.svelte-jdc7ud{margin-left:10px}@media(max-width: 950px){.nav-menu-item-label.svelte-jdc7ud{display:none}}.nav-menu-item.svelte-jdc7ud:hover{background-color:var(--main-hover)}.nav-menu-mobile.svelte-jdc7ud{z-index:-1;max-height:calc(100vh - 50px - 1px);min-height:calc(100vh - 50px - 1px);width:100%;position:absolute;background-color:var(--main);top:51px;transform:translateY(-100vh);transition-property:transform opacity;transition:400ms ease;opacity:0}.nav-menu-mobile-open.svelte-jdc7ud{opacity:1;transform:translateY(0vh)}",
  map: null
};
const NavMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$result.css.add(css$1);
  $page.url.pathname;
  $$unsubscribe_page();
  $$unsubscribe_theme();
  return `<div class="nav-menu svelte-jdc7ud"><nav class="container flex flex-row items-center text-sm"><a${add_attribute("href", `${base}/`, 0)} class="nav-menu-left decoration-none w-auto md:w-150px lg:w-auto row flex flex-row items-center cursor-pointer px-4 text-[var(--secondary-text)] self-stretch hover:bg-[color:var(--main-hover)]">${validate_component(UIcon, "UIcon").$$render(
    $$result,
    {
      icon: "i-carbon-code",
      classes: "text-2em"
    },
    {},
    {}
  )} <span class="ml-2 text-md font-bold hidden md:inline overflow-hidden whitespace-nowrap text-ellipsis">${escape("π")}</span></a> <div class="flex-1 block overflow-hidden md:hidden whitespace-nowrap text-ellipsis text-center">${escape(name)} ${escape(lastName)}</div> <div class="flex-row flex-1 self-center h-full justify-center hidden md:flex">${each(items, (item) => {
    return `<a${add_attribute("href", `${base}${item.to}`, 0)} class="nav-menu-item !text-[var(--secondary-text)] svelte-jdc7ud">${validate_component(UIcon, "UIcon").$$render($$result, { icon: item.icon, classes: "text-1.3em" }, {}, {})} <span class="nav-menu-item-label svelte-jdc7ud">${escape(item.title)}</span> </a>`;
  })}</div> <div class="row h-full justify-center items-stretch m-l-auto md:m-l-0 w-auto md:w-150px gap-1 text-1.15em"><div class="row hidden md:flex"><a${add_attribute("href", `${base}/search`, 0)} class="text-inherit col-center self-stretch px-2 hover:bg-[color:var(--main-hover)]">${validate_component(UIcon, "UIcon").$$render($$result, { icon: "i-carbon-search" }, {}, {})}</a> <button class="bg-transparent text-1em border-none cursor-pointer hover:bg-[color:var(--main-hover)] text-[var(--secondary-text)] px-2">${$theme ? `${validate_component(UIcon, "UIcon").$$render($$result, { icon: "i-carbon-moon" }, {}, {})}` : `${validate_component(UIcon, "UIcon").$$render($$result, { icon: "i-carbon-sun" }, {}, {})}`}</button></div> <div class="col-center md:hidden h-full hover:bg-[var(--main-hover)] cursor-pointer"> <div class="${escape(null_to_empty(`nav-bar-mobile-btn col-center ${""}`), true) + " svelte-jdc7ud"}"></div></div></div></nav> <div class="${escape(null_to_empty(`nav-menu-mobile ${""} md:hidden`), true) + " svelte-jdc7ud"}"><div class="flex-col flex-1 self-center h-full justify-center m-t-7">${each(items, (item) => {
    return `<a${add_attribute("href", `${base}${item.to}`, 0)} class="nav-menu-item !text-[var(--secondary-text)] gap-5 svelte-jdc7ud">${validate_component(UIcon, "UIcon").$$render($$result, { icon: item.icon, classes: "text-1.3em" }, {}, {})} <span class="">${escape(item.title)}</span> </a>`;
  })}</div> <div class="col gap-2 m-t-7"><a${add_attribute("href", `${base}/search`, 0)} class="text-inherit decoration-none px-6 py-3 gap-2 row hover:bg-[color:var(--main-hover)]">${validate_component(UIcon, "UIcon").$$render($$result, { icon: "i-carbon-search" }, {}, {})} <span data-svelte-h="svelte-iecwuy">Search</span></a> <button class="bg-transparent text-1em border-none cursor-pointer px-6 py-3 gap-2 row hover:bg-[color:var(--main-hover)] text-[var(--secondary-text)] px-2">${$theme ? `${validate_component(UIcon, "UIcon").$$render($$result, { icon: "i-carbon-moon" }, {}, {})} <span data-svelte-h="svelte-xjyztj">Dark Theme</span>` : `${validate_component(UIcon, "UIcon").$$render($$result, { icon: "i-carbon-sun" }, {}, {})} <span data-svelte-h="svelte-17bcq4p">Light Theme</span>`}</button></div></div> </div>`;
});
const index = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".content.svelte-mb6t29{display:flex;flex-direction:column;flex:1;padding:0px 0px}.body.svelte-mb6t29{margin:0px;background-color:var(--main);color:var(--main-text);font-family:var(--text-f);display:flex;flex-direction:column;transition-duration:200ms;letter-spacing:1px;min-height:100vh}p{margin:0px}h1, h2, h3, h4, h5, h6{margin:5px 0px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$result.css.add(css);
  $$unsubscribe_theme();
  return `<div class="${escape(null_to_empty(`body contents ${$theme ? "theme-dark" : "theme-light"}`), true) + " svelte-mb6t29"}">${validate_component(NavMenu, "NavMenu").$$render($$result, {}, {}, {})} <div class="content container svelte-mb6t29">${slots.default ? slots.default({}) : ``}</div> </div>`;
});
export {
  Layout as default
};
