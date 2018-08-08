## About
`Object` constructor から生成されたオブジェクトのkeyを全てスネークケース、又はキャメルケースに変換する関数を提供します
また、あるとたまに嬉しい `isPlainObject` も組み込んであります

## Install

Install with npm:

```sh
$ npm install --save case-keys
```

Install with yarn:

```sh
$ yarn add case-keys
```

## snakecaseKeys Usage
オブジェクトの中にあるキャメルケースのキーをスネークケースのキーに変換します

```js
import { snakecaseKeys } from 'case-keys';

a = {
  helloWorld: {
    ohMyGod: {
      soCrazy: 'hello',
      sorryMan: 0.8989,
    },
    okGood: {
      yeah: 3232,
    },
  },
  goodbuyWorld: {
    finish: 'world',
  }
}

snakecaseKeys(a);
/*
return
{
  hello_world: {
    ohMyGod: {
      soCrazy: "hello",
      sorryMan: 0.8989
    },
    okGood: {
      yeah: 3232
    }
  },
  goodbuy_world: {
    finish: "world"
  }
}
*/

snakecaseKeys(a, { deep: true });
/*
return
{
  hello_world: {
    oh_my_god: {
      so_crazy: "hello",
      sorry_man: 0.8989
    },
    ok_good: {
      yeah: 3232
    }
  },
  goodbuy_world: {
    finish: "world"
  }
}
*/
```

## camelcaseKeys Usage
オブジェクトの中にあるスネークケースのキーをキャメルケースのキーに変換します

```js
import { camelcaseKeys } from 'case-keys';

a = {
  hello_world: {
    ohMyGod: {
      soCrazy: "hello",
      sorryMan: 0.8989
    },
    okGood: {
      yeah: 3232
    }
  },
  goodbuy_world: {
    finish: "world"
  }
}

camelcaseKeys(a);
/*
return
{
  helloWorld: {
    ohMyGod: {
      soCrazy: "hello",
      sorryMan: 0.8989
    },
    okGood: {
      yeah: 3232
    }
  },
  goodbuyWorld: {
    finish: "world"
  }
}
*/

snakecaseKeys(a, { deep: true });
/*
return
{
  helloWorld: {
    ohMyGod: {
      soCrazy: 'hello',
      sorryMan: 0.8989,
    },
    okGood: {
      yeah: 3232,
    },
  },
  goodbuyWorld: {
    finish: 'world',
  }
}
*/
```

## isPlainObject Usage
`Object` constructor から生成された値の場合は **true** を返します
違った場合は **false** を返します

```js
import { isPlainObject } from 'case-keys';

function Dog(name, cry) {
  this.name = name;
  this.bark = function() {
    console.log(cry);
  };
}
var dog = new Dog('きなこ', 'わんわん');

// false
isPlainObject('');

// false
isPlainObject(dog);

// true
isPlainObject({});

// true
isPlainObject(Object.create(Object.prototype))
```
