
import time
import json
from smart_open import open
import os
import csv




def get_s3_file_stream(s3_path):
    aws_access_key_id=os.environ['ACCESS_KEY_ID']
    aws_secret_access_key=os.environ['ACCESS_KEY_SECRET']
    """
    This function will return a stream of the s3 file.
    The s3_path should be of the format: '<bucket_name>/<file_path_inside_the_bucket>'
    """
    #This is the full path with credentials:
    complete_s3_path = 's3://' + aws_access_key_id + ':' + aws_secret_access_key + '@' + s3_path
  
    return open(complete_s3_path, encoding='utf8')

    

def streamReader(obj):
    returnArr = []
    reader = csv.DictReader(obj)
    for row in reader:
        returnArr.append(row)

    return (returnArr)


def handler(event, context):
    print('received event:')
    print(event)
    s3Data = get_s3_file_stream('marwebappanalytics/test.csv')

    return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps(streamReader(s3Data))
  }


