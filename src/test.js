console.log('-- test --');

const decorate = arg => Comp => {
  return class C {
    constructor() {
      new Comp();
      console.log('ccccccc');
    }
    say() {
      console.log(`i am ${arg}`);
    }
  };
};

@decorate('argarg')
class Test {
  constructor() {
    console.log('comp');
  }
}

let aha = new Test();
aha.say();
