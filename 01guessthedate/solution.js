const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = `2017
12
31`.split('\n');

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = (() => {});

const getMonthName = (index) => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return monthNames[index]
};

const formatDate = (date) => {
    const yearString = date.getFullYear();
    const monthString = getMonthName(date.getMonth());
    // const monthString = date.getMonth();
    const dayString = date.getDate();
    return `${dayString}-${monthString}-${yearString}`;
};

const solve = () => {
    const year = gets();
    const month = gets();
    const day = gets();

    const date = new Date(year, month - 1, day);
    // print(formatDate(date));
    date.setDate(date.getDate() - 1);
    // print(formatDate(date));
    return formatDate(date);
}

print(solve());
