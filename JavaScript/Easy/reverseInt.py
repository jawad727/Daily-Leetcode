# Link: https://leetcode.com/problems/reverse-integer/

class Solution:
    def reverse(self, x: int) -> int:
        def count(a):
            k=0
            while (a>=1):
                a=a/10
                k=k+1
            return k
    
        def rev(a,b):
            m=0
            for i in range(b):
                m = m*10 + a%10
                a=floor(a/10)
            return m
        
        if(x.bit_length()<=32):
            c=count(abs(x))
            self=rev(abs(x),c)
            if (x<0):
                self=-self
            if (self.bit_length()>=32):
                self=0
        return self