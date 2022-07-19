const { app, BrowserWindow } = require('electron');
const url = require("url");
const path = require("path");

const createWindow = () => {
  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
        nodeIntegration: true
    }
  });

//   mainWindow.loadFile('index.html');
    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, `../dist/angular-bare-bones/index.html`),
            protocol: "file:",
            slashes: true
        })
    );
  // Open the DevTools.
  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function () {
    mainWindow = null
  })
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});