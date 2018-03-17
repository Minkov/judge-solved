#include<iostream>
#include<vector>
#include<algorithm>

int main () {
    int n;
    std::cin >> n;
    std::vector<int> perm;

    for(auto i = 0; i < n; ++i) {
        int x;
        std::cin >> x;
        perm.push_back(x);
    }

    std::next_permutation(perm.begin(), perm.end());

    for(auto x = perm.begin(); x != perm.end(); ++x) {
        std::cout << *x << ' ';
    }

    return 0;
}
