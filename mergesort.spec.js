describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([])).toEqual([]);
  });
  it('splits an array with one element', function(){
    expect(split([1])).toEqual([1]);
  })
  it('splits an array with more than one element', function(){
    expect(split([1,2,3,4])).toEqual([[1,2],[3,4]]);
  })
  it('splits an array with an odd number of elements', function(){
    expect(split([1,2,3,4,5])).toEqual([ [1,2,3], [4,5] ]);
  })
});

describe('Merge Array function', function() {
  it('is able to merge two empty arrays', function() {
    expect(merge([],[])).toEqual([]);
  });
  it('merges two arrays with one element each', function(){
    expect(merge([1],[2])).toEqual([1,2]);
  })
  it('merges an array with more than one element', function(){
    expect(merge([1,2],[3,4])).toEqual([1,2,3,4]);
  })
  it('merges an array with an odd number of elements', function(){
    expect(merge([1,2,3],[4,5])).toEqual([1,2,3,4,5]);
  })
});

describe('Merge Sort function recursive', function(){
 it('is able to mergesort an empty array', function(){
   expect(mergeSort([])).toEqual([]);
 });
 it('is able to mergesort an array with one element', function(){
   expect(mergeSort([4])).toEqual([4]);
 });
 it('is able to mergesort multiple elements in an array', function(){
   expect(mergeSort([6,3,8,22,18,5])).toEqual([3,5,6,8,18,22])
 });
 it('is able to mergesort multiple elements in an array of odd length', function(){
   expect(mergeSort([6,3,8,22,18,5,1])).toEqual([1,3,5,6,8,18,22])
 });
 it('is able to mergesort long arrays', function(){
   expect(mergeSort([20,19,18,17,16,15,14,13,12,11,10])).toEqual([10,11,12,13,14,15,16,17,18,19,20])
 });
})
