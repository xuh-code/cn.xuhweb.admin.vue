// 配置编译环境和线上环境之间的切换

const env = process.env 
let baseUrl = ''
// 图表库为avue和pig2套地址
let iconfontVersion = ['1215953_k4lt5uukp0l']
let iconfontUrl = `//at.alicdn.com/t/font_$key.css`
                  //at.alicdn.com/t/font_1215953_xcrlifuep38.js
let codeUrl = `${window.location.origin}/code`
// let actUrl = `${window.location.origin}/act/modeler.html?modelId=`
if (env.NODE_ENV == 'development') {

} else if (env.NODE_ENV == 'production') {

} else if (env.NODE_ENV == 'test') {

}
export {
  baseUrl,
  // actUrl,
  iconfontUrl,
  iconfontVersion,
  codeUrl,
  env
}
