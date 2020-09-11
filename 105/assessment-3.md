I think the pace of the program so far is good. I haven't yet been overwhelmed by anything we've learned and some of my prior programming experience has helped a lot. I worry for others that don't have prior programming experience because in the last 3 weeks we've basically learned everything I've learned in three years.

Functions are useful to organize your code and make it more readable. If you have a function called checkOddOrEven, when reading through the code you know exactly what it does. instead of having all the lines to check odd or even mixed in with the main code, you have a one liner that sums everything up - it's like the ultimate comment. And if you're worried about line count, and function used more than once can decrease the total lines in the program.

In global scope, any variables defined can be accessed by any code written. However, if a variable name is reused, the most recently defined one will be used. for example:
```
let x = 1;
   function print()
   {
      let x = 2;
      console.log(x);
   }
   ```
  prints 2. 
  however, once the function print is finished, the variable x inside of the function is forgotten about, and the global x prevails.
  ```
  let x = 1;
   function print()
   {
      let x = 2;
      console.log(x);
   }
   console.log(x);
  ```
  will print
  2 (called from inside the function)
  1 (called from outside the function)
  
  Some programming languages, such as Java, will not allow you to have two variables with the same name: the above code will not compile (of course you'll need to edit the code a little bit first to put it in Java syntax).
