function addTodo() {
    let text = prompt("สิ่งที่ต้องทำ");
    if (!text) return;
    let id = String(Date.now());
    setCookie(id, text);
    getTodo();
}

function setCookie(id, message) {
    document.cookie = `${id}=${message};max-age=31536000;path=/`;
}

function getTodo() {
    $("#ft_list").empty();
    let cookies = document.cookie || "";
    if (!cookies) return;
    let cookiesArray = cookies.split(";");
    for (let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i].trim();
        if (!cookie) continue;
        let eqIndex = cookie.indexOf("=");
        if (eqIndex === -1) continue;
        let id = cookie.substring(0, eqIndex).trim();
        let msg = decodeURIComponent(cookie.substring(eqIndex + 1));
        if (id) {
            $("#ft_list").prepend(
                $("<div>").text(msg).on("click", function () {deleteCookie(id, msg);}));
        }
    }
}
function deleteCookie(delid, delmsg) {
    console.log(`${delmsg}${delid}`);
    if (confirm(`คุณต้องการที่จะลบ "${delmsg}" ใช่ไหม`) === true) {
        document.cookie = delid + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        getTodo();
    }
}

$(document).ready(function () {
    getTodo()
    $("#NewBtn").on("click", addTodo);
});