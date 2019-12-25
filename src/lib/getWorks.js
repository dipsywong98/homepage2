const yaml = require('js-yaml')

export default async (category) => {
  return await fetch(`/${category}.yml`).then(res => res.text()).then(text => yaml.safeLoad(text, 'utf8'))
}
