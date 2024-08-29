import { A as Assets } from "./assets.js";
import { omit } from "@riadh-adrani/utils";
const svelte = "# Svelte\n\n---\n\n[`Svelte`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.\n\nThe compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.\n\n<br/>\n\nSvelte is :\n\n- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.\n- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.\n- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.\n\n<br/>\n\n## Example\n\n```ts\n<script>\n    let count = 1;\n    $: doubled = count * 2;\n<\/script>\n\n<p>{count} * 2 = {doubled}</p>\n\n<button on:click={() => count = count + 1}>Count</button>\n```\n\n### Heading 3\n\n#### Heading 4\n\n##### Heading 5\n\n###### Heading 6\n\n> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.\n";
const defineSkillCategory = (data) => data;
const categories = [
  defineSkillCategory({ name: "Programming Languages", slug: "pro-lang" }),
  defineSkillCategory({ name: "Frameworks", slug: "framework" }),
  defineSkillCategory({ name: "Libraries", slug: "library" }),
  defineSkillCategory({ name: "Langauges", slug: "lang" }),
  defineSkillCategory({ name: "Databases", slug: "db" }),
  defineSkillCategory({ name: "ORMs", slug: "orm" }),
  defineSkillCategory({ name: "DevOps", slug: "devops" }),
  defineSkillCategory({ name: "Testing", slug: "test" }),
  defineSkillCategory({ name: "Dev Tools", slug: "devtools" }),
  defineSkillCategory({ name: "Markup & Style", slug: "markup-style" }),
  defineSkillCategory({ name: "Design", slug: "design" }),
  defineSkillCategory({ name: "Soft Skills", slug: "soft" })
];
const defineSkill = (skill) => {
  const out = omit(skill, "category");
  if (skill.category) {
    out.category = categories.find((it) => it.slug === skill.category);
  }
  return out;
};
const items = [
  defineSkill({
    slug: "js",
    color: "yellow",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",
    logo: Assets.JavaScript,
    name: "Javascript",
    category: "pro-lang"
  }),
  defineSkill({
    slug: "ts",
    color: "blue",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",
    logo: Assets.TypeScript,
    name: "Typescript",
    category: "pro-lang"
  }),
  defineSkill({
    slug: "css",
    color: "blue",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",
    logo: Assets.CSS,
    name: "CSS",
    category: "markup-style"
  }),
  defineSkill({
    slug: "html",
    color: "orange",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",
    logo: Assets.HTML,
    name: "HTML",
    category: "markup-style"
  }),
  defineSkill({
    slug: "sass",
    color: "pink",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",
    logo: Assets.Sass,
    name: "Sass",
    category: "markup-style"
  }),
  defineSkill({
    slug: "reactjs",
    color: "cyan",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",
    logo: Assets.ReactJs,
    name: "React Js",
    category: "library"
  }),
  defineSkill({
    slug: "svelte",
    color: "orange",
    description: svelte,
    logo: Assets.Svelte,
    name: "Svelte",
    category: "library"
  })
];
const title = "Skills";
const getSkills = (...slugs) => items.filter((it) => slugs.includes(it.slug));
const groupByCategory = (query) => {
  const out = [];
  const others = [];
  items.forEach((item) => {
    if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase()))
      return;
    if (!item.category) {
      others.push(item);
      return;
    }
    let category = out.find((it) => it.category.slug === item.category?.slug);
    if (!category) {
      category = { items: [], category: item.category };
      out.push(category);
    }
    category.items.push(item);
  });
  if (others.length !== 0) {
    out.push({ category: { name: "Others", slug: "others" }, items: others });
  }
  return out;
};
export {
  groupByCategory as a,
  getSkills as g,
  items as i,
  title as t
};
