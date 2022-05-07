async function route(name: string) {
  const comps = import.meta.glob('./pages/**/*.vue');
  const match = comps[`./pages/${name}/index.vue`];
  const page = (await match()).default;
  return page;
}

export default route;
