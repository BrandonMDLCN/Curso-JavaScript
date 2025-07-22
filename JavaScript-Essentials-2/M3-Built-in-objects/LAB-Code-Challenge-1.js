/* 
Scenario
Write a function that will draw m integers from 0 to n. Pass parameters m and n and two flags to the function:

the first determines whether the drawn numbers may be repeated;
the second one states if the returned array of numbers should be sorted.
Use the Set class.

Test your solution using the following code:

console.log(getRandomSet(10, 20, false, false));
console.log(getRandomSet(10, 20, false, true));
console.log(getRandomSet(10, 20, true, false));
console.log(getRandomSet(10, 20, true, true));
*/
let randomInteger = (min, max) => {
    let _min = Math.ceil(min);
    let _max = Math.floor(max);
    return Math.floor(Math.random() * (_max - _min + 1) + _min);
}

function getRandomSeto (mDrawIntegers, nMaxNumber, mayRepeat, ShouldSort)
{
    let valRet;
    if (mayRepeat)
    {
        valRet = [];
        for (let i = 0; i < mDrawIntegers; i++)
        {
            valRet.push(randomInteger(0,nMaxNumber));
        }
    }
    else
    {
        valRet = new Set();
        while(valRet.size!=10)
        {
            valRet.add(randomInteger(0,nMaxNumber))
        }
    }

    return ShouldSort ? [...valRet].sort((n1,n2)=>n1-n2) : [...valRet]
}
console.log(getRandomSeto(10, 20, false, false));
console.log(getRandomSeto(10, 20, false, true));
console.log(getRandomSeto(10, 20, true, false));
console.log(getRandomSeto(10, 20, true, true));


/*-------------------------------------------------------------------------------------------------------------*/

function getRandomSet(m, n, uniq, sorted) {
    let retVal = uniq ? new Set() : [];
    let push = (e) => uniq ? retVal.add(e) : retVal.push(e);
    let length = () => uniq ? retVal.size : retVal.length;

    for(;length() < m;) {
        push(Math.floor(Math.random() * Math.floor(n)));
    }

    return sorted ? [...retVal].sort((n1, n2) => n1 - n2) : [...retVal];
}
console.log(getRandomSet(10, 20, false, false));
console.log(getRandomSet(10, 20, false, true));
console.log(getRandomSet(10, 20, true, false));
console.log(getRandomSet(10, 20, true, true));