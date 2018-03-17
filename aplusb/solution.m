#import <Foundation/Foundation.h>

int main (int argc, const char * argv[]) {
        NSAutoreleasePool *pool = [[NSAutoreleasePool alloc] init];
        int ch;
        while ((ch = getchar()) != EOF)
                putchar(ch);
        [pool drain];
        return 0;
}
