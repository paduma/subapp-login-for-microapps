# Subapp-Login  

Subapp-Login 是一个微应用（microapp），专注于用户注册及登录功能。作为主应用的一部分，它与 [main-app](https://github.com/paduma/main-app-for-microapps) 结合，提供全面的用户身份管理体验。  

## 技术栈  

- **前端框架**: Vue.js  
- **组件库**: Vuetify  

## 核心功能  

### 版本 1 功能  
- **用户注册**: 用户可以创建新账户。  
- **用户登录**: 注册用户可以登录系统。  

### 版本 2 功能计划  
- **密码重置**: 用户可以通过电子邮件重置其密码。  
- **电子邮件唯一性检查**: 在注册时检查电子邮件是否已被注册，确保用户的电子邮件地址独一无二。  

## 安装与使用  

### 先决条件  
- Node.js (推荐版本: 18.20.3)  
- Vue CLI (可选)  

### 安装步骤  
1. **克隆项目:**  
   ```bash  
   git clone <repository-url>  
   cd subapp-login  
2. **安装依赖:**
   ```bash
   npm install  
3. **启动应用:**
   为确保应用运行在正确的端口，请使用以下命令：
   ```bash
   npm run serve -- --port 9001  
4. **在浏览器中打开应用:**
访问 http://localhost:9001 查看应用。

## 贡献
   如果您希望为该项目做出贡献，请遵循以下步骤：
1. Fork 该仓库。
   创建一个新的功能分支:
   ```bash
   git checkout -b feature-branch-name  
2. 提交更改:
   ```bash
   git commit -am 'Add new feature'  
3. 推送到分支:
   ```bash
   git push origin feature-branch-name  
   提交 Pull Request。
## 许可证
该项目使用 MIT 许可证 - 具体内容请参见 LICENSE 文件。

## 鸣谢
感谢 Vue.js 和 Vuetify 社区提供的工具和资源。
特别感谢 Qiankun 团队对微前端框架的贡献。
