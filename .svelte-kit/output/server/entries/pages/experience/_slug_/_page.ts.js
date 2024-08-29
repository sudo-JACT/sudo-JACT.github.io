import { i as items } from "../../../../chunks/experience.js";
function load({ params }) {
  if (params.slug) {
    const experience = items.find((item) => {
      return item.slug === params.slug;
    });
    return { experience };
  }
}
export {
  load
};
