const readline = require('readline')
const fs = require('fs')
// const { promisify } = require('util')
const rl = readline.createInterface({
  input: fs.createReadStream('./.gitignore'),
  output: process.stdout,
  err: process.stderr,
  prompt: '请输入> '
})

rl.on('line', (line) => {
  console.log(`文件的单行内容是:${line}\n`)
})



// async function askQuestion() {
//   const anwser = rl.question("你认为 Node.js 中文网怎么样？")
//   console.log(`多谢你的反馈：${answer}`)
//   rl.close()
// }

// rl.question('你认为 Node.js 中文网怎么样？', (answer) => {
//   // 对答案进行处理
//   console.log(`多谢你的反馈：${answer}`);

//   rl.close();
// });
// rl.prompt()
// rl.on('line', (line) => {
//   switch (line.trim()) {
//     case 'hello':
//       console.log('world!')
//       break
//     default:
//       console.log(`你输入的是 ${line}`)
//       break
//   }
//   rl.prompt()
// }).on('close', () => {
//   console.log('再见!')
//   process.exit(0)
// })















































