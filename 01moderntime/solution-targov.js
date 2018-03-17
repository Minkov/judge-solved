const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

// const test = `4
// Bay Tele, the big Rik
// m
// 3
// salatka,rakia,salatka
// Master Windu
// m
// 2
// The Force,Purple Lightsabers
// Aunt Penka
// f
// 3
// rakia,salatka,salatka
// Uncle Gosho
// m
// 2
// rakia,salatka`.split('\n');

const test = `6
Bay Rik, the big Tele
m
2
chalga,cars
Anakin Skywalker
m
2
The Force,Galaxy Domination
Wonder Woman
f
3
heels,Ares,world peace
Batman
m
3
Beating bad guys,technology,world peace
Jane
f
3
heels,cars,chalga
Harmayani
f
3
books,learning,magic`.split('\n');

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const peopleLen = +gets();

class Person {
    constructor(name, gender, numInteresets, interests) {
        this.name = name;
        this.gender = gender;
        this.numInteresets = numInteresets;
        this.allInteresets = new Map();
        this.setInteresets(interests);
    }

    setInteresets(interests) {
        const interest = interests.split(',');
        
        interest.forEach((element) => {
            if (!this.allInteresets.has(element)) {
                this.allInteresets.set(element, 1);
            } else {
                const count = this.allInteresets.get(element);
                this.allInteresets.set(element, count + 1);
            }
        });
    }    
}

const boyz = [];
const girlz = [];
for (let i = 0; i < peopleLen; i += 1) {
    const name = gets().split(' ').join(',');
    const gender = gets();
    const numInterests = +gets();
    const interesets = gets();
    const person = new Person(name, gender, numInterests, interesets);
    if (gender === 'm') {
        boyz.push(person);
    } else {
        girlz.push(person);
    }
}

const match = (boy, girl) => {
    let matches = 0;
    boyInteresets = boy.allInteresets;
    girlInterests = girl.allInteresets;
    boyInteresets.forEach((boyCount, boyInterest) => {
        girlInterests.forEach((girlCount, girlInterest) => {
            if (boyInterest === girlInterest) {
                if (boyCount === girlCount) {
                    matches += boyCount*girlCount;
                }
               // matches += 1;
            }
        });
    });
    return {
        boyName: boy.name,
        girlName: girl.name,
        matches
    }
}


const results = [];
boyz.forEach((boy) => {
    girlz.forEach((girl) => {
        results.push(match(boy, girl));
    });
});

results.sort((a, b) => {
    if (a.matches > b.matches) {
        return -1;
    } else if (a.matches < b.matches){
        return 1;
    } else {
        return 0;
    }
})

const maxMaches = results[0].matches;
const a = results.filter((el) => el.matches === maxMaches);
a.sort((a, b) => {
    if (a.boyName > b.boyName) {
        return -1;
    } else if (a.boyName < b.boyName){
        return 1;
    } else {
        return 0;
    }
});

print(a[0].boyName + ' and ' + a[0].girlName + ' have ' + a[0].matches + ' common interests!');
