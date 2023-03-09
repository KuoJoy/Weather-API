![](https://i.imgur.com/LKWrd7x.png)

# Weather API
一個可以查詢全球即時天氣狀況及預報的網站。

此專案是在[Node.js](https://nodejs.org/en/)的環境下開發，結合[OpenWeather](https://openweathermap.org/api) API的功能，可觀看所輸入城市的天氣狀況，以及每三小時一次的天氣預報。

## Features - 功能列表
* 顯示該城市的即時天氣狀況，包含地點、日期、天氣、溫度、最高最低溫度
* 顯示每三小時一次的天氣預報，包含日期、時間、天氣、溫度

## Environment Setup - 環境建置
* [Node.js](https://nodejs.org/en/)

## Installing - 安裝流程
1. 開啟終端機(terminal)並複製(clone)此專案至本機電腦
```javascript
git clone https://github.com/KuoJoy/Weather-API.git
```
2. 在終端機(terminal)中進入此專案資料夾
```javascript
cd Weather-API
```
3. 安裝npm套件以及nodemon套件
```javascript
npm install // 安裝npm套件
npm install -g nodemon // 安裝nodemon套件
```
4. 執行app.js啟動伺服器
```javascript
nodemon app.js
```
5. 開啟瀏覽器輸入 [http://localhost:3000](http://localhost:3000) 即可進入Weather-API網站

6. 在網址欄輸入想查詢的城市名稱，如：`http://localhost:3000/paris`

![](https://i.imgur.com/5WzCdjd.jpg)

## Using Tools - 使用工具
* 開發環境 - [Visual Studio Code](https://code.visualstudio.com/)
* 開發框架
  * [Express](http://expressjs.com/)
  * [node-fetch](https://www.npmjs.com/package/node-fetch) @2.6.1
* 模板引擎 - [EJS](https://ejs.co/)

## Contributor - 專案開發人員
> [Joy Kuo](https://github.com/KuoJoy)
