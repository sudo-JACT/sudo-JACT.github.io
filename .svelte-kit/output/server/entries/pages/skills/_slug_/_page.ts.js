import { i as items } from "../../../../chunks/skills.js";
function load({ params }) {
  if (params.slug) {
    const skill = items.find((item) => {
      return item.slug === params.slug;
    });
    return { skill };
  }
}
export {
  load
};
