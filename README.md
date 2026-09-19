# 钧曦智能 (JunXiX) 官方网站

钧曦智能（JunXiX）官方门户网站，聚焦触觉传感与具身智能物理交互底座，呈现高精度柔性触觉传感器、智能数据手套、IoT 设备云管平台与车联网外呼平台的软硬件一体化解决方案。

---

## 1. 产品定位与核心矩阵

- **触觉感知硬件 (Hardware)**：
  - **JunXiX 阵列式触觉传感器**：多维法向力与切向力感知，毫秒级响应，专为机器人末端夹爪与灵巧手设计。
  - **JunXi 智能数据手套**：动作捕捉与多点触觉反馈融合，支持具身智能遥操作与高保真数据采集。
- **软件与中枢平台 (Software & Cloud)**：
  - **IoT MDM 统一设备云管平台**：百万级设备连接、固件 OTA 升级与端侧拓扑管控。
  - **IoV 车联网与外呼协同平台**：智慧出行调度与智能车机生态对接。

---

## 2. 技术栈与架构设计

- **框架内核**：[Astro 5.x](https://astro.build/)（静态生成 SSG 架构，极致加载速度与首屏性能）
- **样式体系**：[Tailwind CSS](https://tailwindcss.com/)（自定义科技触觉质感配色与自适应断点）
- **矢量图标**：[Lucide Astro](https://lucide.dev/)
- **类型安全**：TypeScript 强类型支持
- **多云边缘**：Vercel CI/CD 自动化构建 + Cloudflare Edge 多源容灾网关

---

## 3. 目录结构

```text
product-junxi/
├── public/                 # 静态资源（图像、Logo、favicon）
├── src/
│   ├── components/         # 页面分块组件（Hero, Sensors, Platform, Glove, etc.）
│   ├── layouts/            # 基础骨架与全局样式引入 (Layout.astro)
│   ├── pages/              # 路由入口 (index.astro)
│   └── styles/             # 全局样式与自定义网格
├── astro.config.mjs        # Astro 引擎配置
├── tailwind.config.mjs     # Tailwind 配置
├── vercel.json             # Vercel 静态托管与安全响应头
└── worker-enhanced.js      # Cloudflare Worker 多云边缘容灾网关
```

---

## 4. 本地开发与构建

项目采用统一包管理工具 `pnpm`：

```bash
# 安装依赖
pnpm install

# 启动本地开发服务 (默认端口 4321)
pnpm dev

# 生产环境静态打包构建 (产物输出至 dist/)
pnpm build

# 本地预览打包产物
pnpm preview
```

---

## 5. 持续集成与部署

- **官方 GitHub 仓库**：`WangTeng-Tech/junxi`
- **关联生产分支**：`main`
- **自动化发布流程**：
  1. 向 `main` 分支提交或推送代码自动触发 Vercel 构建流水线。
  2. 边缘网关通过 `worker-enhanced.js` 实现 Vercel、Netlify 及腾讯云 EdgeOne 之间的多源健康探测与平滑故障转移。

---

## 6. 维护组织

- **运营主体**：网腾科技 (WangTeng-Tech)
- **版权声明**：Copyright © 2026 WangTeng Tech. All rights reserved.
