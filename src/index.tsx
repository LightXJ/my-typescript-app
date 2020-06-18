import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("example")
);

interface Foo {
  bar: number;
  bas: string;
}

const foo = {} as Foo;
foo.bar = 123;
foo.bas = 'hello';