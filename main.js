var n1 = 2
var n2 = 5

// 1
var equal = n1 === n2 ?
    'BOOM' : 'TRY AGAIN';
console.log(equal);

// 2
console.log("🚀 ~ file: main.js:18 ~ n2", n1 + n2)

// 3
console.log("🚀 ~ file: main.js:18 ~ n2", n1 * n2)

// 4
var weekDay = 7;
if (weekDay === 1) {
    console.log('good week')
} else if (weekDay > 4) {
    console.log('happy weekend!')
} else {
    console.log('good day')
}

// 5
var monthDay = 31;
if (monthDay === 1) {
    console.log('good month')
} else if (monthDay > 1 && monthDay < 10) {
    console.log('start work')
} else if (monthDay === 10) {
    console.log('get salary')
} else if (monthDay > 10 && monthDay < 21) {
    console.log('BE HAPPY')
} else if (monthDay > 20 && monthDay < 31) {
    console.log('the end')
} else {
    console.log('BOOM')
}

// 6
var holidayName = 'suckot';
var holiday = holidayName === 'purim' ?
    'happy purim' : holidayName === 'passover' ?
        'clear home' : holidayName === 'shavoout' ?
            'eat milk' : 'build sucka';
console.log("🚀 ~ file: main.js:42 ~ holdiay", holiday)

// 7
var palyer1_name = 'David';
var palyer1_score = 10;
var palyer2_name = 'Isik';
var palyer2_score = 15;

if (palyer1_score > palyer2_score) {
    console.log("🚀 ~ file: main.js:44 ~ palyer1_name", "winner name: " + palyer1_name + " score: " + palyer1_score)
} else if (palyer1_score < palyer2_score) {
    console.log("🚀 ~ file: main.js:44 ~ palyer2_name", "winner name: " + palyer2_name + " score: " + palyer2_score)
} else {
    console.log('tie')
}

// 8
var n3 = 1;
var check = n3 % 2 === 0 ?
    'even' : 'odd';
console.log("🚀 ~ file: main.js:58 ~ check", check)

//  9
if (n1 > n2) {
    console.log("🚀 ~ file: main.js:2 ~ n1", "the bigger number is: " + n1)
} else if (n1 < n2) {
    console.log("🚀 ~ file: main.js:2 ~ n2", "the bigger number is: " + n2)
} else {
    console.log('even')
}

// 10
var i1 = 28;
var i2 = 59;
var i3 = 47;
var i4 = 98;
var i5 = 23;
var i6 = 37;
var i7 = 83;
console.log("🚀 ~ file: main.js:70 ~ i1", (i1 + i2 + i3 + i4 + i5 + i6 + i7) / 7)

// 11
var personName = 'sami';
var personAge = 25;
var personKm = 30;
if (personAge >= 30 && personAge <= 50) {
    if (personKm >= 30 && personKm <= 50) {
        console.log("🚀 ~ file: main.js:79 ~ personName", "you are in a great fit: " + personName + " " + personAge)
    } else if (personKm >= 10 && personKm < 30) {
        console.log("🚀 ~ file: main.js:79 ~ personName", "you are in a good fit: " + personName + " " + personAge)
    } else {
        console.log("🚀 ~ file: main.js:79 ~ personName", "you have to get better: " + personName + " " + personAge)
    }
} else if (personAge >= 18 && personAge < 30) {
    if (personKm >= 25 && personKm <= 50) {
        console.log("🚀 ~ file: main.js:79 ~ personName", "you are in a great fit: " + personName + " " + personAge)
    } else {
        console.log("🚀 ~ file: main.js:79 ~ personName", "you have to get better: " + personName + " " + personAge)
    }
}

// 12
var hour = 12;
var time = hour >= 5 && hour <= 11 ?
    'בוקר טוב' : hour >= 12 && hour <= 17 ?
        'צהריים טובים' : hour >= 18 && hour <= 23 ?
            'ערב טוב' : 'לילה טוב';
console.log("🚀 ~ file: main.js:99 ~ time", time)
