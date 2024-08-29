import { c as create_ssr_component, v as validate_component, a as add_attribute, e as escape, b as each } from "../../../../chunks/ssr.js";
import { b as base } from "../../../../chunks/paths.js";
import { g as getAssetURL } from "../../../../chunks/assets.js";
import { t as title } from "../../../../chunks/projects.js";
import { C as CardLogo } from "../../../../chunks/CardLogo.js";
import { M as MainTitle } from "../../../../chunks/app.js";
import { B as Banner, M as Markdown } from "../../../../chunks/Banner.js";
import { T as TabTitle } from "../../../../chunks/TabTitle.js";
import { C as Chip } from "../../../../chunks/Chip.js";
import { U as UIcon } from "../../../../chunks/UIcon.js";
import { C as CardDivider } from "../../../../chunks/CardDivider.js";
const Screenshot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let show;
  let { screenshot = void 0 } = $$props;
  let { onClose = () => {
    screenshot = void 0;
  } } = $$props;
  if ($$props.screenshot === void 0 && $$bindings.screenshot && screenshot !== void 0)
    $$bindings.screenshot(screenshot);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0)
    $$bindings.onClose(onClose);
  show = typeof screenshot !== "undefined";
  return `${show ? ` <div class="fixed inset-0px top-51px bg-[#000000dd] col-center p-50px"> <div class="w-full w-100% md:w-80% lg:w-70% col text-center gap-5 bg-[var(--main)] border-solid border-1px border-[var(--border)] p-5 rounded-xl"><div class="self-end"><button class="cursor-pointer aspect-square rounded-full border-[var(--border)] border-1px bg-[transparent] border-solid hover:border-[var(--border-hover)]">${validate_component(UIcon, "UIcon").$$render($$result, { icon: "i-carbon-close" }, {}, {})}</button></div> <div class="aspect-video col bg-contain w-100% rounded-xl bg-no-repeat bg-contains bg-center"${add_attribute("style", `background-image: url(${screenshot?.src});`, 0)}></div> <p class="font-italic m-t-auto m-x-auto bg-[var(--main-60)] border-solid border-1px border-[var(--border)] p-x-5 p-2 rounded-xl">${escape(screenshot?.label)}</p></div></div>` : ``}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".screenshot.svelte-o4z7e5{background-repeat:no-repeat;background-position:center;background-size:100%;transition:background-size 200ms}.screenshot.svelte-o4z7e5:hover{background-size:120%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let screenshot;
  let computedTitle;
  let { data } = $$props;
  const screenshots = data.project?.screenshots ?? [];
  let screenIndex = void 0;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  screenshot = typeof screenIndex !== "undefined" && screenshots[screenIndex] ? screenshots[screenIndex] : void 0;
  computedTitle = data.project ? `${data.project.name} - ${title}` : title;
  return `${validate_component(TabTitle, "TabTitle").$$render($$result, { title: computedTitle }, {}, {})} <div class="pb-10 overflow-x-hidden col flex-1">${data.project === void 0 ? `<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]">${validate_component(UIcon, "UIcon").$$render(
    $$result,
    {
      icon: "i-carbon-cube",
      classes: "text-3.5em"
    },
    {},
    {}
  )} <p class="font-300" data-svelte-h="svelte-18mwztv">Could not load project data...</p></div>` : `<div class="flex flex-col items-center overflow-x-hidden">${validate_component(Banner, "Banner").$$render($$result, { img: getAssetURL(data.project.logo) }, {}, {
    default: () => {
      return `<div class="col-center p-y-20"><div class="text-0.9em">${validate_component(MainTitle, "MainTitle").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(data.project.name)}`;
        }
      })}</div> <p class="font-300 text-center text-[var(--tertiary-text)] m-y-2">${escape(data.project.type)}</p> <div class="w-75%">${validate_component(CardDivider, "CardDivider").$$render($$result, {}, {}, {})}</div> <div class="row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2">${each(data.project.links, (item) => {
        return `${validate_component(Chip, "Chip").$$render($$result, { href: item.to }, {}, {
          default: () => {
            return `<div class="row-center gap-2">${validate_component(UIcon, "UIcon").$$render($$result, { icon: "i-carbon-link" }, {}, {})} <span>${escape(item.label)}</span></div> `;
          }
        })}`;
      })}</div> <div class="row-center flex-wrap m-b-2">${each(data.project.skills, (item) => {
        return `${validate_component(Chip, "Chip").$$render(
          $$result,
          {
            classes: "inline-flex flex-row items-center justify-center",
            href: `${base}/skills/${item.slug}`
          },
          {},
          {
            default: () => {
              return `${validate_component(CardLogo, "CardLogo").$$render(
                $$result,
                {
                  src: getAssetURL(item.logo),
                  alt: item.name,
                  radius: "0px",
                  size: 15,
                  classes: "mr-2"
                },
                {},
                {}
              )} <span class="text-[0.9em]">${escape(item.name)}</span> `;
            }
          }
        )}`;
      })}</div></div>`;
    }
  })} <div class="pt-3 pb-1 overflow-x-hidden w-full"><div class="px-10px m-y-5">${data.project.description ? `${validate_component(Markdown, "Markdown").$$render($$result, { content: data.project.description }, {}, {})}` : `<div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">${validate_component(UIcon, "UIcon").$$render(
    $$result,
    {
      icon: "i-carbon-text-font",
      classes: "text-3.5em"
    },
    {},
    {}
  )} <p class="font-300" data-svelte-h="svelte-1ugej71">No description</p></div>`}</div> <div class="w-100% m-t-8">${validate_component(CardDivider, "CardDivider").$$render($$result, {}, {}, {})}</div> ${screenshots.length > 0 ? `<div class="px-10px grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-t-10 ">${each(screenshots, (item, index) => {
    return ` <div class="col-center gap-3 overflow-hidden w-100% h-100% rounded-10px"><div class="screenshot aspect-video bg-contain w-100% cursor-pointer svelte-o4z7e5"${add_attribute("style", `background-image: url(${item.src});`, 0)}></div> <p class="text-[var(--tertiary-text)] font-300">${escape(item.label)}</p> </div>`;
  })}</div>` : `<div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">${validate_component(UIcon, "UIcon").$$render(
    $$result,
    {
      icon: "i-carbon-image",
      classes: "text-3.5em"
    },
    {},
    {}
  )} <p class="font-300" data-svelte-h="svelte-s36p3y">No screenshots</p></div>`}</div></div>`}</div> ${validate_component(Screenshot, "Screenshot").$$render(
    $$result,
    {
      screenshot,
      onClose: () => screenIndex = void 0
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
