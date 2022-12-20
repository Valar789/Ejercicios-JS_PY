def sumArray(arr):
    if len(arr)==0:
        return 0
    return arr[0] + sumArray(arr[1:])


print(sumArray([1, 2, 3, 4, 5]))  # imprime "15"
print(sumArray([10, 20, 30]))  # imprime "60"
print(sumArray([-1, 2, -3, 4, -5]))  # imprime "-3"