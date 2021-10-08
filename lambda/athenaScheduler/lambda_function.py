

import athenaHandler




def lambda_handler(event, context):
    # print('received event:')
    # print(event)
    with open('whoQuery.txt', 'r') as whoQueryFile:
        whoQuery = whoQueryFile.read().replace('\n', '')
    
        
    query = whoQuery
    qa = athenaHandler.QueryAthena(query=query, database='marwebapp_db', athenaResultBucket = 'marwebapp-test', 
    athenaResultFolder = 'queryFinalResult/', finalResultBucket = 'marwebappanalytics', resultFileName = 'test.csv')
    df = qa.run_query()
    qa.writeData(df)
        # test = wr.athena.read_sql_query("SELECT * FROM form_who", database="marwebapp_db", ctas_approach=False)    
        # print(df.head())
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': print(df.head())
    }
