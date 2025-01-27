// we can declare the variable in javascript using keywords let | var |  const .

// Using const 
  const variable=5;
  console.log(variable);
  //variable= 10; // not possible because  we have declared it as const 
  console.log(variable); // this will give error

  //  Using let 
   let variable1=5;
   console.log(variable1);
   variable1 =10; // values can easily be reinitialized if it declared by using let or var.
   console.log(variable1)

    // Using Var
    var variable2=5;
    console.log(variable2);
    variable2 =10;
    console.log(variable2)

    // Difference between let and var is that let is newer and support block level scope.

   // Note: prefer to use let over var