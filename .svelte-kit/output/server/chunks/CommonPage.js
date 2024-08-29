import { c as create_ssr_component, v as validate_component, e as escape } from "./ssr.js";
import { M as MainTitle } from "./app.js";
import { T as TabTitle } from "./TabTitle.js";
const CommonPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Title" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(TabTitle, "TabTitle").$$render(
      $$result,
      { title },
      {
        title: ($$value) => {
          title = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="flex-1 col gap-5 px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-12">${validate_component(MainTitle, "MainTitle").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(title)}`;
      }
    })} <div class="col gap-5 flex-1">${slots.default ? slots.default({}) : ``}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  CommonPage as C
};
