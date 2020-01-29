let i=0;
let j=0;
export default function diamond(numOfRow){
//check number is less than or equal to 2 and greater than or equal to 10
  if(numOfRow=>2 && numOfRow<=10) {
      // first half of diamond
      for(i=0;i<numOfRow;i++)    {
        for(j=0;j<numOfRow;j++){
          if(j<numOfRow-i){
              process.stdout.write(" ");
          }else{
              process.stdout.write(" *");
          }
          
        }
      //second half of diamond
      for(i=0;i<numOfRow;i++)       {
        for(j=numOfRow;j>0;j--){
          for (j = numOfRow; j > 0; j--) {
            if (j >= numOfRow - i) {
              process.stdout.write(" ");
            } else {
            process.stdout.write(" *");
            }
          }
        }
      }else{
      console.log(" Please enter correct number (number should be >2 and <10 )");
      }
return true;
}
