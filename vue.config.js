const { defineConfig } = require('@vue/cli-service')
const fs = require('fs')


module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    https: {
      key: fs.readFileSync("C:\\Users\\veeztur\\AppData\\Roaming\\ASP.NET\\https\\angularapp1.client.key"),
      cert: fs.readFileSync('C:\\Users\\veeztur\\AppData\\Roaming\\ASP.NET\\https\\angularapp1.client.pem')
    }
  }
})
