// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = "";
  if 
  


  result = (stack === null) ? result : stringifyJSON(result);

  return result;
};

function stringifyPrimitive(input){

}

function stringifyArray(array){
	var string = "[";
	string.concat(array.toString());
	string.concat("]");
	return string;
}