const ejs = require('ejs')

let string = '天气预报，今天-<%= today %>天'

const condition = {
  today: '晴'
}

let html = ejs.render(string, condition)
console.log(html)
