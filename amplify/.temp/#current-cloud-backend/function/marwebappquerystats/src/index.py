import time
import boto3
import json
import pandas as pd
import io
from smart_open import open
import os


def firsttest():
    print (os.environ['ACCESS_KEY_ID'])
    print (os.environ['ACCESS_KEY_SECRET'])
    session = boto3.Session(
        aws_access_key_id= os.environ['ACCESS_KEY_ID'],
        aws_secret_access_key= os.environ['ACCESS_KEY_SECRET']
    )
    client = session.client('s3')
    fin = open('s3://marwebapp-test/Unsaved/2021/09/24/76bdc541-d187-43be-9e93-a057608b5fac.csv', transport_params=dict(client=client))
    return fin

def get_s3_file_stream(s3_path):
    aws_access_key_id=os.environ['ACCESS_KEY_ID']
    aws_secret_access_key=os.environ['ACCESS_KEY_SECRET']
    """
    This function will return a stream of the s3 file.
    The s3_path should be of the format: '<bucket_name>/<file_path_inside_the_bucket>'
    """
    #This is the full path with credentials:
    complete_s3_path = 's3://' + aws_access_key_id + ':' + aws_secret_access_key + '@' + s3_path
    print(complete_s3_path)
    return open(complete_s3_path, encoding='utf8')

    
def csv_reader(csv):
    # df = pd.read_csv(io.BytesIO(csv['Body'].read()), encoding='utf8')
    # print(df.head())
    df = pd.read_csv(csv)
    print(df.head(10))
 



def handler(event, context):
    print('received event:')
    print(event)
    # test = get_s3_file_stream('s3://marwebapp-test/Unsaved/2021/09/24/76bdc541-d187-43be-9e93-a057608b5fac.csv')
    test = firsttest()
    csv_reader(test)

    return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps("test")
  }
 