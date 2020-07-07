exports.convertStrToArrNum = function(val, splitOf) {
    const newArr = [];
    if(typeof val === 'string'){
      var arr = val.split(splitOf);
      for(let i=0; i<arr.length; i++) {
        if(+arr[i]){
          newArr.push(parseFloat(arr[i]));
        } else {
          newArr.push(arr[i]);
        }
      }
      return newArr;
    } else if(Array.isArray(val)){
      for(let i=0; i<val.length; i++) {
        
        if(+val[i]){
          newArr.push(parseFloat(val[i]));
        } else {
          newArr.push(val[i]);
        }
      }
      return newArr;
    } else {
      return val;
    }
  }
    