const username = sessionStorage.getItem("name")

function gitsubmit(toKen){
    token = toKen
    $(function (){
        if(sessionStorage.length !== 0){
            name = sessionStorage.getItem("name")
            submit(toKen, name);
            // setTimeout(submit(toKen, name),30000);
        }else {
            alert("로그인하세요");
        }
    })
}


function pop(id){
    $('#popup').show()
    return id
}
function color(colorCode){
    // console.log(colorCode)
    // console.log(pId)
    switch (colorCode){
        case "pR":
            colorCode = "timeAuto"; break;
        case "rR":
            colorCode = "random"; break;
        case "gR":
            colorCode = "timeGradient"; break;
        case "H":
            colorCode = "B897FF"; break;
        case "C":
            colorCode = "713fe8"; break;
        default:
            colorCode = "713fe8";
    }
    const headerData = {
        'Wave'  : '<img src="https://capsule-render.vercel.app/api?type=wave&color='+colorCode+'&height=200&text='+username+'" style="width:100%" style="width:100%" alt="HEADER"/>',
        'Egg'  : '<img src="https://capsule-render.vercel.app/api?type=egg&color='+colorCode+'&height=210" style="width:100%"  alt="HEADER"/>',
        'Shark'  : '<img src="https://capsule-render.vercel.app/api?type=shark&color='+colorCode+'&height=140" style="width:100%" alt="HEADER"/>',
        'Slice'  : '<img src="https://capsule-render.vercel.app/api?type=slice&color='+colorCode+'&height=200&text='+username+'&fontAlign=70&rotate=13&fontAlignY=25&desc=desc%20function%20is%20also%20rotated.&descAlign=70.&descAlignY=44" style="width:100%" alt="HEADER"/>',
        'React'  : '<img src="https://capsule-render.vercel.app/api?type=rect&color='+colorCode+'&text='+username+'&fontAlign=30&fontSize=30&textBg=true&desc=Use%20%27textBg%27%20to%20highlight%20%27text%27&descAlign=60&descAlignY=50" style="width:100%" alt="HEADER"/>',
        'Soft'  : '<img src="https://capsule-render.vercel.app/api?type=soft&color='+colorCode+'&text='+username+'&fontSize=40&animation=twinkling" style="width:100%" alt="HEADER"/>',
        'Rounded'  : '<img src="https://capsule-render.vercel.app/api?type=rounded&color='+colorCode+'&text='+username+'&fontAlignY=50&fontSize=40&height=200&stroke=000000&strokeWidth=2" style="width:100%" alt="HEADER"/>',
        'Cylinder'  : '<img src="https://capsule-render.vercel.app/api?type=cylinder&color='+colorCode+'&text='+username+'&fontAlignY=45&fontSize=40&height=150&animation=blinking&desc=desc%20is%20also%20animated&descAlignY=70" style="width:100%" alt="HEADER"/>',
        'Waving'  : '<img src="https://capsule-render.vercel.app/api?type=waving&height=200&text=Waving!&fontAlign=80&fontAlignY=40&color='+colorCode+'" style="width:100%" alt="HEADER"/>',
        'Transparent'  : '<img src="https://capsule-render.vercel.app/api?type=transparent&fontColor='+colorCode+'&text='+username+'&height=150&fontSize=60&desc=Only%20Use%20Text&descAlignY=75&descAlign=60" style="width:100%" alt="HEADER"/>'
    }
    let txt = headerData[pId]
    document.getElementById('headerText').innerHTML = txt;
    document.getElementById('headerExample').innerHTML = txt;
    return colorCode;
}
function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
}
async function submit(gitToken, gitName) {
    // textarea 에 있는 코드 가져오기
    let api = document.getElementById('headerText');
    const token = gitToken;
    const username = gitName;
    console.log("15초 후 전송");
    sleep(15000);
    fetch("https://api.github.com/repos/" + username + "/" + username + "/contents/README.md")
        .then((res) => {
            return res.json();
        })
        .then(async (data) => {
            console.log(data.sha);
            console.log(data);

            var con = atob(decodeURIComponent(data.content));
            let context = api.textContent;
            var content = btoa(con + " " + context);
            fetch("https://api.github.com/repos/" + username + "/" + username + "/contents/README.md", { //경로 -> 파일명
                method: "PUT",
                headers: {
                    "Accept": "application/vnd.github.v3+json",
                    "Authorization": "token " + token,
                },
                body: JSON.stringify({
                    message: "add README.md - ClickME",
                    owner: username,
                    content: content, //base 64
                    sha: data.sha //비워둠
                }),
            }).catch((e)=>{
                console.log("작 err"+e)
                alert("새로고침 후 재시도 해주세요.")
            });
        })
        .catch((e)=>{
            console.log("큰 err"+e)
            alert("새로고침 후 재시도 해주세요.")
        });
    alert("전송완료");
}

$(function(){
    $('#close').on('click', function(){
        $('#popup').hide()
        document.getElementById('headerText').innerHTML = "";
        document.getElementById('headerExample').innerHTML = "";
    });

    $('#cancel').on('click', function(){
        $('#popup').hide()
        document.getElementById('headerText').innerHTML = "";
        document.getElementById('headerExample').innerHTML = "";
    });
});
function goGit(){
    $(function (){
        if(sessionStorage.length !== 0){
            name = sessionStorage.getItem("name")
            const username = name;
            window.open("about:blank").location.href = "https://github.com/"+username+"/"+username;
        }else {
            alert("로그인하세요");
        }
    });
}
