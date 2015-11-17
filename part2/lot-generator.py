from pymongo import MongoClient
from random import randint

client = MongoClient('mongodb://root:pacab12345@ds039484.mongolab.com:39484/uno-parking')
#client = MongoClient('mongodb://ds039484.mongolab.com:39484/uno-parking')
#client = MongoClient('mongodb://root:pacab12345@ds039484.mongolab.com:39484/')

print(client['uno-parking']['lot'].find()[0])

lotName="Lot 1"
numLanes=10
laneSize=25

"""
{
    "_id": {
        "$oid": "564ad28be4b03655d6ecf475"
    },
    "lotName": "Lot 1",
    "lanes": [
        {
            "laneName": "Lane 1",
            "laneCount": "10"
        },
        {
            "laneName": "Lane 2",
            "laneCount": "15"
        }
    ]
}
"""

lot = dict()

lot["_id"] = "349523490r"
lot["lotName"] = lotName

lanes = list()

for laneNum in range(1,numLanes+1):
	lane = dict()
	lane["laneName"] = "Lane " + str(laneNum)
	lane["laneCount"] = randint(0,laneSize)
	lanes.append(lane)

lot["lanes"] = lanes

print lot
