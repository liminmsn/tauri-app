# 网页数据抓取桌面应用开发文档

## 项目概述

本项目是一款基于现代前端技术栈和跨端框架开发的网页数据抓取桌面应用，旨在提供直观、高效的网页数据采集解决方案。通过可视化的流程设计界面，用户可以轻松配置数据抓取规则，无需编写代码即可完成复杂的网页数据提取任务。

## 技术栈

- **核心框架**: Vue 3 + TypeScript
- **路由管理**: Vue Router
- **桌面端封装**: Tauri 2.x
- **UI组件库**: Ant Design Vue (antd)
- **可视化流程**: 基于Flow的节点拖放系统
- **构建工具**: Vite

## 功能架构

### 1. 核心功能模块

1. **项目管理**
   - 创建/编辑/删除抓取项目
   - 项目配置保存与导入导出
   - 项目版本控制

2. **可视化流程设计**
   - 基于Flow的节点拖放界面
   - 预定义抓取节点库(请求、解析、过滤、存储等)
   - 节点连接与参数配置
   - 流程预览与验证

3. **网页抓取引擎**
   - HTTP/HTTPS请求处理
   - 动态网页渲染(支持JavaScript)
   - 代理配置与IP轮换
   - 请求频率控制与重试机制

4. **数据解析工具**
   - CSS选择器解析
   - XPath解析
   - JSON数据提取
   - 正则表达式工具

5. **数据处理与导出**
   - 数据过滤与清洗
   - 数据格式转换
   - 多种导出格式(CSV、Excel、JSON、数据库)
   - 数据预览与编辑

6. **任务调度**
   - 即时执行
   - 定时任务设置
   - 任务队列管理
   - 执行日志与错误处理

### 2. 辅助功能模块

1. **浏览器集成**
   - 内置网页预览
   - 元素拾取工具
   - 网络请求分析

2. **配置中心**
   - 全局设置
   - 代理管理
   - 缓存设置
   - 外观主题

3. **帮助与文档**
   - 使用教程
   - 节点参考手册
   - 常见问题解答

## 界面设计

### 主界面布局

```
+------------------------------------------------------+
| 菜单栏 - 项目 | 编辑 | 视图 | 工具 | 帮助             |
+------------------------------------------------------+
| 工具栏 - 新建 | 保存 | 运行 | 停止 | 配置 | 帮助      |
+------------------------------------------------------+
| 左侧面板       | 主工作区                          | 右侧面板 |
| +------------+ | +-------------------------------+ | +------+ |
| | 项目导航    | | | 流程设计画布(Flow节点拖放区)  | | | 属性  | |
| | - 项目1     | | |                               | | | 配置  | |
| | - 项目2     | | |                               | | |      | |
| | ...         | | |                               | | |      | |
| +------------+ | +-------------------------------+ | +------+ |
| 底部面板       |                                    |         |
| +------------+ |                                    |         |
| | 日志输出    | |                                    |         |
| |            | |                                    |         |
| +------------+ |                                    |         |
+----------------+------------------------------------+---------+
```

### 关键页面

1. **项目列表页**
   - 项目卡片展示
   - 快速操作按钮(新建、搜索、筛选)
   - 最近访问记录

2. **流程设计页**
   - 左侧节点库面板
   - 中央画布区域(支持拖拽、缩放)
   - 右侧节点属性配置面板
   - 底部日志与调试信息

3. **数据预览页**
   - 表格/列表数据展示
   - 数据筛选与搜索
   - 导出选项
   - 数据编辑工具

4. **任务管理页**
   - 任务列表与状态
   - 任务控制按钮(启动、暂停、终止)
   - 执行统计信息
   - 任务日志详情

## 技术实现要点

### 1. Vue 3 + TypeScript 集成

- 使用Composition API组织组件逻辑
- 类型定义与接口设计确保类型安全
- 响应式状态管理(Pinia)
- 组件通信与状态共享策略

```typescript
// 示例: 抓取节点类型定义
interface ScraperNode {
  id: string;
  type: 'request' | 'parser' | 'filter' | 'storage' | 'loop' | 'condition';
  position: { x: number; y: number };
  properties: Record<string, any>;
  connections: {
    source: string;
    target: string;
  }[];
}

// 示例: 节点组件
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    node: {
      type: Object as PropType<ScraperNode>,
      required: true
    }
  },
  setup(props) {
    // 组件逻辑
    return {
      // 暴露给模板的数据和方法
    };
  }
});
```

### 2. 路由设计 (Vue Router)

```typescript
// 路由配置示例
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'ProjectList',
    component: () => import('@/views/ProjectList.vue')
  },
  {
    path: '/project/:id',
    name: 'ProjectEditor',
    component: () => import('@/views/ProjectEditor.vue'),
    children: [
      {
        path: 'flow',
        name: 'FlowDesigner',
        component: () => import('@/views/FlowDesigner.vue')
      },
      {
        path: 'data',
        name: 'DataPreview',
        component: () => import('@/views/DataPreview.vue')
      },
      {
        path: 'tasks',
        name: 'TaskManager',
        component: () => import('@/views/TaskManager.vue')
      }
    ]
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/views/Settings.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
```

