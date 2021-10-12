export default function timeConverter(UNIX_timestamp){
    var time = new Date(UNIX_timestamp).toLocaleTimeString("en-US")
    var date = new Date(UNIX_timestamp).toLocaleDateString("en-US")
    return time + " " + date;
  }