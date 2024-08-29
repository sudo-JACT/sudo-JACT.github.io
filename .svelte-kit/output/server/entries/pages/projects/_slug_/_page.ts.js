import { i as items } from "../../../../chunks/projects.js";
function load({ params }) {
  if (params.slug) {
    const project = items.find((item) => {
      return item.slug === params.slug;
    });
    return { project };
  }
}
export {
  load
};
