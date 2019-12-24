const yaml = require('js-yaml')

export default async () => {
  return await fetch('/works.yml').then(res => res.text()).then(text => yaml.safeLoad(text, 'utf8'))
}
