# 文学圣地测试

8 道题，测出属于你的文学朝圣圣地。

纯静态页面，无构建步骤、无外部依赖，可直接用 GitHub Pages 托管。

功能包括：8 题测试、A–E 得分分布、结果直链、本地进度恢复、原生分享、1080×1440 结果海报（含可扫描回结果页的二维码），每个圣地对应的「3 本书 + 1 个具体地点 + 半日路线」朝圣手册，以及记录解锁日期的「朝圣图鉴 / 时间地图」。

## 本地预览

直接双击 `index.html` 即可，或起一个本地静态服务：

```bash
python -m http.server 8000
```

然后打开 <http://localhost:8000>。

## 部署到 GitHub Pages

1. 把代码推送到仓库默认分支（`main`）。
2. 打开仓库 **Settings → Pages**。
3. **Source** 选择 **Deploy from a branch**，分支选 `main`，目录选 `/ (root)`，保存。
4. 等待一两分钟，访问 `https://<用户名>.github.io/<仓库名>/`。

## 文件说明

| 文件 | 作用 |
| --- | --- |
| `index.html` | 页面结构（首屏 / 答题 / 结果 / 海报弹窗） |
| `style.css` | 深色电影感样式、光晕/颗粒/玻璃质感与移动端优先适配 |
| `app.js` | 题库、计分、平票规则、直链、进度恢复、海报生成 |
| `vendor/qrcode.js` | 海报二维码生成（qrcode-generator，MIT） |
| `assets/photos/` | 五个圣地的实景照片（WebP，800w / 1200w / 1600w 三档） |
| `assets/atlas/` | 朝圣地图（欧洲 / 中国西北，WebP） |
| `og.png` | 微信 / X 等社交平台分享预览图 |
| `apple-touch-icon.png` | iOS 添加到主屏幕图标 |

## 图片来源与许可

照片均来自 Wikimedia Commons，已压缩为 WebP。CC BY / CC BY-SA 图片保留署名与许可链接；页面结果图下方也会显示对应信息。

| 圣地 | 作者 | 许可 | 来源 |
| --- | --- | --- | --- |
| 都柏林 | Stephen Bergin | CC0 | [Trinity College entrance](https://commons.wikimedia.org/wiki/File:The_entrance_of_the_historic_Trinity_College_(Unsplash).jpg) |
| 布拉格 | ALZOE | CC BY-SA 4.0 | [Prague at sunrise](https://commons.wikimedia.org/wiki/File:Prague_at_sunrise.jpg) |
| 巴黎 | Shadowgate | CC BY 2.0 | [Shakespeare and Company](https://commons.wikimedia.org/wiki/File:Shakespeare_and_Company_bookstore,_Paris_13_August_2013.jpg) |
| 中国西北 | H2v5o68z | CC0 | [Baota Mountain](https://commons.wikimedia.org/wiki/File:Baota_Mountain_4.jpg) |
| 牛津 | Honcques Laus | CC0 | [Bibliotheca Bodleiana](https://commons.wikimedia.org/wiki/File:Bibliotheca_Bodleiana.jpg) |
| 朝圣地图 | Canuckguy 及贡献者 | Public domain | [BlankMap-World.svg](https://commons.wikimedia.org/wiki/File:BlankMap-World.svg) |

## 修改题目与结果

- 题目在 `app.js` 顶部的 `QUESTIONS` 数组里，每题固定 5 个选项（A–E）。
- 结果文案在 `RESULTS` 对象里，按字母对应。
- 平票规则：选得最多的字母若并列，以第 8 题的答案为准。
