
import time
import datetime
import json

from asyncio.queues import Queue
from smart_open import open
import os
import csv
import asyncio
from concurrent import futures


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


queueArr = [
    {
        'filename' : 'whoquery.csv'
    }, {
        'filename' : 'foodquery.csv'
    },
    {
        'filename' : 'devicequery.csv'
    },
    {
        'filename' : 'locationquery.csv'
    },
    {
        'filename' : 'playedgame.csv'
    },
    {
        'filename' : 'sportquery.csv'
    },
    {
        'filename' : 'countquery.csv'
    },
    {
        'filename' : 'updatedtimestamp.csv'
    }

]

# queueArr = ['whoquery.csv', 'devicequery.csv']



def streamReader(obj, filename):
    returnArr = []
    reader = csv.DictReader(obj)
    for row in reader:
        returnArr.append(row)

    return ({ "responseName" : filename, "response" : returnArr } )


def streamExecute(file):

    ts = time.time()
    st = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S.%f')[:-3]
    print("Executing stream at " + st)

    filename = file.replace(".csv", "")

    return streamReader(get_s3_file_stream('marwebappanalytics/' + file), filename)
     

def run_io_tasks_in_parallel(tasks):
    finalObj = {}
    with futures.ThreadPoolExecutor(max_workers=6) as executor:
        future_to_url = dict((executor.submit(streamExecute, task['filename']), task)
                         for task in tasks)

    for future in futures.as_completed(future_to_url):
        task = future_to_url[future]
        if future.exception() is not None:
            print(future.exception())
        else:
            print(future.result())
            print(future)
            result = future.result()
            finalObj[result['responseName']] = result['response']

    return finalObj


            

def handler(event, context):
    print('received event:')
    print(event)
    # loop = asyncio.get_event_loop()
    result =  run_io_tasks_in_parallel(queueArr)
    
    # s3Data = get_s3_file_stream('marwebappanalytics/test.csv')

    return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps(result)
  }


