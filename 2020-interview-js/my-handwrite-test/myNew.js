(function() {
    function myNew(constructor, ...args) {

        const context = Object.create(constructor.prototype);

        const result = constructor.apply(context, args);

        return typeof result === 'object' && result !== null ? result : context;
    }

    // test x3
    console.warn('test myNew = = = = = = = = = = = = = = = = = = =');

    function Person(name, age) {
        this.name = name;
        this.age = age;
    }

    var test = myNew(Person, 'yh', 32);
    var person = new Person('yh', 32);

    function getMessage() {
        return 'this is a message';
    }

    console.log('myNew =>', test);
    console.log('new Person() =>', person);
    console.log('myNew getMessage =>', myNew(getMessage));

})();


