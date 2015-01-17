// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = "";
  
  //result = (stack === null) ? result : stringifyJSON(result);

  return result;
};

function stringify(input){
  switch (typeof input){
  	case 'number':
  	  return input.toString();
  	  break;
  	case 'boolean':
  	  return input.toString();
  	  break;
  	case 'string':
  	  return '\"' + input + '\"';
  	  console.log("imma string you!");
  	  break;
  	case 'object':
  	  if (_.isArray(input)) return stringifyArray(input);
  	  else return stringifyObject(input);
  	  break;
  	default:
  	console.log("Invalid input: " + input);
  }
}

function stringifyArray(array){
	var string = "[";
	var length = array.length;
	for (var i = 0; i<length; i++){
	  var value = stringify(array[i]);
	  string = string.concat(value);
	  if (i < length-1) string  = string.concat(",");
	}
	string = string.concat("]");
	return string;
}

function serializeObject(object){
	var string = "";
	return string;
}

var testobj = {x:5,y:"string"};
var testarr = [1,3,"hello"];

console.log(testobj);
console.log(stringifyArray(testarr));
console.log(JSON.stringify(testarr));
console.log(true.toString());
console.log(JSON.stringify(true));
console.log(stringify("hello"));
console.log("hello");