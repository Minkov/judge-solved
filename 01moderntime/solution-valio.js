const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = `25
guy_82
m
4
interest_66,interest_1,interest_18,interest_42
guy_225
m
1
interest_118
guy_116
m
0

guy_19
m
2
interest_148,interest_148
guy_209
m
0

guy_92
m
1
interest_1
guy_117
m
3
interest_66,interest_18,interest_148
guy_87
m
1
interest_1
guy_179
m
2
interest_148,interest_81
guy_97
m
2
interest_18,interest_227
guy_106
m
2
interest_227,interest_81
guy_86
m
3
interest_126,interest_18,interest_11
guy_14
m
1
interest_118
girl_165
f
0

girl_36
f
1
interest_148
girl_247
f
0

girl_74
f
2
interest_18,interest_148
girl_192
f
1
interest_118
girl_168
f
2
interest_18,interest_81
girl_107
f
0

girl_47
f
1
interest_81
girl_138
f
1
interest_1
girl_153
f
2
interest_118,interest_11
girl_127
f
0

girl_157
f
1
interest_118
`.split('\n');
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const dependencies = {};
for (let i = 0; i < n; i += 1) {
    const name = gets();
    const gender = gets();
    const numberOfInterests = +gets();
    const interests = gets().split(',');
    interests.forEach((element) => {
        if (!dependencies[name]) {
            dependencies[name] = {};
            dependencies[name].gender = gender;
            dependencies[name].interests = {};
        }
        if (!dependencies[name].interests[element]) {
            dependencies[name].interests[element] = 1;
        } else {
            dependencies[name].interests[element] += 1;
        }
    });
}

const commonalities = {};
const used = new Set();
let bestNumber = 0;
for (const person in dependencies) {
    used.add(person);
    const gender = dependencies[person].gender;
    for (const name in dependencies) {
        if (dependencies[name][gender] !== gender) {
            if (name !== person && !used.has(name)) {
                for (const interest in dependencies[person].interests) {
                    if (dependencies[name].interests[interest]) {
                        const index = person + ' -> ' + name;

                        const personWeight = dependencies[person].interests[interest];
                        const nameWeight = dependencies[name].interests[interest];
                        let weight = Math.min(personWeight, nameWeight);
                        if (weight > 1) {
                            weight *= weight;
                        }
                        if (!commonalities[index]) {
                            commonalities[index] = weight;
                        } else {
                            commonalities[index] += weight;
                        }
                        if (bestNumber < commonalities[index]) {
                            bestNumber = commonalities[index];
                        }
                    }
                }
            }
        }
    }
}

let needToSort = [];
for (const i in commonalities) {
    if (commonalities[i] === bestNumber) {
        needToSort.push(i);
    }
}
needToSort = needToSort.sort((a, b) => {
    return a.localeCompare(b);
});
const [person, name] = needToSort[0].split(' -> ');
const toPrint = person + ' and ' + name + ' have ' + commonalities[needToSort[0]] + ' common interests!';
print(toPrint);
