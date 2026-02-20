# 个人主页

这是我的个人主页，使用GitHub Pages部署。

## 功能特点

- ✅ 响应式设计，适配各种设备
- ✅ 平滑滚动导航
- ✅ 个人介绍板块
- ✅ 项目展示卡片
- ✅ 博客文章列表
- ✅ 联系方式表单
- ✅ 现代化UI设计

## 文件结构

```
.
├── index.html          # 主页面
├── style.css          # 样式文件
├── script.js          # JavaScript交互
├── README.md          # 说明文档
└── .gitignore         # Git忽略文件
```

## 本地开发

1. 克隆仓库：
```bash
git clone https://github.com/yaoxingyu0405/yaoxingyu0405.github.io.git
```

2. 在浏览器中打开 `index.html` 即可预览

## 部署

本网站使用GitHub Pages自动部署。只需将代码推送到 `main` 分支，GitHub会自动构建并发布到：
```
https://yaoxingyu0405.github.io
```

## 自定义内容

### 修改个人信息
编辑 `index.html` 文件中的以下部分：

1. **个人介绍**：修改第50-70行的内容
2. **技能标签**：修改第65-71行的技能列表
3. **项目展示**：修改第100-150行的项目卡片
4. **博客文章**：修改第160-190行的文章列表
5. **联系方式**：修改第210-240行的联系信息

### 修改样式
编辑 `style.css` 文件中的CSS变量来自定义颜色主题：
```css
:root {
    --primary-color: #3498db;    /* 主色调 */
    --secondary-color: #2c3e50;  /* 副色调 */
    --accent-color: #e74c3c;     /* 强调色 */
    --light-color: #f8f9fa;      /* 浅色背景 */
    --dark-color: #343a40;       /* 深色背景 */
}
```

## 添加新功能

### 添加新页面
1. 创建新的HTML文件（如 `projects.html`）
2. 在导航栏中添加链接
3. 更新样式和脚本

### 添加博客系统
可以使用静态站点生成器如Jekyll、Hugo或Hexo来管理博客文章。

## 浏览器支持

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 许可证

本项目采用MIT许可证。详见 [LICENSE](LICENSE) 文件。

## 致谢

- 感谢GitHub Pages提供免费的静态网站托管
- 感谢Font Awesome提供图标
- 感谢所有开源项目的贡献者

---

**最后更新**：2024年3月
**作者**：姚星宇
**联系方式**：yaoxingyu0405@example.com