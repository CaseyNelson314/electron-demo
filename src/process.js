// メインプロセス

const { app, BrowserWindow } = require("electron");
const process = require("process");

///  メインウィンドウ作成
app.whenReady().then(() => {
  const window = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      nodeIntegration: true
    }
  });
  window.loadFile("index.html");
});

/// macOS dock
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});