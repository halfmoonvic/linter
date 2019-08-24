### [babel-eslint](https://github.com/babel/babel-eslint)

ESLint's default parser and core rules only support the latest final ECMAScript standard and do not support experimental (such as new features) and non-standard (such as Flow or TypeScript types) syntax provided by Babel. babel-eslint is a parser that allows ESLint to run on source code that is transformed by Babel.  
parser: eslint 中 eslint 只会解析 已经进入到 ECMAScript 标准的特性，而像是一些装饰器则会解析错误的。而 babel-eslint 则可以解析那些 实验性质的特性
