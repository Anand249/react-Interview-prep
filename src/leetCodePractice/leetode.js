var r = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
var n = [1, 5, 10, 50, 100, 500, 1000];
var ans = '';
var num = 58;

while(num > 0) {
    n.forEach((element, index) => {
        if(num >= element) {
          console.log('elemnt', element, index)
            ans += r[index];
            num -= n[index];
        }
    });
}