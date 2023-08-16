from difflib import SequenceMatcher

a = "satish"
b = "razz"
print(SequenceMatcher(None, a, b).ratio())