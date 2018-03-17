#include <iostream>
#include <ctime>


int main() {
    int year, month, day;
    const int longMonths[] = {1, 3, 5, 7, 8, 10, 12};

    std::cin >> year >> month >> day;

    day -= 1;
    auto checkDay = false;

    if(day < 1) {
        day = 31;
        month -= 1;
        checkDay = true;
    }
    if(month < 1) {
        month = 12;
        year -= 1;
    }

    if(checkDay) {
        if(month == 2) {
            if(year % 400 == 0) {
                day = 29;
            }
            else {
                day = 28;
            }
        }
        else {
            bool has30days = true;
            for(auto monthLength = longMonths; monthLength != longMonths + 7; monthLength++) {
                if(month == *monthLength) {
                    has30days = false;
                }
            }
            if(has30days) {
                day = 30;
            }
        }
    }

    std::cout << day << month << year << '\n';
    return 0;
}

