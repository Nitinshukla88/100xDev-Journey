## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


// Code 

var count = 0;

function setTimeOutPolyFill(){
    setTimeout(()=>{
        console.log(count);
        count++;
        setTimeOutPolyFill();
    }, 1000);
}

setTimeOutPolyFill();































































(Hint: setTimeout)