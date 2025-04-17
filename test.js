// Test functions for life path calculation
function sumDigits(num) {
    if (num < 10) return num;
    return String(num).split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}

function calculateLifePath(birthdate) {
    const dateObj = new Date(birthdate);
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    
    let sum = sumDigits(day) + sumDigits(month) + sumDigits(year);
    
    if (sum === 11 || sum === 22 || sum < 10) {
        return sum;
    }
    
    return sumDigits(sum);
}

// Test with a few dates
console.log('Testing life path calculations:');
console.log('January 15, 1990 = Life Path', calculateLifePath('1990-01-15'));
console.log('May 27, 1985 = Life Path', calculateLifePath('1985-05-27'));
console.log('December 31, 1999 = Life Path', calculateLifePath('1999-12-31')); 