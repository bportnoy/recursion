// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = stringify(obj);
  return result;
};

function stringify(input){
  if (input === null) return "null";
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
  	case 'function':
  	  return null;
  	case 'undefined':
  	  return null;
  	default:
  	console.log("Invalid input: " + input);
  }
};

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
};

function stringifyObject(object){
	var string = "{";
	var size = _.size(object);
	for (var key in object){
	    if (typeof object[key] !== 'undefined' && typeof object[key] !== 'function'){
		  string = string.concat(stringify(key));
		  string = string.concat(":");
		  string = string.concat(stringify(object[key]));
		  if (size>1) string = string.concat(",");
		}
		size--;
	}
	string = string.concat("}");
	return string;
};