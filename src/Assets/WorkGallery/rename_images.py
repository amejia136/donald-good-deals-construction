import os

folder = r"C:\Users\mayer\PycharmProjects\donald-good-deals-construction\src\Assets\WorkGallery"

start_number = 36

number_words = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fifteen",
    16: "Sixteen",
    17: "Seventeen",
    18: "Eighteen",
    19: "Nineteen",
    20: "Twenty",
    30: "Thirty",
    40: "Forty",
    50: "Fifty",
    60: "Sixty",
    70: "Seventy",
    80: "Eighty",
    90: "Ninety",
    100: "OneHundred"
}


def number_to_words(n):
    if n <= 20:
        return number_words[n]
    elif n < 100:
        tens = (n // 10) * 10
        ones = n % 10
        if ones == 0:
            return number_words[tens]
        return number_words[tens] + number_words[ones]
    elif n == 100:
        return number_words[100]
    else:
        raise ValueError("This script supports numbers up to 100.")


extensions = (".jpg", ".jpeg", ".png", ".webp")

files = sorted(
    f for f in os.listdir(folder)
    if f.lower().endswith(extensions) and not f.startswith("work")
)

for i, filename in enumerate(files, start=start_number):
    ext = os.path.splitext(filename)[1]
    new_name = f"work{number_to_words(i)}{ext}"

    os.rename(filename, new_name)
    print(f"{filename} -> {new_name}")

print("Done!")