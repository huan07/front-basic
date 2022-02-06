(function () {
  function myNew(constructor, ...args) {
    const context = Object.create(constructor.prototype);

    const result = constructor.apply(context, args);

    return typeof result === 'object' && result !== null ? result : context;
  }

  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  function getMessage() {
    return 'this is a message';
  }

  console.log('myNew =>', myNew(Person, 'yh', 32));
  console.log('new Person() =>', new Person('yh', 32));
  console.log('myNew getMessage =>', myNew(getMessage));
})();
