// アプリケーション作成用のモジュールを読み込み
const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
  // メインウィンドウ作成
  let mainWindow = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      preload: require("path").join(__dirname, "preload.js"),
    },
  });

  mainWindow.loadFile("index.html");

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
};

//  初期化が完了した時の処理
app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// 全てのウィンドウが閉じたときの処理
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});