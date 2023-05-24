def solution(inputString):
    k = len(inputString) - 1
    for x in inputString:
        if (x == inputString[k]):
            k -= 1
        else:
            return False
    return True
