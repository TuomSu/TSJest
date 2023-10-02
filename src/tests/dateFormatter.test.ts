import { test, describe, expect } from '@jest/globals'; // https://jestjs.io/docs/expect
import { strict as assert } from 'node:assert';         // https://nodejs.org/api/assert.html

import { finnishDateString } from '../dateFormatter';   // the function to be tested


//test('remove this test when writing your own tests', () => {
//    assert.fail('no tests written');
//});

test('testing if dayname is translated to Finnish', () =>{
const date = new Date('2023-10-02');
const result = finnishDateString(date);
const dayname = result.substring(0,9);
assert.equal(dayname, 'maanantai');
});

test('testing if monthname is translated to Finnish', () =>{
    const date = new Date('2023-10-02');
    const result = finnishDateString(date);
    const month = result.slice(-14,-5);
    assert.equal(month, 'lokakuuta');
    });

test('testing daynumber', () =>{
    const date = new Date('2023-10-02');
    const result = finnishDateString(date);
    const day = result.substring(10, 11);
    assert.equal(day, '2');
    });
        
test('testing year', () =>{
    const date = new Date('2023-10-02');
    const result = finnishDateString(date);
    const year = result.slice(-4);
    assert.equal(year, '2023');
    });
