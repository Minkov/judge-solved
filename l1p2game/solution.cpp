#include<iostream>
int main()
{
    long long a,b,c,d,x1,x2,x3,chislo;
    std::cin>>chislo;
    x1=chislo/100;
    x2=chislo/10%10;
    x3=chislo%10;
    a=x1+x2+x3;
    b=x1+x2*x3;
    c=x1*x2*x3;
    d=x1*x2+x3;
    std::cout << std::max(std::max(std::max(a,b),c),d) << std::endl;
    return 0;
}
