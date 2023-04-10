function checkBrackets() {
    var input = document.getElementById("input").value;
    var stack = [];
    var result = document.getElementById("result");
    var isValid = true;
    
    for (var i = 0; i < input.length; i++) {
      var bracket = input[i];
      
      if (bracket === "(" || bracket === "[" || bracket === "{") {
        stack.push(bracket);
      } else if (bracket === ")" || bracket === "]" || bracket === "}") {
        if (stack.length === 0) {
          isValid = false;
          break;
        }
        
        var lastBracket = stack.pop();
        
        if ((lastBracket === "(" && bracket !== ")") || 
            (lastBracket === "[" && bracket !== "]") ||
            (lastBracket === "{" && bracket !== "}")) {
          isValid = false;
          break;
        }
      }
    }
    
    if (stack.length > 0) {
      isValid = false;
    }
    
    if (isValid) {
      result.innerText = "YES!";
      result.className = "valid";
    } else {
      result.innerText = "NO!";
      result.className = "invalid";
    }
  }