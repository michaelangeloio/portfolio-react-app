export default function parseData (data) {
    data.forEach(function (e){
        try {
          e.value = parseInt(e.value);
        }
        catch (err) {
        }
    }
    )
}