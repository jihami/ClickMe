const firebaseInstance = firebase;
const authService = firebase.auth();
const user = firebase.auth().currentUser;

const githubLogin = async () => {
    const provider = new firebaseInstance.auth.GithubAuthProvider();
    const data = await authService.signInWithPopup(provider);

    const username = data.additionalUserInfo.username
    console.log(username)
    const email = data.user.email
    console.log(email)
    const displayName = data.user.displayName
    console.log(displayName)
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
    }).catch((error) => {
        // An error happened.
        console.log("logoutError")
    });

    // 로그아웃 시 버튼 숨기기
    $(function(){
        $('#logout').hide();
    })

    // 로그아웃 시 세션 삭제
    sessionStorage.removeItem("name")
}

// 세션이 있다면 로그인 상태 유지
$(function (){
    if(sessionStorage.length != 0){
        document.getElementById('user_name').innerHTML = sessionStorage.getItem("name")+"님"

        $(function(){
            $('#logout').show();
        })
    }
})
function gitsubmit(toKen){
    console.log("name")
    token = toKen
    $(function (){
        if(sessionStorage.length !== 0){
            name = sessionStorage.getItem("name")
            submit(toKen, name)
            // console.log(toKen)
            // console.log(name)
        }else {
            alert("로그인하세요");
        }
    })
}

$(function(){
    $('.lang').on('click', function(){
        $('#popup').show()
        const langData = {
            'basic' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact" alt="BADGE"/>',
            'flag-india' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=flag-india" alt="BADGE"/>',
            'vue' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=vue" alt="BADGE"/>',
            'algoia' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=algoia" alt="BADGE"/>',
            'coalt2' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=coalt2" alt="BADGE"/>',
            'buefy' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=buefy" alt="BADGE"/>',
            'swift' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=swift" alt="BADGE"/>',
            'solarized-light' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=solarized-light" alt="BADGE"/>',
            'gruvbox_light' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=gruvbox_light" alt="BADGE"/>',
            'moltack' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=moltack" alt="BADGE"/>',
            'kacho_ga' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=kacho_ga" alt="BADGE"/>',
            'maroongold' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=maroongold" alt="BADGE"/>',
            'gruvbox' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=gruvbox" alt="BADGE"/>',
            'calm' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=calm" alt="BADGE"/>',
            'cobalt' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=cobalt" alt="BADGE"/>',
            'vue-dark' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=vue-dark" alt="BADGE"/>',
            'nord' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=nord" alt="BADGE"/>',
            'material-palenight' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=material-palenight" alt="BADGE"/>',
            'blueberry' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=blueberry" alt="BADGE"/>',
            'aura_dark' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=aura_dark" alt="BADGE"/>',
            'panda' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=panda" alt="BADGE"/>',
            'noctis_minimus' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=noctis_minimus" alt="BADGE"/>',
            'apprentice' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=apprentice" alt="BADGE"/>',
            'slateorange' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=slateorange" alt="BADGE"/>',
            'onedark' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=onedark" alt="BADGE"/>',
            'city_lights' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=city_lights" alt="BADGE"/>',
            'discord_old_blurple' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=discord_old_blurple" alt="BADGE"/>',
            'darcula' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=darcula" alt="BADGE"/>',
            'bear' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=bear" alt="BADGE"/>',
            'monokai' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=monokai" alt="BADGE"/>',
            'react' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=react" alt="BADGE"/>',
            'ayu-mirage' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=ayu-mirage" alt="BADGE"/>',
            'midnight-purple' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=midnight-purple" alt="BADGE"/>',
            'vision-friendly-dark' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=vision-friendly-dark" alt="BADGE"/>',
            'radical' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=radical" alt="BADGE"/>',
            'merko' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=merko" alt="BADGE"/>',
            'tokyonight' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=tokyonight" alt="BADGE"/>',
            'dark' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=dark" alt="BADGE"/>',
            'dracula' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=dracula" alt="BADGE"/>',
            'nightowl' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=nightowl" alt="BADGE"/>',
            'blue-green' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=blue-green" alt="BADGE"/>',
            'great-gatsby' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=great-gatsby" alt="BADGE"/>',
            'chartreuse-dark' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=chartreuse-dark" alt="BADGE"/>',
            'omni' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=omni" alt="BADGE"/>',
            'gotham' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=gotham" alt="BADGE"/>',
            'yeblu' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=yeblu" alt="BADGE"/>',
            'outrun' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=outrun" alt="BADGE"/>',
            'ocean_dark' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=ocean_dark" alt="BADGE"/>',
            'github_dark' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=github_dark" alt="BADGE"/>',
            'aura' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=aura" alt="BADGE"/>',
            'codeSTACKr' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=codeSTACKr" alt="BADGE"/>',
            'rose_pine' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=rose_pine" alt="BADGE"/>',
            'synthwave' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=synthwave" alt="BADGE"/>',
            'shades-of-purple' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=shades-of-purple" alt="BADGE"/>',
            'jolly' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=jolly" alt="BADGE"/>',
            'solarized-dark' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=solarized-dark" alt="BADGE"/>',
            'prussianc' : '<img src="https://github-readme-stats.vercel.app/api/top-langs/?username='+username+'&layout=compact&theme=prussian" alt="BADGE"/>'
        }
        let langId = this.id
        let api = langData[langId]
        document.getElementById('langText').innerHTML = api;
        document.getElementById('langExample').innerHTML = api;
        return api
    })
    $('#close').on('click', function(){
        $('#popup').hide()
    })

    $('#cancel').on('click', function(){
        $('#popup').hide()
    })
})
function submit(gitToken, gitName){

    // textarea 에 있는 코드 가져오기
    let api = document.getElementById('langText');
    // console.log(api.textContent);
    let context = api.textContent;
    // console.log(context);
    const token = gitToken
    const username = gitName // 로그인 구현후 변경
    console.log(gitName);
    const fileName = "README.md"
    //get sha, content
    fetch("https://api.github.com/repos/"+username+"/"+username+"/contents/"+fileName)
        .then((response) => response.json())
        .then((data) =>{
            console.log("get");
            let commitMessage = "delFile"
            let sha = data.sha
            console.log(sha)
            fetch("https://api.github.com/repos/"+username+"/"+username+"/contents/"+fileName, { //경로, 파일명
                method: "DELETE",
                headers: {
                    "Authorization" : "token "+token,
                },
                body: JSON.stringify({
                    message:commitMessage,
                    sha:sha
                }),
            });
            console.log("del");
            console.log(sha);
            // add
            commitMessage = "AddREADME.md"
            let content = data.content+btoa(unescape(encodeURIComponent("<br/>"+context)));  //  base64로 인코
            // var content = data.content+context;  //  base64로 인코
            // console.log(content)
            fetch("https://api.github.com/repos/"+username+"/"+username+"/contents/"+fileName, { //경로 -> 파일명
                method: "PUT",
                headers: {
                    "Accept": "application/vnd.github.v3+json",
                    "Authorization" : "token "+toKen,
                },
                body: JSON.stringify({
                    message : commitMessage,
                    owner : username,
                    content : content , //base 64
                    sha:"" //비워둠
                }),
            });
            console.log("add");
        });

    // location.href = "http://localhost:63342/ClikeMe/public/badge.html";
}
function goGit(){
    name = sessionStorage.getItem("name")
    const username = name
    window.open("about:blank").location.href = "https://github.com/"+username+"/"+username;
}
