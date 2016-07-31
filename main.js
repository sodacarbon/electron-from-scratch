const {app, BrowserWindow} = require('electron');

app.on('ready', function () {
  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: true,
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});
