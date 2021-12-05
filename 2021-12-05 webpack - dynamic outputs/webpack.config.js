const path = require('path')
const glob = require('glob')


const entryArray = glob.sync('*/**/*.special.js')

console.log('entryArray', entryArray)

const entryObj = entryArray.reduce((acc, curr) => {
  const name = curr.replace(/\/[^\/]*\.special\.js/gm, '')
  console.log(name)
  acc[name] = './' + curr
  return acc
}, {})

console.log('entryObj', entryObj)

module.exports = {
  entry: entryObj,
  output: {
    filename: '[name]/special.js',
    path: __dirname
  }
}