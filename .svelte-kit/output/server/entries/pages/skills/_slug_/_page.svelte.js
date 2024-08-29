import { c as create_ssr_component, v as validate_component, e as escape, b as each } from "../../../../chunks/ssr.js";
import { t as title } from "../../../../chunks/skills.js";
import { i as items } from "../../../../chunks/projects.js";
import { i as items$1 } from "../../../../chunks/experience.js";
import { b as base } from "../../../../chunks/paths.js";
import { g as getAssetURL } from "../../../../chunks/assets.js";
import { M as MainTitle } from "../../../../chunks/app.js";
import { C as CardDivider } from "../../../../chunks/CardDivider.js";
import { C as CardLogo } from "../../../../chunks/CardLogo.js";
import { B as Banner, M as Markdown } from "../../../../chunks/Banner.js";
import { T as TabTitle } from "../../../../chunks/TabTitle.js";
import { C as Chip } from "../../../../chunks/Chip.js";
import { U as UIcon } from "../../../../chunks/UIcon.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let computedTitle;
  let related;
  let { data } = $$props;
  const getRelatedProjects = () => {
    const out = [];
    const skill = data.skill;
    if (!skill) {
      return [];
    }
    items.forEach((item) => {
      if (item.skills.some((tech) => tech.slug === skill.slug)) {
        out.push({
          img: getAssetURL(item.logo),
          display: `${item.name} (${item.type})`,
          name: item.name,
          type: "projects",
          url: `/projects/${item.slug}`
        });
      }
    });
    items$1.forEach((item) => {
      if (item.skills.some((tech) => tech.slug === skill.slug)) {
        out.push({
          img: getAssetURL(item.logo),
          display: `${item.name} @ ${item.company}`,
          name: item.name,
          type: "experience",
          url: `/experience/${item.slug}`
        });
      }
    });
    return out;
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  computedTitle = data.skill ? `${data.skill.name} - ${title}` : title;
  related = data.skill ? getRelatedProjects() : [];
  return `${validate_component(TabTitle, "TabTitle").$$render($$result, { title: computedTitle }, {}, {})} <div class="pb-10 overflow-x-hidden col flex-1">${data.skill === void 0 ? `<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]">${validate_component(UIcon, "UIcon").$$render(
    $$result,
    {
      icon: "i-carbon-software-resource-cluster",
      classes: "text-3.5em"
    },
    {},
    {}
  )} <p class="font-300" data-svelte-h="svelte-o70gx3">Could not load skill data.</p></div>` : `<div class="flex flex-col items-center overflow-x-hidden">${validate_component(Banner, "Banner").$$render($$result, { img: getAssetURL(data.skill.logo) }, {}, {
    default: () => {
      return `${validate_component(MainTitle, "MainTitle").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(data.skill.name)}`;
        }
      })}`;
    }
  })} <div class="pt-3 pb-1 overflow-x-hidden w-full"><div class="px-10px m-y-5">${data.skill.description ? `${validate_component(Markdown, "Markdown").$$render(
    $$result,
    {
      content: data.skill.description ?? "This place is yet to be filled..."
    },
    {},
    {}
  )}` : `<div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">${validate_component(UIcon, "UIcon").$$render(
    $$result,
    {
      icon: "i-carbon-text-font",
      classes: "text-3.5em"
    },
    {},
    {}
  )} <p class="font-300" data-svelte-h="svelte-1ugej71">No description</p></div>`}</div></div> <div class="self-stretch mb-2">${validate_component(CardDivider, "CardDivider").$$render($$result, {}, {}, {})}</div> <div class="flex flex-row gap-1 self-stretch flex-wrap "><div class="px-10px">${each(related, (item) => {
    return `${validate_component(Chip, "Chip").$$render(
      $$result,
      {
        classes: "inline-flex flex-row items-center justify-center",
        href: `${base}${item.url}`
      },
      {},
      {
        default: () => {
          return `${validate_component(CardLogo, "CardLogo").$$render(
            $$result,
            {
              src: item.img,
              alt: item.name,
              radius: "0px",
              size: 15,
              classes: "mr-2"
            },
            {},
            {}
          )} <span class="text-[0.9em]">${escape(item.display)}</span> `;
        }
      }
    )}`;
  })}</div></div></div>`}</div>`;
});
export {
  Page as default
};
