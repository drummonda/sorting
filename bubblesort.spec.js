describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles one item', function(){
    expect(bubbleSort([1])).toEqual([1]);
  })
  it('handles multiple items',function(){
    expect(bubbleSort([3,2,1]).toEqual([1,2,3]));
  })
  it('handles a complicated array',function(){
    expect(bubbleSort([56,40,82,12,100]).toEqual([12,40,56,82,100]));
  })
  it('handles an object array',function(){
    expect(bubbleSort([{ age: 4 }, { age: 8 }, { age: 2 }, { age: 9 }],
      function comparator (a, b) {
        if (a.age < b.age) return -1; // returning `-1` means "a goes before b"
        if (a.age > b.age) return 1;  // returning  `1` means "b goes before a"
        return 0; // returning 0 means "a and b are equivalent"
        }).toEqual([{ age: 2 }, { age: 4 }, { age: 8 }, { age: 9 }]))
  });
});
