var rect = require('./rectangle');

function solve(a,b){
    rect(a,b,(error,rectangle)=>{
        if(error){
            console.log("ERROR :",error.message);
        }
        else{
            console.log(rectangle.area());
            console.log(rectangle.perimeter());
        }
    });
}
console.log("asdgasgasdg");
solve(2,3);