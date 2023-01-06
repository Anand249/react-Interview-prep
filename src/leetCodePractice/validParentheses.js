const stack = [];
s = '(]'

for (let i=0; i<s.length; i++) {
    if (s[i] === '(') {
        console.log('1', s[i])
        stack.push(')')
    } else if (s[i] === '{') {
        stack.push('}')
    } else if (s[i] === '[') {
        stack.push(']')
    } else if (stack.pop() !== s[i]) {
        console.log('2', stack, s[i])
        return false
    }
} 
return !stack.length