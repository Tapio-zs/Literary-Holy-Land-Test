# 文学圣地测试

8 道题，测出属于你的文学朝圣圣地。

纯静态页面，无构建步骤、无外部依赖，可直接用 GitHub Pages 托管。

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
| `index.html` | 页面结构（首屏 / 答题 / 结果） |
| `style.css` | 复古书卷风样式与响应式布局 |
| `app.js` | 题库、计分、平票规则、复制分享 |

## 修改题目与结果

- 题目在 `app.js` 顶部的 `QUESTIONS` 数组里，每题固定 5 个选项（A–E）。
- 结果文案在 `RESULTS` 对象里，按字母对应。
- 平票规则：选得最多的字母若并列，以第 8 题的答案为准。
