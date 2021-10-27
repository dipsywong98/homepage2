import { fresh } from '@/lib/fresh'

const yaml = require('js-yaml')

export default async (category) => {
  let url = `/${category}.yml`
  switch (category) {
    case 'works':
      url = 'https://hackmd.io/Nyb5TGn9T72GIu-IHeJdZQ/download'
      break
    case 'blog':
      url = 'https://hackmd.io/sRaU_QDUQymyE43tRbgmig/download'
      break
  }
  const myInit = {
    method: 'GET',
    cache: 'no-cache'
  }
  return await fresh(url, myInit).then(res => res.text()).then(text => yaml.load(text, 'utf8'))
}
