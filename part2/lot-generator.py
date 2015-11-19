from pymongo import MongoClient
from random import randint

client = MongoClient('mongodb://root:pacab12345@ds039484.mongolab.com:39484/uno-parking')

json = client['uno-parking']['lots'].find()[0]

for lot in json['lots']:
	for lane in lot['lanes']:
		print(lane['availability'])

		availability = randint(0,lane['totalSpace'])
		lane['availability'] = availability 

		if lane['totalSpace'] == availability:
			lane['status'] = "full"
		else:
			lane['status'] = "available"

rval = client['uno-parking']['lots'].update({},{"$set":json}, upsert=False)

'''
numLots= 5
numLanes=10
laneSize=25

totalSpace = numLanes * laneSize
'''

"""
{
    "_id": {
        "$oid": "564ad28be4b03655d6ecf475"
    },
    "lots": [
        {
            "id": 0,
            "name": "lot 1",
            "totalSpace": 20,
            "lanes": [
                {
                    "id": 0,
                    "name": "lane 1",
                    "totalSpace": 10,
                    "status": "full",
                    "availability": 0
                },
                {
                    "id": 1,
                    "name": "lane 2",
                    "totalSpace": 10,
                    "status": "available",
                    "availability": 5
                }
            ]
        },
        {
            "id": 1,
            "name": "lot 2",
            "totalSpace": 20,
            "lanes": [
                {
                    "id": 0,
                    "name": "lane 1",
                    "totalSpace": 10,
                    "status": "full",
                    "availability": 0
                },
                {
                    "id": 1,
                    "name": "lane 2",
                    "totalSpace": 10,
                    "status": "available",
                    "availability": 5
                }
            ]
        }
    ]
}
"""
