//Guards - это некие вспомогательные  конструкции в TS , которые позволяют  работать с типами
function strip(x: number | string)
{
    if (typeof x == "number") {
        return x.toFixed(2)
    }
    return x.trim()
}

//c помощью instanseof  можно проверить принадлежность объекта к какому-либо классу

class myResponse
{
    header = "response header"
    result = "response result"
}

class myError
{
    header = "error header"
    message = "error result"
}

function handle(res: myError | myResponse)
{
    if (res instanceof myResponse) {
        return {
            info: res.header + res.result
        }
    } else {
        return {
            info: res.header + res.message
        }
    }
}


/////////////////////////////////////////////
type AlertType = "success" | "danger" | "warning"
function setAlertType(type: AlertType)
{
    console.log(type);
}

setAlertType("success");
setAlertType("success1");//Выдает ошибку