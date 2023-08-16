

##### **Describe:** countToBy()
```javascript
Test 1: "It should return NaN if either input submission is empty"
Code:
  const countTo = "";
  const countBy = "";
  countUpBy(countTo, countBy);
Expected Output: NaN

Test 2: "It should return one number, the number given, if countTo and countBy are the same."
Code:
  const countTo = 5;
  const countBy = 5;
  countUpBy(countTo, countBy);

Expected Output: 5

Test 3: "It should return numbers 1 through 5, if countTo is 5 and countBy is 1."
Code:
  const countTo = 5;
  const countBy = 1;
  countUpBy(countTo, countBy);
Expected Output: 1, 2, 3, 4, 5

Test 4: "It should return NaN if user inputs anything other than a number for countTo or countBy."
Code:
  const countTo = 'string';
  const countBy = 'string';
  countUpBy(countTo, countBy);
Expected Output: NaN

Test 5: "It should return numbers 1 through 5, if countTo is '5' and countBy is '1'."
Code:
  const countTo = '5';
  const countBy = '1';
  countUpBy(countTo, countBy);
Expected Output: 1, 2, 3, 4, 5

Test 6: "It should return null if countTo value is smaller than countBy value."
Code:
  const countTo = 1;
  const countBy = 5;
  countUpBy(countTo, countBy);
Expected Output: null

Test 7: "It should return null if either countTo or countBy are negative values."
Code:
  const countTo = -1;
  const countBy = -5;
  countUpBy(countTo, countBy);
Expected Output: null

Test 8: "It should return an array, counting by 1 up to countTo, if only the countTo number is input."
Code:
  const countTo = 5;
  countUpBy(countTo);
Expected Output: 1, 2, 3, 4, 5

Test 9: "It should return an array counting by countBy up to countTo, if a floating point number is used for input."
Code:
  const countTo = 5;
  const countBy = 1.5;
  countUpBy(countTo, countBy);
Expected Output: 1.5, 3, 4.5

Test 10: "It should return null if no input is put into the function call."
Code:
  countUpBy();
Expected Output: null

```