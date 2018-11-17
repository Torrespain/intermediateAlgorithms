let a="[]"
let b="()"
let c="{}"

validMath = (start) => {
  console.log(start)
  
  if(start.length === 0) {
    console.log('true') 
    return ("123")
  }
  
  else if(start.indexOf(a)>-1) {
    start=start.split(a).join('');
    validMath(start);
  }
  else if (start.indexOf(b)>-1) {
    start=start.split(b).join('');
    validMath(start);
  }

  else if (start.indexOf(c)>-1) {
    start=start.split(c).join('');
    validMath(start);
  }

  else {
    console.log("false")
    return false
  }

}


validMath("[[]{}]")