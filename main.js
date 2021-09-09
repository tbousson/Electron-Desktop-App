const {app, BrowserWindow} = require('electron');
const path = require('path')

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

let browserWindow;
let mainWindow;



function createWindow(){
    browserWindow = new BrowserWindow({
       width: 400,
       height: 250,
       frame: false,
       alwaysOnTop: true,
       center: true
    })
    browserWindow.loadFile('ui/loading.html')
    
    

    setTimeout(() => {
        browserWindow.close()
        mainWindow = new BrowserWindow({
            width: 800,
            height: 600,
            frame: true,
            maximizable: true
         })
        mainWindow.loadFile('ui/main.html')
    }, 6000)



    browserWindow.on('close', () => {
        browserWindow = null
    })
}


app.on('ready', () =>
    createWindow(

    ))