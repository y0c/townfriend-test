/**
 * Created by Ziso on 2014. 3. 2..
 */
var client = require("webdriverjs").remote();
var assert = require("assert");
var Mocha = require('Mocha');
// create a command the returns the current url and title as one result
// just to show an example

describe( 'homePage' , function(){
    it( 'test' , function(){
        assert.equal( '1' , '12' );
    })
})
