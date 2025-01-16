//Create function that checks if number is prime
let n = 10
prime: for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i%j == 0) {
        continue prime; 
        }
    }
    alert(`${i} is a prime`);
}
