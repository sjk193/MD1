function cong (a, b){
    return a + b;
}
function tru (a, b){
    return a - b;
}
function nhan (a, b){
    return a * b;
}
function chia (a, b){
    return a / b;
}
function cong_() {
    var a = document.getElementById('A').value;
    var b = document.getElementById('B').value;
    var _cong = cong(parseInt(a), parseInt(b));
    alert("Cộng = " + _cong);
}
function tru_() {
    var a = document.getElementById('A').value;
    var b = document.getElementById('B').value;
    var _tru = tru(parseInt(a), parseInt(b));
    alert("Trừ = " + _tru);
}
function nhan_() {
    var a = document.getElementById('A').value;
    var b = document.getElementById('B').value;
    var _nhan = nhan(parseInt(a), parseInt(b));
    alert("Nhân = " + _nhan);
}
function chia_() {
    var a = document.getElementById('A').value;
    var b = document.getElementById('B').value;
    var _chia = chia(parseInt(a), parseInt(b));
    alert("Chia = " + _chia);
}