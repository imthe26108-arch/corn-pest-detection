# 玉米病虫害智能检测系统 - AGENTS.md

## 项目概述

这是一个基于 Next.js 16 + React 19 + TypeScript 的高级玉米病虫害智能检测系统，集成了 AI 图像识别、智能问答、数据可视化等多项功能。

## 技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI 组件**: shadcn/ui (基于 Radix UI)
- **Styling**: Tailwind CSS 4
- **动画**: Framer Motion
- **图表**: Recharts
- **AI**: coze-coding-dev-sdk

## 目录结构

```
├── public/
│   └── leaf-icon.svg          # 网站图标
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── chat/route.ts   # AI 对话 API
│   │   │   └── detect/route.ts # 病虫害识别 API
│   │   ├── about/page.tsx      # 关于我们页面
│   │   ├── chat/page.tsx       # AI 咨询页面
│   │   ├── detect/page.tsx     # 病虫害识别页面
│   │   ├── help/page.tsx       # 帮助中心页面
│   │   ├── knowledge/page.tsx   # 知识库页面
│   │   ├── statistics/page.tsx  # 数据统计页面
│   │   ├── globals.css         # 全局样式
│   │   ├── layout.tsx         # 根布局
│   │   └── page.tsx            # 首页
│   ├── components/
│   │   ├── footer.tsx         # 页脚组件
│   │   └── navigation.tsx      # 导航组件
│   └── lib/
│       └── utils.ts            # 工具函数
├── package.json
└── tsconfig.json
```

## 功能模块

### 1. 首页 (`/`)
- Hero Banner 区域，动态渐变背景
- 数据统计卡片（识别准确率、服务农户、覆盖地区等）
- 核心功能展示卡片
- 使用流程图解
- 高发病虫害展示
- 用户评价
- CTA 行动号召

### 2. 病虫害识别 (`/detect`)
- 图片上传组件（支持拖拽上传）
- AI 分析过程动画展示
- 检测结果详细报告（包含症状、原因、防治方案等）
- 防治建议卡片
- 拍摄技巧提示

### 3. AI 咨询 (`/chat`)
- 智能问答界面
- 快速问题快捷入口
- 流式响应展示
- 历史消息管理
- 消息复制、反馈功能

### 4. 知识库 (`/knowledge`)
- 病虫害分类展示
- 搜索和筛选功能
- 卡片/列表视图切换
- 病虫害详情（症状、原因、防治方案）
- 相关链接导航

### 5. 数据统计 (`/statistics`)
- 多维度数据卡片
- 月度趋势图表
- 病虫害分布饼图
- 地区分布柱状图
- 严重程度分布
- 系统性能雷达图

### 6. 关于我们 (`/about`)
- 使命和愿景
- 核心价值观
- 团队成员展示
- 发展历程时间轴
- 合作伙伴展示
- 联系方式

### 7. 帮助中心 (`/help`)
- FAQ 常见问题
- 使用指南
- 小技巧分享
- 在线客服入口
- 服务状态监控

## API 接口

### `POST /api/detect`
病虫害图片识别 API
- **参数**: `{ imageUrl: string, prompt?: string }`
- **返回**: SSE 流式响应
- **模型**: `doubao-seed-1-6-vision-250815`

### `POST /api/chat`
AI 对话咨询 API
- **参数**: `{ messages: Message[] }`
- **返回**: SSE 流式响应
- **模型**: `doubao-seed-2-0-lite-260215`

## 开发命令

- `pnpm dev` - 启动开发服务器（端口 5000）
- `pnpm build` - 构建生产版本
- `pnpm start` - 启动生产服务器
- `pnpm lint` - 代码检查
- `pnpm ts-check` - TypeScript 类型检查

## 环境变量

无需额外配置，使用系统预置的环境变量。

## 特色亮点

1. **丰富的视觉效果**：渐变背景、动画效果、毛玻璃效果
2. **响应式设计**：完美适配桌面和移动设备
3. **流式响应**：AI 回复实时流式展示
4. **数据可视化**：多种图表展示统计数据
5. **专业内容**：详尽的病虫害知识和防治方案
6. **用户友好**：清晰的导航、直观的操作

## 注意事项

- 确保上传图片质量以获得最佳识别效果
- AI 识别结果仅供参考，如有疑问请咨询专业人士
- 系统持续更新优化中
