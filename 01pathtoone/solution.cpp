#include<iostream>
#include<queue>


int main() {
    int n;

    std::cin >> n;

    std::queue<int> q;

    q.push(n);
    q.push(0);

    while(!q.empty()) {
        int current = q.front();
        q.pop();
        int count = q.front();
        q.pop();

        if(current == 1) {
            std::cout << count << '\n';
            break;
        }

        if(current % 2 == 0) {
            q.push(current / 2);
            q.push(count + 1);
        } else {
            q.push(current + 1);
            q.push(count + 1);
            q.push(current - 1);
            q.push(count + 1);
        }
    }

    return 0;
}

