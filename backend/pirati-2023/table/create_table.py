"""Create table from JSONs."""

import csv
import json

path = 'backend/pirati-2023/'

# load files
with open(path + 'questions.json') as fin:
  questions = json.load(fin)
with open(path + 'table/answers1.json') as fin:
  answers1 = json.load(fin)
with open(path + 'table/answers2.json') as fin:
  answers2 = json.load(fin)

# vote to answer
a2a = {
  1: 'Ano',
  -1: 'Ne',
  0: 'Nevím / Jiná odpověď'
}

# create table
table = []
# first row - names
row = ['id', 'otázka', 'popis']
ids = []
for a in answers1:
  row.append(a['name'])
  ids.append(a['id'])
for a in answers2:
  if a['id'] not in ids:
    row.append(a['name'])
    ids.append(a['id'])
table.append(row)

for q in questions:
  row = [
    q['id'],
    q['question'],
    q['description']
  ]
  ids = []
  for a in answers1:
    if a['id'] not in ids:
      row.append(a2a[a['votes'][str(q['id'])]])
      ids.append(a['id'])
  for a in answers2:
    if a['id'] not in ids:
      row.append(a2a[a['votes'][str(q['id'])]])
      ids.append(a['id'])
  table.append(row)

# save table
with open(path + 'table/table.csv', 'w') as fout:
  writer = csv.writer(fout)
  writer.writerows(table)

