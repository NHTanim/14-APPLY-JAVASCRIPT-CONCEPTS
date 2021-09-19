
// 10! = 1*2*3*4*5*6*7*8*9*10
// 0! = 1
// 2! = 1*2
// 3! = 1*2*3
// 4! = 1*2*3*4

// 5! = 4!*5  ----------cause 1*2*3*4 = 4!
// 6! = 5!*6

// 6! = (6-1)! * 6 ----------- cause (6-1)! = 5!

// n! = (n-1)! * n

function factorial(n) {
    if (n == 0) {
        return 1;
    } else{
        return n * factorial (n-1); // n! = (n-1)! * n
    }

}

var result = factorial (7);
console.log(result);