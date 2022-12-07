// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called.', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello("World")).toBe("Hello, World!");
    });
    it('should return "true" when executed', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "false" when executed', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

describe('isFive', function (){
    it('should return "true" when executed', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return "true" when executed', function () {
        expect(isFive("5")).toBe(true);
    });
    it('should return "boolean" no matter the input', function () {
        expect(typeof isFive()).toBe('boolean');
    });
});

describe('isEven', function (){
    it('should return "boolean" no matter the input', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return "true" when executed with isEven(2)', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return "true" when executed with isEven(-4)', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return "false" when executed with isEven(3)', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return "false" when executed isEven("banana")', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return "true" when executed isEven("8")', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return "false" when executed isEven(Infinity)', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return "false" when executed isEven(true)', function () {
        expect(isEven(true)).toBe(false);
    });
    it('should return "false" when executed isEven(false)', function () {
        expect(isEven(false)).toBe(false);
    });
});