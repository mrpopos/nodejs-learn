章节 文件夹模块和 package 文件

node_modules 文件夹与 nodejs 中模块化的关系：
模块化利用 exports 进行导出 require 进行导入:
[demo01/demo01.js]
如果加"./"，就会根据 nodejs 执行命令的位置查找文件位置，而且".js"可以省略

[demo01/demo02.js]
当 require 文件夹的时候不加"./",就会默认引用 node_modules 文件夹中的包,其中".js" 可以省略,而且 node_modules 文件夹可以放在任意祖先级目录；另外 require 可以引入文件夹名，默认是引用文件夹下 index.js 文件
假如引用目录入口不是 index.js 文件而是 main.js 文件，这时候需要指定 package.json 中的入口文件,每一个文件夹模块中都推荐写 package.json 文件，main 项指定了入口文件

[demo01/demo03.js]
在www.npmjs.com社区网站中，有无数业务需求功能模块存在，可以npm install name 引用包进行模块开发

[demo02]
package.json 会对项目包进行管理，利用 npm init 可以生成,其中 dependencies 属性表示运行时依赖的 npm 包，当在项目根目录下执行 npm install 时，就会安装 dependencies 下的所有包，值得注意的是符号"^"表示固定版本

值得注意的是，require 中的相对路径是相对于当前执行目录的而言，fs 读取文件的相对地址是相对执行命令位置
