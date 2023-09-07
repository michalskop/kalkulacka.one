"""Create questions and answers JSONs."""

import csv
import json

path = 'backend/pirati-2023/'

with open(path + 'source.csv') as fin:
  dreader = csv.DictReader(fin)
  data = [dict(d) for d in dreader]

# exclude questions
exclude = [6, 11, 15, 16, 17, 23, 27, 29]
exclude = [6, 11, 16, 17, 20, 23, 27, 32]
exclude = [11]

# questions
questions = []
questions_all = []

j = 1
for i in range(1, 33):
  qarr = data[0]['q' + str(i)].split('?')
  if data[0]['u' + str(i)] != '':
    linksarr = data[0]['u' + str(i)].split(',')
  else:
    linksarr = []
  item = {
    'id': i,
    'name': "Otázka " + str(j),
    'question': qarr[0].strip() + '?',
    'description': "?".join(qarr[1:]).strip(),
    'links': linksarr,
    'order': j,
    'slug': j
  }
  if i not in exclude:
    questions.append(item)
    j += 1
  questions_all.append(item)

with open(path + 'questions.json', 'w') as outfile:
  json.dump(questions, outfile, ensure_ascii=False, indent=2)
with open(path + 'questions_all.json', 'w') as outfile:
  json.dump(questions_all, outfile, ensure_ascii=False, indent=2)


# answers
answers = []

a2a = {
  'ANO': 1,
  'NE': -1,
  'Nevím / Jiná odpověď': 0
}

for row in data[1:]:
  it = {
    'id': int(row['id']),
    'slug': int(row['id']),
    'name': row['name'].strip(),
    'familyName': row['family_name'].strip(),
    'votes': {},
    'comments': {},
  }
  for j in range(1, 33):
    # if j not in exclude:
    it['votes'][j] = a2a[row['q' + str(j)]]
    if row['d' + str(j)] != '':
      it['comments'][j] = row['d' + str(j)].strip()
  
  answers.append(it)

with open(path + 'answers.json', 'w') as outfile:
  json.dump(answers, outfile, ensure_ascii=False, indent=2)
