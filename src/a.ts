interface Foo {
  bar: number;
  bas: string;
}

const foo = <Foo>{
  bar: 1,
  bas: '2'
}

function handler(event: Event) {
  const element = event as HTMLElement; // Error: 'Event' 和 'HTMLElement' 中的任何一个都不能赋值给另外一个
}

let foe: any;
let bar = <string>foe; // 现在 bar 的类型是 'string'
bar = 1

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;