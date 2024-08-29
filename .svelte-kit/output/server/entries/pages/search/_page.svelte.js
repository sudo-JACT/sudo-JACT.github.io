import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { f as filterItemsByQuery } from "../../../chunks/app.js";
import { i as items$2 } from "../../../chunks/experience.js";
import { i as items } from "../../../chunks/projects.js";
import { i as items$1 } from "../../../chunks/skills.js";
import { S as SearchPage } from "../../../chunks/SearchPage.js";
import { U as UIcon } from "../../../chunks/UIcon.js";
const title = "Search";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let query = "";
  let result = [];
  {
    {
      result = [];
      result.push(...filterItemsByQuery(items, query).map((data) => ({
        data,
        icon: "i-carbon-cube",
        name: data.name,
        to: `projects/${data.slug}`
      })));
      result.push(...filterItemsByQuery(items$1, query).map((data) => ({
        data,
        icon: "i-carbon-software-resource-cluster",
        name: data.name,
        to: `skills/${data.slug}`
      })));
      result.push(...filterItemsByQuery(items$2, query).map((data) => ({
        data,
        icon: "i-carbon-development",
        name: `${data.name} @ ${data.company}`,
        to: `experience/${data.slug}`
      })));
    }
  }
  return `${validate_component(SearchPage, "SearchPage").$$render($$result, { title }, {}, {
    default: () => {
      return `<div class="flex flex-col items-stretch gap-10 p-2"></div> ${`<div class="flex-1 self-center col-center m-t-10 gap-5 font-300 text-[var(--accent-text)]">${validate_component(UIcon, "UIcon").$$render(
        $$result,
        {
          icon: "i-carbon-search-locate-mirror",
          classes: "text-2em"
        },
        {},
        {}
      )} <span data-svelte-h="svelte-16h9bak">Try typing something...</span></div>`}`;
    }
  })}`;
});
export {
  Page as default
};
