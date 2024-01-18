# on-my-utils
前端开发常用功能函数，拿来即用！持续更新中～
## 开发工具链
`Rollup`: 打包利器 📦  
`TypeScript`: 类型支持 🥇  
`ESLint`: 代码语法检查与暴露问题 🔍  
`Prettier`：统一代码风格 🎨  
`husky + lint-staged`: 代码提交自动化监测 📝  
`pnpm`: 最佳快速包管理工具 🚀
## 安装
```cmd
npm install oh-my-funcs
yarn/pnpm add pnpm
```
## 使用
```js
import { --- } from 'oh-my-funcs'
```
### show(text: string, time = 1000)
```js
import { toast } from 'oh-my-funcs'

toast('Hello World!')
```