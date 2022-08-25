

bool isPalindrome(int x){
    if (x < 0){
        return false;
    } 
    
    int oldNumber = x;
    
    long int result = x%10;
    x = x/10;
    
    while(x > 0){
        result = (result * 10) + (x%10);
        x = x/10;
    }
    
    return result == oldNumber;
}