//Create a Revealing Module Pattern that will have the following data and methods:

//data
//scores 65, 76, 100, 88, 17, 55

//methods
// 1. finds the sum of all scores

// 2. finds the avg of all scores

// 3. finds the highest score

// 4. finds the lowest score

// 5. generates a random score

// 6. finds the number of passing scores above 70

// 7. finds the first score in the list 
// 8. finds the last score in the list 
// 9. generates a new score list with a 5% increase for each score 
// 10.generates a list of scores that are odd numbered


var myModule = (function(){
    var scores = [65, 76, 100, 88, 17, 55];
    
    function findSum(){
        var sum = 0;
        for(i=0;i<scores.length;i++){
        
            sum += scores[i];

        }
        return sum;
    }
    function findAvg(){
        var sum = 0;
        for(i=0;i<scores.length;i++){
        
            sum += scores[i];

        }
        return sum/scores.length;
    }

    function findHigh(){
        var high = 0;
        for (i=0;i<scores.length;i++){
            if(scores[i]>high){
                high = scores[i]
            }
        }
        return high;
    }

    function findLow(){
        var low = 100000;
        for(i=0;i<scores.length;i++){
            
            if(scores[i]<low){
                low = scores[i]
            }
        }
        return low
    }

    function findRand(){
        var random = Math.floor(Math.random()*scores.length);
        return scores[random];
    }

    function findPass(){
        var passArr = []
        for(i=0;i<scores.length;i++){
            if(scores[i]>= 70){
                passArr.push(scores[i])
            }
        }
        return passArr.length;
    }

    function findFirst(){
        return scores[0];
    }

    return{
        findSum: findSum,
        findAvg: findAvg,
        findHigh: findHigh,
        findLow: findLow,
        findHigh: findHigh,
        findRand: findRand,
        findPass: findPass,
        findFirst: findFirst,


    }
}())
console.log(myModule.findFirst())