

##### **Describe:** countUpBy()
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
Expected Output: 5

Test 3: "It should return numbers 1 through 5, if countTo is 5 and countBy is 1."
Code:
  const countTo = 5;
  const countBy = 1;
Expected Output: 1, 2, 3, 4, 5

Test 4: "It should return NaN if user inputs anything other than a number for countTo or countBy."
Code:
  const countTo = 'string';
  const countBy = 'string';
Expected Output: NaN

Test 5: "It should return numbers 1 through 5, if countTo is '5' and countBy is '1'."
Code:
  const countTo = '5';
  const countBy = '1';
Expected Output: 1, 2, 3, 4, 5

Test 6: "It should return null if countTo value is smaller than countBy value."
Code:
  const countTo = 1;
  const countBy = 5;
Expected Output: null
```