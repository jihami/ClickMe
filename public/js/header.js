const firebaseInstance = firebase;
const authService = firebase.auth();
const user = firebase.auth().currentUser;
const username = sessionStorage.getItem("name")
fetch("https://api.github.com/repos/" + username + "/" + username + "/contents/README.md" )
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
        console.log(data.sha)
        console.log((new Date).getTime())
    })
const githubLogin = async () => {
    const provider = new firebaseInstance.auth.GithubAuthProvider();
    const data = await authService.signInWithPopup(provider);

    const username = data.additionalUserInfo.username
    console.log(username)
    const email = data.user.email
    console.log(email)
    // const displayName = data.user.displayName
    // console.log(displayName)
    document.getElementById('user_name').innerHTML = username+"님"

    // 로그인 완료 시 로그아웃 버튼 보이기
    $(function(){
        $('#logout').show();
    })

    // 세션에 name를 사용하여 저장
    sessionStorage.setItem("name", username)
}

function githubLogOut() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        document.getElementById("user_name").innerHTML = "Git Hub Login"
    })

    // 로그아웃 시 버튼 숨기기
    $(function(){
        $('#logout').hide();
    })

    // 로그아웃 시 세션 삭제
    sessionStorage.removeItem("name")
}

// 세션이 있다면 로그인 상태 유지
$(function (){
    if(sessionStorage.length !== 0){
        document.getElementById('user_name').innerHTML = sessionStorage.getItem("name")+"님";

        $(function(){
            $('#logout').show();
        })
    }
})

function gitsubmit(toKen){
    token = toKen
    $(function (){
        if(sessionStorage.length !== 0){
            name = sessionStorage.getItem("name")
            submit(toKen, name)
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
    console.log(txt)
    document.getElementById('headerText').innerHTML = txt;
    document.getElementById('headerExample').innerHTML = txt;
    return colorCode
}

function submit(gitToken, gitName){
    // textarea 에 있는 코드 가져오기
    let api = document.getElementById('headerText');
    // console.log(api.textContent);
    // console.log(context);
    const token = gitToken
    const username = gitName // 로그인 구현후 변경
    // console.log(gitName);

    function getTitle(){
        let cacheName = 'CacheStorage';
        let response = fetch("https://api.github.com/repos/" + username + "/" + username + "/contents/README.md");
        return response.then(res => res.json());
    }
    async function exec(){
        var apiFuc;
        apiFuc = await getTitle();
        var con = atob(decodeURIComponent(apiFuc.content));
        var sha = apiFuc.sha;
        console.log(sha);
        console.log();
        await put(con, sha);
    }

    exec();
    function put(con, sha) {
        let context = api.textContent;
        var content = btoa(con + " " + context);
        console.log(content)
        var commitMessage = "addREADME.md"
        fetch("https://api.github.com/repos/" + username + "/" + username + "/contents/README.md", { //경로 -> 파일명
            method: "PUT",
            headers: {
                "Accept": "application/vnd.github.v3+json",
                "Authorization": "token " + token,
            },
            body: JSON.stringify({
                message: commitMessage,
                owner: username,
                content: content, //base 64
                sha: sha,
            })
        })

        console.log('caches'in window)
        console.log(window.caches)
    }

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
