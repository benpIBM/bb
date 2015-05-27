import urllib2
import json
import cloudant
import sys
import json
import requests

print type(sys.argv[2])

USERNAME = 'e7a08a8a-a7a3-4bc0-94a5-ba012e29dbf2-bluemix'
PASSWORD = 'f6973f1c4ae49c4d69738219a883e9de82c07e7338ea7b8092ea6b814e6a5cc5'
account = cloudant.Account(USERNAME)

# login, so we can make changes
login = account.login(USERNAME, PASSWORD)
assert login.status_code == 200

requestSTR = 'http://api.remix.bestbuy.com/v1/products((search='+sys.argv[1]+'))?show=all&format=json&pageSize=100&page='+sys.argv[2]+'&apiKey=cdcj4s2y848cmf2rvz4tu56b'

print requestSTR

response = urllib2.urlopen(requestSTR)
html = response.read()
jsonHTML = json.loads(html)

bulkUploadStr = 'https://'+USERNAME+':'+PASSWORD+'@'+USERNAME+'.cloudant.come/test/_bulk_docs'

print bulkUploadStr

r = requests.post(bulkUploadStr, data={'docs': jsonHTML['products']})

print(r.status_code, r.reason)

# db_name = 'test'
# db = account.database(db_name)
# doc = db.document('test_doc')

# resp = doc.put(params={'docs': jsonHTML['products']})


# print json_data

# print jsonHTML

for x in jsonHTML['products']:
  print x

print "hello Python"