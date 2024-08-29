import { s as subscribe } from "./utils.js";
import { c as create_ssr_component, a as add_attribute, f as createEventDispatcher, v as validate_component } from "./ssr.js";
import { C as CommonPage } from "./CommonPage.js";
import { p as page } from "./stores.js";
const Input_svelte_svelte_type_style_lang = "";
const css = {
  code: "input.svelte-c0g44u:focus{outline:1px solid var(--border-hover);background-color:var(--main-hover)}",
  map: null
};
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value = "" } = $$props;
  let { placeholder = "" } = $$props;
  let inputElement;
  function focus() {
    inputElement.focus();
  }
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
    $$bindings.focus(focus);
  $$result.css.add(css);
  return `<input${add_attribute("placeholder", placeholder, 0)} class="text-[inherit] bg-transparent border-[1px] border-solid border-[var(--border)] px-[20px] py-[10px] rounded-[15px] flex-1 text-[1.15em]  svelte-c0g44u"${add_attribute("this", inputElement, 0)}${add_attribute("value", value, 0)}>`;
});
const SearchPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { title = "Title" } = $$props;
  let { search = "" } = $$props;
  let searchInput;
  const dispatch = createEventDispatcher();
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.search === void 0 && $$bindings.search && search !== void 0)
    $$bindings.search(search);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        dispatch("search", { search: search.trim().toLowerCase() });
      }
    }
    $$rendered = `${validate_component(CommonPage, "CommonPage").$$render($$result, { title }, {}, {
      default: () => {
        return `<div class="w-100% row">${validate_component(Input, "Input").$$render(
          $$result,
          {
            placeholder: "Search...",
            this: searchInput,
            value: search
          },
          {
            this: ($$value) => {
              searchInput = $$value;
              $$settled = false;
            },
            value: ($$value) => {
              search = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div> <div class="w-100% col flex-1">${slots.default ? slots.default({}) : ``}</div>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  SearchPage as S
};
