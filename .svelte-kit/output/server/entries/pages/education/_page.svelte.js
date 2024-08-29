import { c as create_ssr_component, v as validate_component, b as each, a as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { C as Card } from "../../../chunks/Card.js";
import { C as Chip } from "../../../chunks/Chip.js";
import { U as UIcon } from "../../../chunks/UIcon.js";
import { S as SearchPage } from "../../../chunks/SearchPage.js";
import { A as Assets, g as getAssetURL } from "../../../chunks/assets.js";
import { c as computeExactDuration } from "../../../chunks/app.js";
import { C as CardDivider } from "../../../chunks/CardDivider.js";
const items = [
  {
    degree: "IT expert",
    description: "",
    location: "Italy",
    logo: Assets.Mattei,
    name: "",
    organization: "I.I.S.S. Enrico Mattei",
    period: { from: new Date(2019, 9, 14), to: new Date(2024, 7, 2) },
    shortDescription: "",
    slug: "dummy-education-item",
    subjects: ["C", "Algorithm", "Algebra", "Python", "C++", "Java", "English (B2 level)", "Telecommunications", "Rest Paradigm", "Blockchains Technology", "PHP", "SQL", "HTML", "CSS", "JS"]
  },
  {
    degree: "PhD of Computer Science",
    description: "",
    location: "USA",
    logo: Assets.Unknown,
    name: "",
    organization: "MIT",
    period: { from: new Date(2023, 0, 1) },
    shortDescription: "",
    slug: "dummy-education-item-2",
    subjects: ["Assembly", "Rust", "Computer Architecture", "Algorithms and Data structures"]
  }
];
const title = "Education";
let search = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let result = items;
  return `${validate_component(SearchPage, "SearchPage").$$render($$result, { title, search }, {}, {
    default: () => {
      return `<div class="col items-center relative mt-10 flex-1">${result.length === 0 ? `<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">${validate_component(UIcon, "UIcon").$$render(
        $$result,
        {
          icon: "i-carbon-development",
          classes: "text-3.5em"
        },
        {},
        {}
      )} <p class="font-300" data-svelte-h="svelte-1jyyf6v">Could not find anything...</p></div>` : `<div class="w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded"></div> ${each(result, (education, index) => {
        return `<div${add_attribute("class", `flex ${index % 2 !== 0 ? "flex-row" : "flex-row-reverse"} relative items-center w-full my-[10px]`, 0)}><div class="flex-1 hidden lg:flex"></div> <div class="hidden lg:inline p-15px bg-[var(--main)] rounded">${validate_component(UIcon, "UIcon").$$render($$result, { icon: "i-carbon-condition-point" }, {}, {})}</div> <div class="col flex-1 items-stretch">${validate_component(Card, "Card").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="flex-1 col gap-2 items-stretch"><img${add_attribute("src", getAssetURL(education.logo), 0)}${add_attribute("alt", education.organization, 0)} height="50" width="50" class="mb-5"> <div class="text-[1.3em]">${escape(education.degree)}</div> <div>${escape(education.organization)}</div> <div class="col text-[0.9em]">${validate_component(CardDivider, "CardDivider").$$render($$result, {}, {}, {})} <div class="row items-center gap-2">${validate_component(UIcon, "UIcon").$$render($$result, { icon: "i-carbon-location" }, {}, {})} ${escape(education.location)}</div> ${validate_component(CardDivider, "CardDivider").$$render($$result, {}, {}, {})} <div class="row items-center gap-2">${validate_component(UIcon, "UIcon").$$render($$result, { icon: "i-carbon-time" }, {}, {})} ${escape(computeExactDuration(education.period.from, education.period.to))}</div> ${validate_component(CardDivider, "CardDivider").$$render($$result, {}, {}, {})}</div> <div class="row flex-wrap gap-1">${each(education.subjects, (subject) => {
              return `${validate_component(Chip, "Chip").$$render($$result, {}, {}, {
                default: () => {
                  return `${escape(subject)}`;
                }
              })}`;
            })} </div></div> `;
          }
        })}</div> </div>`;
      })}`}</div>`;
    }
  })}`;
});
export {
  Page as default
};
