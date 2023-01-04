const conversionArray = [
    { k: 1000, v: 'M' },
    { k: 900, v: 'CM' },
    { k: 500, v: 'D' },
    { k: 400, v: 'CD' },
    { k: 100, v: 'C' },
    { k: 90, v: 'XC' },
    { k: 50, v: 'L' },
    { k: 40, v: 'XL' },
    { k: 10, v: 'X' },
    { k: 9, v: 'IX' },
    { k: 5, v: 'V' },
    { k: 4, v: 'IV' },
    { k: 1, v: 'I' }
];
var ans = '';
var num = 58

while (num > 0) {
    const numeric = conversionArray.find(el => el.k <= num);
    console.log(numeric)
    ans += numeric.v;
    num -= numeric.k;
}
