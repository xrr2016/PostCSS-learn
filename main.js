const electron = require('electron')
const path = require('path')
const url = require('url')
const { app, BrowserWindow } = electron

let win


// const holder = document.getElementById('holder')
// holder.ondragover = () => {
//   return false
// }
// holder.ondragleave = holder.ondragend = () => {
//   return false
// }
// holder.ondrop = (event) => {
//   event.preventDefault()
//   for (let f of event.dataTransfer.files) {
//     console.log(`File(s) you dragged here: `, f.path)
//     console.dir(f)
//   }
//   return false
// }




function createWindow() {
  console.log(process.type)
  win = new BrowserWindow({
    width: 720, 
    heght: 480,
    frame: false,
    'titleBarStyle': 'hidden'
    // transparent: true
  })
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    // pathname: 'v2ex.com',
    protocol: 'file',
    slashes: true
  }))

  // win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})