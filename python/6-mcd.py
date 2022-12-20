def mcd(a, b):
    if b == 0:
        return a
    return mcd(b, a% b)

print(mcd(10, 15))  # imprime "5"
print(mcd(20, 10))  # imprime "10"
print(mcd(9, 6))  # imprime "3"