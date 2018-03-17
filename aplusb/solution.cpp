#include<iostream>

int main()
{
    int n;
    std::cin >> n;

    for(auto i = 0; i < n; ++i) {
        int a, b;
        std::cin >> a >> b;
        std::cout << a + b << '\n';
    }

    return 0;
}