### 3. Tauri 2.x 集成

- 主进程与渲染进程通信
- 文件系统访问
- 系统对话框
- 桌面通知
- 网络请求代理

```typescript
// 示例: Tauri 命令调用
import { invoke } from '@tauri-apps/api/tauri';
import { open } from '@tauri-apps/api/dialog';
import { writeTextFile } from '@tauri-apps/api/fs';

// 保存项目到文件
async function saveProject(project: any) {
  const filePath = await open({
    directory: false,
    multiple: false,
    filters: [{ name: 'Scraper Projects', extensions: ['scraper'] }]
  });
  
  if (filePath && typeof filePath === 'string') {
    await writeTextFile(filePath, JSON.stringify(project, null, 2));
    return true;
  }
  return false;
}

// 调用Rust后端的网络请求
async function fetchWithTauri(url: string, options: any) {
  return await invoke('fetch_url', { url, options });
}
```

### 4. Flow 节点拖放实现

- 节点定义与注册
- 画布交互与事件处理
- 节点连接与数据流转
- 流程序列化与反序列化

```typescript
// 示例: 节点定义
import { defineNode } from '@/components/flow';

// 请求节点定义
defineNode('http-request', {
  label: 'HTTP请求',
  icon: 'api',
  inputs: [],
  outputs: ['success', 'error'],
  properties: [
    { name: 'url', type: 'string', label: 'URL地址', required: true },
    { name: 'method', type: 'select', label: '请求方法', options: ['GET', 'POST', 'PUT', 'DELETE'], default: 'GET' },
    { name: 'headers', type: 'object', label: '请求头' },
    { name: 'body', type: 'text', label: '请求体' },
    { name: 'timeout', type: 'number', label: '超时时间(ms)', default: 30000 }
  ],
  async execute(context) {
    try {
      const response = await fetchWithTauri(context.properties.url, {
        method: context.properties.method,
        headers: context.properties.headers,
        body: context.properties.body
      });
      return {
        output: 'success',
        data: response
      };
    } catch (error) {
      return {
        output: 'error',
        data: error
      };
    }
  }
});
```

### 5. Ant Design Vue 组件应用

- 布局组件构建界面框架
- 表单组件处理配置项
- 表格组件展示数据
- 模态框与抽屉用于详情展示
- 消息提示与通知反馈操作结果

```vue
<template>
  <a-card title="节点属性配置">
    <a-form
      :model="node.properties"
      layout="vertical"
      @finish="handleSave"
    >
      <a-form-item 
        label="URL地址" 
        name="url"
        :rules="[{ required: true, message: '请输入URL地址' }]"
      >
        <a-input v-model:value="node.properties.url" placeholder="请输入URL" />
      </a-form-item>
      
      <a-form-item label="请求方法" name="method">
        <a-select v-model:value="node.properties.method">
          <a-select-option value="GET">GET</a-select-option>
          <a-select-option value="POST">POST</a-select-option>
          <a-select-option value="PUT">PUT</a-select-option>
          <a-select-option value="DELETE">DELETE</a-select-option>
        </a-select>
      </a-form-item>
      
      <a-form-item>
        <a-button type="primary" html-type="submit">保存</a-button>
        <a-button style="margin-left: 8px" @click="handleCancel">取消</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>
```

## 开发与构建流程

### 开发环境搭建

1. 安装Node.js (v16+) 和Rust环境
2. 克隆项目代码库
3. 安装依赖: `npm install`
4. 启动开发服务器: `npm run tauri dev`

### 构建流程

1. 开发环境测试: `npm run test`
2. 构建前端资源: `npm run build`
3. 构建桌面应用:
   - Windows: `npm run tauri build -- --target x86_64-pc-windows-msvc`
   - macOS: `npm run tauri build -- --target x86_64-apple-darwin`
   - Linux: `npm run tauri build -- --target x86_64-unknown-linux-gnu`

## 扩展与进阶

### 插件系统设计

- 自定义节点开发规范
- 插件打包与安装机制
- 插件市场集成方案

### 性能优化策略

- 大型流程的渲染优化
- 数据处理的并行计算
- 内存使用优化
- 缓存策略设计

### 未来功能规划

1. AI辅助流程设计
2. 分布式抓取任务
3. 更丰富的数据源支持
4. 高级数据清洗与分析工具
5. 团队协作功能

## 结语

本应用通过结合Vue 3、TypeScript、Vue Router、Tauri 2.x、Ant Design Vue和Flow节点系统，为用户提供了一个强大而直观的网页数据抓取解决方案。通过可视化的流程设计，即使是非技术用户也能轻松完成复杂的数据采集任务。

项目的架构设计注重可扩展性和可维护性，为未来功能扩展和性能优化提供了坚实基础。通过Tauri框架，实现了真正的跨平台桌面应用体验，同时保持了前端开发的高效与便捷。