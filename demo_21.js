/**
 * JS 预编译与运行原理
 */

// // Demo 1
// console.log(a); //undefined，这个词的意思更准确的说是未初始化
// a=1;
// var a=2;  // 没有这一行的话,代码报错

// // Demo 2
// //预编译：GO -> {fn: function () {}}
// //解释执行：{fn()}
// function fn (a) {
//   //执行函数fn前预编译：AO -> {a: function () {}, b: undefined[因为函数b()为函数表达式]，d: function () {}}
//   console.log(a); //控制台显示function a () {}
//   var a = 123;
//   console.log(a); //控制台显示123
//   function a () {};
//   console.log(a); //控制台显示123
//   console.log(b); //控制台显示undefined
//   var b = function () {};
//   console.log(b); //控制台显示function () {}
//   console.log(d); //控制台显示function d () {}
//   function d () {};
// }
// fn(1); 

// // Demo 3
// // //预编译：GO -> {test: functiong () {}}
// // //解释执行：{test()}
// function test (a, b) {
//   //执行函数test前预编译：AO -> {a: 1[因为外部实参传入], b: function () {},d:function () {}}
//   console.log(a); //控制台显示1
//   a = 3;
//   console.log(b); //控制台显示function b () {}
//   b = 2;
//   //解释执行函数test：{b: 2}
//   console.log(b); //控制台显示2
//   function b () {};
//   function d () {};
//   console.log(b);  //控制台显示2，因为b已是变量并被赋值
//   //解释执行函数test：{d: function () {}}
//   console.log(d);
// }
// test(1); 

// // //预编译：GO -> {glob: undefined, test: function () {}}
// var glob = 100;
// //解释执行：｛glob = 100; test()｝
// function test () {
//   console.log('执行第一个test()');
// }
// var glob = 100;
// function test () {
//   console.log('执行第二个test()');
//   //执行函数test前开始预编译：AO -> {glob = function () {}}
//   console.log(glob); //控制台显示function glob () {};
//   glob = 200
//   function glob() {};
//   //解释执行函数test：{glob = 200}
//   console.log(glob); //控制台显示200
//   var glob;
//   console.log(glob); //原理同4，控制台显示200
// }
// // function test () {    //这个函数存在的话，test指向这个函数
// //   console.log('执行第三个test()');
// // }
// test();

// //预编译：GO -> {bar: function () {}} 
// //解释执行：{bar()} 
// function bar () { 
//   //执行函数bar()前预编译：AO -> {foo: function () {}} 
//   return foo; 
//   //解释执行函数bar()：{foo()} 
//   foo = 10; 
//   function foo () {} 
//   var foo = 11; 
// } 
// console.log(bar());//控制台显示function foo () {}

//预编译：GO -> {bar: function () {}} 
//解释执行：{bar()} 
function Bar () { 
  //执行函数bar()前预编译：AO -> {foo: function () {}} 
  foo = 10; 
  //解释执行函数bar()：{foo: 10} 
  function foo () {} 
  var foo = 11; 
  //解释执行函数bar()：{foo: 11} 
  return foo; 
}
console.log(Bar()); //控制台显示11 

// var a = 32;
// function b(x, y, a) {
//   arguments[2]=10;
//   console.log(a);
// }
// b(1,2,3);
// console.log(a);