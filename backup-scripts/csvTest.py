import csv
import json



def makeJson(csvFilePath, jsonFilePath = None, Option = None):
    returnArr = []

    with open(csvFilePath, newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            returnArr.append(row)

    return (json.dumps(returnArr))


if __name__ == '__main__':
    csvFilePath = '/Users/angelo/Documents/developer/michaelangrivera/backup-scripts/csvData/whoTest.csv'
    test = makeJson(csvFilePath)
    print(test)
