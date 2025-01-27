let starting1=0;  
let starting2=1;
let sum=starting1+starting2;
console.log(starting1,starting2,sum);
//Above lines are to print initial 3 numbers of the series 

range=10;   //how many numbers you want in series 

for (let i=3;i<range;i++)  // loop to range the numers you want in series.
{
   starting1=starting2;
   starting2=sum;
   sum = starting1+starting2;
   console.log(sum);
}