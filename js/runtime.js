// 页脚运行时间
var now = new Date;

function createtime() {
    now.setTime(now.getTime() + 1e3);
    var e = new Date("03/20/2023 00:00:00"),
        t = Math.trunc(234e8 + (now - e) / 1e3 * 17),
        a = (t / 1496e5).toFixed(6),
        n = new Date("03/20/2023 00:00:00"),
        s = (now - n) / 1e3 / 60 / 60 / 24,
        o = Math.floor(s),
        r = (now - n) / 1e3 / 60 / 60 - 24 * o,
        i = Math.floor(r);
    1 == String(i).length && (i = "0" + i);
    var l = (now - n) / 1e3 / 60 - 1440 * o - 60 * i,
        b = Math.floor(l);
    1 == String(b).length && (b = "0" + b);
    var d = (now - n) / 1e3 - 86400 * o - 3600 * i - 60 * b,
        c = Math.round(d);
    1 == String(c).length && (c = "0" + c);
    let g = "";
    g = i < 18 && i >= 9 ?
        `<img class='boardsign' src='https://img.shields.io/badge/YI_讲堂-开讲了-6adea8?style=social&logo=CodeIgniter' title='距离月入25k也就还差一个大佬带我~'>
		<span class='textTip'> 
            <br> 
            <b>本站居然运行了 ${o} 天 
                <span id='runtime'> ${i} 小时 ${b} 分 ${c} 秒 </span>
		</b>
		</span>
		<i id="heartbeat" class='fas fa-heartbeat' style='color:red'></i>
		<br>
		<b>
        <font size=2px>如果再也不能见到你, 那么祝你早安,午安,晚安✨</font>
        </b> ` : `
		<img class='boardsign' src='https://img.shields.io/badge/YI_讲堂-下课休息啦-6adea8?style=social&logo=CodeIgniter' title='下班了就该开开心心的玩耍，嘿嘿~'>
		<span class='textTip'> 
            <br> 
            <b>本站已经运行了 ${o} 天</b>
		        <span id='runtime'> ${i} 小时 ${b} 分 ${c} 秒 </span>
        </b>
        </span>
		<i id="heartbeat" class='fas fa-heartbeat' style='color:red'></i>
		<br>
		<b>
            <font size=2px>如果再也不能见到你, 那么祝你早安,午安,晚安✨</font>
        </b>`,
        document.getElementById("workboard") && (document.getElementById("workboard").innerHTML = g)
}
setInterval((() => {
    createtime()
}), 1e3);