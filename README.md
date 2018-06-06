## JavaScript ES6语法

+ JS 编码规范
  1. 只在块级作用域中用到的变量使用let取代var进行声明。
  2. 在let和const之间，建议优先使用const，尤其是在全局环境，不应该设置变量，只应设置常量。
  3. 静态字符串一律使用单引号或反引号，不使用双引号。动态字符串使用反引号。
  4. 使用数组成员对变量赋值时，优先使用解构赋值。  
     函数的参数如果是对象的成员，优先使用解构赋值。  
     如果函数返回多个值，优先使用对象的解构赋值，而不是数组的解构赋值。这样便于以后添加返回值，以及更改返回值的顺序。
  5. 单行定义的对象，最后一个成员不以逗号结尾。多行定义的对象，最后一个成员以逗号结尾。  
     对象尽量静态化，一旦定义，就不得随意添加新的属性。如果添加属性不可避免，要使用Object.assign方法。  
     对象的属性和方法，尽量采用简洁表达法，这样易于描述和书写。  
  6. 使用扩展运算符（...）拷贝数组。
     使用Array.from方法，将类似数组的对象转为数组。
  7. 立即执行函数可以写成箭头函数的形式。  
     箭头函数取代Function.prototype.bind，不应再用 self/_this/that 绑定 this。  
     所有配置项都应该集中在一个对象，放在最后一个参数，布尔值不可以直接作为参数。  
     不要在函数体内使用 arguments 变量，使用 rest 运算符（...）代替。因为 rest 运算符显式表明你想要获取参数，而且 arguments 是一个类似数组的对象，而 rest 运算符可以提供一个真正的数组。  
  8. 注意区分 Object 和 Map，只有模拟现实世界的实体对象时，才使用 Object。如果只是需要key: value的数据结构，使用 Map 结构。因为 Map 有内建的遍历机制。  
  9. 总是用 Class，取代需要 prototype 的操作。因为 Class 的写法更简洁，更易于理解。  
     使用extends实现继承，因为这样更简单，不会有破坏instanceof运算的危险。  
  10. Module 语法是 JavaScript 模块的标准写法，坚持使用这种写法。使用import取代require。使用export取代module.exports。  
      如果模块只有一个输出值，就使用export default，如果模块有多个输出值，就不使用export default，export default与普通的export不要同时使用。  
      不要在模块输入中使用通配符。因为这样可以确保你的模块之中，有一个默认输出（export default）。  
      如果模块默认输出一个函数，函数名的首字母应该小写。如果模块默认输出一个对象，对象名的首字母应该大写。  
  11. 使用ESLint, VS Code已经集成。

+ JS 预编译与执行原理 (demo_2x.js)

+ JS 模块化

+ JS 变量声明解构赋值

+ JS 数据类型、函数、数组、对象
  - 数据类型 
    * undefined
    * null
    * Boolean
    * String
    * Number
    * Object
    * Symbol

+ JS 正则表达式

+ JS 数据结构 Set 和 Map

+ JS Proxy (代理器)
  对外界的访问进行过滤和改写。

+ JS Reflect (反射)

+ JS 异步编程
  - 事件和回调函数
  - Promise 
    相对于传统的异步编程：事件和回调函数的另一种更强大合理的解决方案。
  - Generator
  - async

+ JS Iterator遍历器

+ JS 相较更为传统的类定义Class

+ JS Decorator (类修饰器)

+ JS ArrayBuffer 二进制数据操作API