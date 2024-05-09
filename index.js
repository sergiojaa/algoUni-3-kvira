// 1. დაწერეთ პროგრამა რომელიც კონსოლში გამოპრინტავს რიცხვებს
// 0-დან 10-ის ჩათვლით.გამოიყენეთ while და for ციკლები
let number = 0;
while(number <= 10){
    console.log(number)
    number = number + 1
}
for(let number = 0;number <= 10;number++){
    console.log(number)
}
//2. დაწერეთ პროგრამა,რომელიც ბეჭდავს ლუწ რიცხვებს 
// 1-დან 20-მდე for loop-ის გამოყენებით.
for(let number = 2;number <= 20;number = number + 2){
    console.log(number)
}
// 3. დაწერეთ პროგრამა რომელიც სთხოვს მომხმარებელს შეიყვანოს რიცხვი 
// და დაბეჭდოს 'hello' იმდენჯერ რამდენსაც უდრის ეს შეყვანილი რიცხვი.
let number3 = prompt('enter a number')
for(let i = 0; i < number3; i++){
        console.log('hello');
}
// 4.დაწერეთ პროგრამა, რომელიც გამოთვლის რიცხვების ჯამს 1-დან 100-მდე 
// for loop-ის გამოყენებით და დაბეჭდავს შედეგს.

let task4 = 1;
for(let i = 0;i < 100; i++){
    task4 = task4 + i
}
console.log(task4)

//5. დაწერეთ პროგრამა,რომელიც გამოთვლის კენტი რიცხვების ჯამს,
// 1-დან 100-მდე და დაბეჭდავს შედეგს
let num5 = 0;
for (let i = 1; i <= 100; i += 2) {
    num5 += i;
}
console.log(num5); 


//6. დაწერეთ პროგრამა,რომელიც სთხოვს მომხმარებელს გამოიცნოს საიდუმლო
// რიცხვი 1-დან 10-მდე.განაგრძეთ გამოცნობის მოთხოვნა,სანამ ისინი სწორად გამოიცნობენ,
// while loop-ის გამოყენებით
let task66 = Math.floor(Math.random() * 10) + 1;
let task6 = Number(prompt('Guess the secret number (between 1 and 10):'));

while(task6 !== task66){
    console.log('Sorry, that\'s not the correct number.');
    task6 = Number(prompt('Guess again:'));
}

console.log('Congratulations! You guessed the secret number.');



