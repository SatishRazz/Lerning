import re
story = "my name is satish razz, and i work in infosys company at hyderabad. hyderabad is a city in telegana. its famous for a dum biriyani. biriyani is sold at bawarchi restaurant."
person = {
    "name": "satish razz",
    "company": "infosys",
    "city": "hyderabad",
    "favorite": "biriyani",
}

find = person.values()
result = []  

for a in find:
  for b in re.finditer(a,story):
    frist = story.find(a)
    last = frist + (len(a) - 1)
    output= [a, frist, last]
    result.append(output)
print(result)
