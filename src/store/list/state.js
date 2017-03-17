import * as fun from '../fun.js'

export default {
  data:fun.local.get() || {list: [],count: 0}
}
