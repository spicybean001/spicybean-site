# SPICYBEAN 独立站部署指南 🚀

## 一、推送代码到 GitHub

```bash
# 在 Godaddy 的服务器或你的开发机上:
# 1. 去 github.com 新建仓库: spicybean-site
# 2. 然后执行:
git remote add origin git@github.com:你的用户名/spicybean-site.git
git branch -M main
git push -u origin main
```

## 二、部署到 Vercel（免费）

1. 打开 [vercel.com](https://vercel.com)
2. 用 GitHub 登录
3. 点击 **"Add New → Project"**
4. 选择 `spicybean-site` 仓库
5. **Framework Preset** 会自动识别为 **Next.js**
6. 点击 **Deploy**

Vercel 会自动给你一个 `spicybean-site.vercel.app` 临时域名。

## 三、绑定 Godaddy 域名

> 💡 如果之前绑定过 Shopify，先去掉相关 DNS 记录

### 方法 A：裸域名 (spicybean.net) + www

1. 去 [vercel.com/dashboard](https://vercel.com/dashboard) → 你的项目 → **Domains**
2. 输入: `spicybean.net`
3. Vercel 会显示 DNS 配置要求

### 方法 B：只用子域名（推荐先试用）

1. 输入: `www.spicybean.net`
2. Vercel 给 DNS 配置: 在 Godaddy 添加 CNAME

### Godaddy DNS 设置

| 类型 | 名称 | 值 |
|------|------|-----|
| CNAME | www | `cname.vercel-dns.com` |
| A | @ | `76.76.21.21` |

*具体 IP 以 Vercel 页面指示为准*

## 四、域名邮箱（可选）

推荐用 **Zoho Mail 免费版**，绑定 `@spicybean.net`：

1. 去 [zoho.com/mail](https://zoho.com/mail) 注册免费版
2. 验证域名：需要加 MX/TXT 记录到 Godaddy
3. 设置 `hello@spicybean.net`

## 五、修改网站内容

所有文案在 `src/messages/` 目录下的 JSON 文件中：

| 文件 | 语言 |
|------|------|
| `en.json` | 🇬🇧 English |
| `zh-CN.json` | 🇨🇳 中文 |
| `ko-KR.json` | 🇰🇷 한국어 |
| `ja-JP.json` | 🇯🇵 日本語 (已预留) |

**修改后**: 推送 GitHub → Vercel 自动重新部署

## 六、URL 路径结构

```
spicybean.net        → 英文站（默认）
spicybean.net/en     → 英文站
spicybean.net/zh-CN  → 中文站
spicybean.net/ko-KR  → 韩文站
spicybean.net/ja-JP  → 日文站
```

## 七、项目结构

```
spicybean-site/
├── src/
│   ├── app/
│   │   ├── [locale]/        ← 路由 (en/zh-CN/ko-KR/ja-JP)
│   │   │   ├── layout.tsx   ← 布局（Header + Footer）
│   │   │   ├── page.tsx     ← 首页
│   │   ├── globals.css      ← 全局样式
│   ├── components/
│   │   ├── Header.tsx       ← 导航栏（带语言切换）
│   │   ├── Hero.tsx         ← 首屏大图
│   │   ├── Products.tsx     ← 产品系列
│   │   ├── About.tsx        ← 品牌故事
│   │   ├── Footer.tsx       ← 页脚
│   ├── messages/
│   │   ├── en.json          ← 英文翻译
│   │   ├── zh-CN.json       ← 中文翻译
│   │   ├── ko-KR.json       ← 韩文翻译
│   │   ├── ja-JP.json       ← 日文翻译（预留）
│   ├── i18n/
│   │   ├── routing.ts       ← 多语言路由配置
│   │   ├── request.ts       ← next-intl 加载
│   ├── middleware.ts         ← 语言检测跳转
├── next.config.ts            ← Next.js 配置
├── package.json
├── DEPLOY.md                 ← 本文件
```
