/*把code写到#code和style标签里*/


function writeCss(prefix, code, fn){
  let domCode = document.querySelector('#code')
  let n = 0
  let id = setInterval(() => {
    n += 1
    domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
    styleTag.innerHTML = prefix +  code.substring(0, n)
    /**/
    let mySound = new Audio('./sound/key-new-' + getRandomIntInclusive(1, 5) + '.wav')
    mySound.play()
    /**/ 
    domCode.scrollTop = domCode.scrollHeight
    console.log('这是第'+n+'遍')
    if (n >= code.length) {
      window.clearInterval(id)
      fn && fn.call()
    }
    
  }, 70)
}
function writeMarkdown(markdown, fn){
  let domPaper = document.querySelector('#paper>.content')
  let n = 0
  let id = setInterval(() => {
    n += 1
    domPaper.innerHTML = markdown.substring(0, n)
    domPaper.scrollTop = domPaper.scrollHeight
    if (n >= markdown.length) {
      window.clearInterval(id)
      fn && fn.call()
    }
  }, 35)
}

var css1 = `/* 
 * 面试官你好，我是胡鸣
 * 只用文字作做我介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */

*{
  transition: all 1s;
}
html{
  background: #eee;
}
#code{
  border: 1px solid #aaa;
  padding: 16px;
}

/* 我需要代码高亮 */

.token.selector{ color: #690; }
.token.property{ color: #905; }

/* 加一个呼吸效果 */

#code{
  animation: breath 0.5s infinite alternate-reverse;
}

/*加一些3D效果*/
#code {
  transform: scale(1,1.2) rotate(-5deg);
}


/* 现在正式开始 */

/* 我需要一张白纸 */

#code-wrapper{
  width: 50%; left: 0; position: fixed; 
  height: 100%;
}

#paper > .content {
 display: block;
}


/* 于是我就可以在白纸上写字了，请看右边 */
`

var css2 = `
/* 接下来用一个优秀的库 marked.js
 * 把 Markdown 变成 HTML
 */



`
var md = `
# 自我介绍

我叫 胡鸣
1995 年 10 月出生
上海行健职业学院 毕业
自学前端半年
希望应聘前端开发岗位

# 技能介绍

熟悉 JavaScript CSS Html

# 项目介绍

1.[苹果风格轮播](https://huming3272.github.io/Apple_slide-demo/demo.html)
2.[canvas画板](https://huming3272.github.io/canvas-demo/index.html)

# 联系方式

- 微信  huming1043005538
- 手机 15618353769

`
let css3 = `
/*
 * 这就是我的会动的简历
 * 谢谢观看
 */
`
!(function () {
  alert("你好，本次将占用您一点时间大约1分15秒")
}).call()

writeCss('', css1, ()=>{ // writeCss call the function
  createPaper(() => {
    writeMarkdown(md, ()=> {
      writeCss(css1, css2, ()=>{
        convertMarkdownToHtml(()=>{
          writeCss(css1 + css2, css3, ()=> {
            console.log('完成')
          })
        })
      })
    })
  })
})







function createPaper(fn){
  var paper = document.createElement('div') 
  paper.id = 'paper'
  var content = document.createElement('pre')
  content.className = 'content'
  paper.appendChild(content)
  document.body.appendChild(paper)
  fn && fn.call()
}

function convertMarkdownToHtml(fn){
  var div = document.createElement('div')  
  div.className = 'html markdown-body'
  div.innerHTML = marked(md)
  let markdownContainer = document.querySelector('#paper > .content')
  markdownContainer.replaceWith(div)
  fn && fn.call()
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}
