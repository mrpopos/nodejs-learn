章节 文件夹模块和 package 文件

node_modules 文件夹与 nodejs 中模块化的关系：
模块化利用 exports 进行导出 require 进行导入，当 require 文件夹的时候不加"./",就会默认引用 node_modules 文件夹中的包
如果加"./"，就会根据 nodejs 执行命令的位置查找文件位置，而且".js"可以省略
