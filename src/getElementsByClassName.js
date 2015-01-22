// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className){
  var currentNode = document.body;
  var matches = [];
  var walkAndPush = function(className, node){
    if (node.classList){
      if (node.classList.contains(className)) matches.push(node);
    }
    node = node.childNodes[0];
    while(node){
        walkAndPush(className,node);
        node = node.nextSibling;
    }
  };
  walkAndPush(className,currentNode);
  return matches;
};

