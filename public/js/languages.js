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
    });

    // 로그아웃 시 버튼 숨기기
    $(function(){
        $('#logout').hide();
    });

    // 로그아웃 시 세션 삭제
    sessionStorage.removeItem("name")
}

// 세션이 있다면 로그인 상태 유지
$(function (){
    if(sessionStorage.length !== 0){
        document.getElementById('user_name').innerHTML = sessionStorage.getItem("name")+"님"

        $(function(){
            $('#logout').show();
        });
    }
});
function gitsubmit(toKen){
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
    });
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
        return api;
    });
    $('#close').on('click', function(){
        $('#popup').hide()
    });

    $('#cancel').on('click', function(){
        $('#popup').hide()
    });
});
function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
}
async function submit(gitToken, gitName) {
    // textarea 에 있는 코드 가져오기
    let api = document.getElementById('langText');
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
