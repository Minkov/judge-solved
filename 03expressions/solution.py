def countValidExpressions(digits, expectedResult, index, currentNumber, currentProduct, currentSum, negative):
    # Stop when all digits are used in the expression
    if  index == digits.length:
        currentProduct *= currentNumber
        if negative:
            currentSum += -currentProduct
        else:
            currentSum += currentProduct

        if  currentSum == expectedResult: 
            return 1

        result = 0

    # calculate the next sum, for + and -
    const nextSum = currentSum + currentProduct * currentNumber * (negative ? -1 : 1)

    # Try +
    result += countValidExpressions(digits, expectedResult, index + 1, digits[index], 1, nextSum, false)

    # Try -
    result += countValidExpressions(digits, expectedResult, index + 1, digits[index], 1, nextSum, true)
    
    # Calculate the product, so the operator priority can be saved
    const nextProduct = currentProduct * currentNumber
    # Try *
    result += countValidExpressions(digits, expectedResult, index + 1, digits[index], nextProduct, currentSum, negative)

    # Try concat
    # 00 is not a valid number
    if currentNumber != 0:
        const nextNumber = currentNumber * 10 + digits[index]
        result += countValidExpressions(digits, expectedResult, index + 1, nextNumber, currentProduct, currentSum, negative)

    return result
