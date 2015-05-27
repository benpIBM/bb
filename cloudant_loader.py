import urllib2
import json

response = urllib2.urlopen('http://api.remix.bestbuy.com/v1/products((search=samsung))?show=name,sku,salePrice&format=json&pageSize=100&apiKey=cdcj4s2y848cmf2rvz4tu56b')
html = response.read()
jsonHTML = json.loads(html)

print jsonHTML

for x in jsonHTML['products']:
  print x['sku']

print "hello Python"