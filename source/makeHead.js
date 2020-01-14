function makeHead (helmet){

  const link = helmet.link.toString();
  const base = helmet.base.toString();
  const meta = helmet.meta.toString();
  const title = helmet.title.toString();

  return `
    ${link}
    ${base}
    ${meta}
    ${title}
  `
}

export default makeHead;