import time
import boto3
import json
import pandas as pd
import io
from smart_open import open
# class getQuerys3:



#     def __init__(self):
#         # self.database = database
#         self.folder = 'Unsaved/2021/09/24/'
#         self.bucket = 'marwebapp-test'
#         # self.s3_input = 's3://' + self.bucket + '/my_folder_input'
#         # self.s3_output =  's3://' + self.bucket + '/' + self.folder
#         self.region_name = 'us-east-1'
#         self.aws_access_key_id = "AKIASY352AE3E2ZRZ3MT"
#         self.aws_secret_access_key = "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"
#         # self.query = query
#         self.filename = '76bdc541-d187-43be-9e93-a057608b5fac.csv'

#     def obtain_data(self):
#         try:
#             self.resource = boto3.resource('s3', 
#                                   region_name = self.region_name, 
#                                   aws_access_key_id = self.aws_access_key_id,
#                                   aws_secret_access_key= self.aws_secret_access_key)

#             response = self.resource \
#             .Bucket(self.bucket) \
#             .Object(key= self.folder + self.filename + '.csv') \
#             .get()
            
#             return pd.read_csv(io.BytesIO(response['Body'].read()), encoding='utf8') 
#         except Exception as e:
#             print(e)  


def firsttest():
    session = boto3.Session(
        aws_access_key_id='AKIASY352AE3E2ZRZ3MT',
        aws_secret_access_key='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'
    )
    client = session.client('s3')
    fin = open('s3://marwebapp-test/Unsaved/2021/09/24/76bdc541-d187-43be-9e93-a057608b5fac.csv', transport_params=dict(client=client))
    return fin

def get_s3_file_stream(s3_path):
    aws_access_key_id='AKIASY352AE3E2ZRZ3MT'
    aws_secret_access_key='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'
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
 