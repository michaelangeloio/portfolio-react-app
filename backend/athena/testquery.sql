CREATE TABLE IF NOT EXISTS test2
  WITH (format='PARQUET', 
        parquet_compression='SNAPPY', 
        external_location='s3://due-database-gaou0y9z26us-east-1/test2'

       ) AS
select 
 event_type
,event_timestamp
,from_unixtime(event_timestamp / 1000) as event_date
,arrival_timestamp
,from_unixtime(arrival_timestamp / 1000) as arrival_date
,attributes['lat'] AS loc_lat
,attributes['lng'] AS loc_lng
,client.cognito_id AS cognito_id
,device.platform['name'] as device_name

from all_events 
where "event_type" = 'loc';