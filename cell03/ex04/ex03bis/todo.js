getTodo()

function addTodo() {
    let text = prompt("สิ่งที่ต้องทำ")
    let date = Number(Date.now())
    setCookie(date, text)
    getTodo()
}

function setCookie(id, message) {
    document.cookie = `${id}=${message};max-age=31536000;path=/`;
}

function getTodo() {
    $("#ft_list").empty();
    let cookies = document.cookie;
    let cookiesArray = cookies.split(";");
    for (let i = 0; i < cookiesArray.length; i++) {
        let data = (cookiesArray[i]).split("=");
        let id = (data[0].replace(/\s/g, ""))
        let msg = data[1]
        if (id) {
            $("#ft_list").prepend($("<div>").text(msg).on("click", function () { deleteCookie(id, msg); }));
        }
    }
}
function deleteCookie(delid, delmsg) {
    console.log(`${delmsg}${delid}`)
    if (confirm(`คุณต้องการที่จะลบ ${delmsg} ใช่ไหม`) == true) {
        document.cookie = delid + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        window.location.reload()
    }
}

$(document).ready(function () {
    $("#NewBtn").on("click", addTodo);
});