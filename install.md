## 配置PostCSS

1. 安装 postcss、postcss-loader、autoprefixer插件

    `npm i postcss postcss-loader autoprefixer@9.8.6 -D`

2. 项目下创建postcss.config.js文件

        //创建 postcss.config.js
        touch postcss.config.js

        // postcss.config.js
        module.exports = {
            plugins: [
                // 配置 Autoprefixer 插件
                require('autoprefixer')({
                    // 游览器最近的两个版本
                    'overrideBrowserslist': ['last 2 versions']
                })
            ],
        };

3. 在App.vue 中输入下面代码，重新运行：

        <template>
          <div>123</div>
        </template>

        <script>
        export default {
          name: 'App',
          components: {
          }
        }
        </script>

        <style scoped>
            div {
                display: flex;
            }
        </style>


## 配置Css 预处理语言 —— Sass

1. 使用下面命令安装 Sass
   
      `npm install sass sass-loader -D`


## 配置UI组件库 

1. 使用下面命令按装UI组件ant-design-vue@next,ant-design-vue组件已经支持 Vue3

    `npm i ant-design-vue@next -D`

2. 在main.js 中, 全局引入ant-design-vue组件库

        // main.js
        import { createApp } from 'vue'
        import App from './App.vue'
        import Antd from 'ant-design-vue'
        import 'ant-design-vue/dist/antd.css'

        const app = createApp(App)
        app.use(Antd)
        app.mount('#app')

##  配置路由 vue-router

    npm install vue-router@4 

1. 安装成功后，在src中创建views 文件夹，并且创建home.vue`user.vue`两个文件；
2. 在src中创建router 文件夹，并且创建index.js文件

## 配置状态管理器 Vuex

  `npm install vuex@next -D`

1. 在src中创建store 文件夹，并且创建index.js文件;
并且在state 里面存放一个 count值;
在mutations里面创建一个操作increment，每次加1；