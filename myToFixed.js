/**
 * Protoype:
 * function myToFixed(value, decimal) {
	we expect value to be 1.005 => transfer to string => "1.005"
	now take "1.005" transform => "100.5" (move decimal places to right)
	do the rounding and stuff and convert back to string
	return the fixed number as string
 }


 **/


function myToFixed(value, decimal) {
	var valueString = value.toString(); // => "1.005"
	var myRegex = new RegExp("(^($|[0]))*(\.)([0-9]{" + decimal +"})");
	var fixedNumber = valueString.replace(myRegex, "$4$3");

	return fixedNumber.toString();
}