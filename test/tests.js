QUnit.test( "Example of basic QUnit unit test", function( assert ) {
    assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "valideDureeDuPret", function( assert ) {
    assert.equal(Validator.valideDureeDuPret(7), false);
    assert.equal(Validator.valideDureeDuPret(8), true);
    assert.equal(Validator.valideDureeDuPret(13), true);
    assert.equal(Validator.valideDureeDuPret(20), true);
    assert.equal(Validator.valideDureeDuPret(21), false);
});
