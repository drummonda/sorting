function bubbleSort(){
  const args = Array.from(arguments);
  const arr = args[0];
  const fn = (args[1] ? args[1] : 0);
  let isSwapped = false;
  while(!isSwapped){
    isSwapped = true;
    for(let i = 0; i < arr.length; i++){

      if(typeof(arr[i]) === "object") {
        if(fn.call(arr[i], arr[i+1])) {
          const temp = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = temp;
          isSwapped = false;
        }
      }
      else {
        if(arr[i]> arr[i+1]) {
          const temp = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = temp;
          isSwapped = false;
        }
      }

    }
  }
  return arr;
}
