const { app, BrowserWindow } = require('electron');
const url = require("url");
const path = require("path");

const createWindow = () => {
  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        nodeIntegration: true
    }
  });

//   mainWindow.loadFile('index.html');
    mainWindow.loadURL(
        url.format({
            // pathname: "localhost:4200",
            pathname: "angular-ivy-eajmf8.stackblitz.io/home",
            protocol: "https:",
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