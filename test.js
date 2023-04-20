const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.206 dollars", function(){
    // use the function like it's supposed to be used
    const dollar = fromEuroToDollar(3.5);

    // if 1 euro is 1.206 dollars, then 3.5 euros should be (3.5 * 1.206)
    const expected = 3.5 * 1.206; 

    // this is the comparison for the unit test
    expect(fromEuroToDollar(3.5)).toBe(4.2);

});

test("One Yen should be 0.0074 dollars", function(){
    const dollars = fromDollarToYen(3.5);
    const expected = 3.5 * 0.0074;
    expect(dollars).toBe(expected); 
});

test("One Yen should be 0.006 in England Pound", function(){
    const yen = fromYenToPound(3.5);
    const expected = 3.5 * 0.006;
    expect(yen).toBe(expected);
});
