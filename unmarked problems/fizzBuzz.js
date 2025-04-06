/* write a function that prints all numbers from 1 to 100, except for numbers divisible by 3. For numbers divisible by 3, print "Fizz" instaed of the number, and for numbers divisible by 5, print "Buzz. For numbers that */

function printResults(results){
    for (counter=0; counter < 100; counter++){
        if (results % 3 === 0) console.log("fizz");
        else if (results % 5 === 0) console.log("buzz");
        else console.log("results");
    }
}
