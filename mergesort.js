function split(arr){

  if (arr.length === 0){
    return [];
  } else if (arr.length === 1){
    return arr;
  }

  let middle = Math.floor((arr.length + 1) / 2);
  return [arr.slice(0, middle),arr.slice(middle)];

}

function merge(first_arr, second_arr) {

  if(!first_arr.length && !second_arr.length) {
    return [];
  }

  let first = 0;
  let second = 0;
  let result = [];

  while(result.length < first_arr.length + second_arr.length) {
    if(first_arr[first] && second_arr[second]) {
      if(first_arr[first] > second_arr[second]) {
        result.push(second_arr[second]);
        second++;
      }
      else {
        result.push(first_arr[first]);
        first++;
      }
    }
    else if(!first_arr[first]) {
      result.push(second_arr[second]);
      second++;
    }
    else if(!second_arr[second]) {
      result.push(first_arr[first]);
      first++;
    }
  }

  return result;

}

function mergeSort(arr){
  //first step: split until it is singular
  //second step: merge;
  if(arr.length === 1 || arr.length === 0){
    return arr;
  }
  else{
    let array = split(arr);
    let first_arr = array[0];
    let second_arr = array[1];
    return merge(mergeSort(first_arr), mergeSort(second_arr));
  }
}
