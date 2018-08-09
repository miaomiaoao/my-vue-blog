import marked from 'marked'
import 'highlight.js/styles/monokai-sublime.css'

marked.setOptions({
  render: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  amartLists: true,
  smartypants: false,
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value
  }
})

let install = function (Vue) {
  if (install.installed) return
  Vue.directive('marked', {
    bind: function (el, binding, vnode) {
      el.innerHTML = marked(el.innerText)
    }
  })
}
export default install
