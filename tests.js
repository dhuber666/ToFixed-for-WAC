/**
 * Protoype:
 * function myToFixed(value, decimal) {
	we expect value to be 1.005 => transfer to string => "1.005"
	now take "1.005" transform => "100.5" (move decimal places to right)
	do the rounding and stuff and convert back to string
	return the fixed number as string
 }




 **/

/**
 * Tests:
 **/

// Variables for tests
var fixedValue = 1.005;

 tests({

 	
 	

 	'It should transfer the number value into a string and rerturn it': function() {
 		var testString = myToFixed(fixedValue, 2);
 		eq(typeof testString === 'string', true);
 	},
 	'it should transfer the decimal point x places to the right': function() {
 		var testString = myToFixed(fixedValue, 2);
 		eq(testString === '100.5', true);

 		var anotherTestValue = 10.235;
 		var testString = myToFixed(anotherTestValue, 2);
 		eq(testString === '1023.5', true);

 		debugger;
 		var yetAnother = 0.615;
 		var testString = myToFixed(yetAnother, 2);
 		eq(testString === '61.5', true);
 	}
 })