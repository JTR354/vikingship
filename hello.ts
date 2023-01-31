const a = '123'

const hello = (name: string) => {
  return a
}

type IAdd = (name: string, age: number) => string

const add:IAdd = (n,a) => n + a

function add2(n: string,a: number) {
  return n + a
}


add('1',2)

const t1: [] = []


/**
 * 泛型 generics 好像只能写在function 类上面
 * 泛型就是类型的变量
 * 泛型还可以约束 extends
 * 
 * 泛型 就是在自由和约束 找平衡
 */
type Length = {length:number}

interface IA<T> {
  age: T
}

type IA2<T> = (a: T) => T

class A3<T> {
  age:T
  constructor(a:T) {
    this.age = a
  }
}

function A4<T extends Length> (name: T) {
  return name
}

const A5 = async <T>(n:T) => n;

A4('str')
A4([1,2])
A4({length: 1})


console.log(123);

// Array is a interface

Array.isArray

type NameR = () => string | number

function getName (input: number | string):number {
  if(typeof input === 'string') {
    return input.length
  }
  return input;
}

console.log(666);


jQuery('root').add('123')

const v:Viking = (str) => ({h2: () => {}})

/**
 * .d.ts 全局声明文件
 */


function func(foo: number, bar: true): string;
function func(foo: number, bar?: false): number;
function func(foo: number, bar?: boolean): string | number {
  if (bar) {
    return String(foo);
  } else {
    return foo * 599;
  }
}