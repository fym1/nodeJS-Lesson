/**
 * process.pid进程的id值，唯一标识
 * 
 * process.platform返回程序运行的操作系统平台
 * 
 * process.argv获取命令行参数(命令行参数：文件名之后的参数)
 *  process.argv是数组，默认有两个数组元素
 *  process.argv[0]表示的是node的可执行文件所在路径
 *  process.argv[1]表示的是当前执行脚本文件所在的路径
 *  process.argv[2]2以后表示的是传入的命令行参数
 * process.cwd()当前脚本执行所在的路径
 */
console.log(process.pid);
console.log(process.platform);
console.log(process.argv);
console.log(process.cwd());