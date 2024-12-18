var isMatch = function(s, p) {

    const firstD = s.split('');

    const secondD = p.split('');
    console.log(secondD);

    console.log(firstD);
    if(s === p) {
        return true;
    }else {
        return false;
    }
};

const result = isMatch("aa","a*");

console.log(result);