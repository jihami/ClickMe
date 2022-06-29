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
        $('#myPage').show();
    })

    // 세션에 name를 사용하여 저장
    sessionStorage.setItem("name", username)
}

function githubLogOut() {
    alert("IT SHOW 테스트용 계정입니다. 로그아웃 불가합니다.")
    // ItShow를 위해 너네는 잠시 주석되어있으렴
    // firebase.auth().signOut().then(() => {
    //     // Sign-out successful.
    //     document.getElementById("login").innerHTML = "Git Hub Login"
    // });
    //
    // // 로그아웃 시 버튼 숨기기
    // $(function(){
    //     $('#logout').hide();
    // })

    // 로그아웃 시 세션 삭제
    // sessionStorage.removeItem("name")
}

    // 세션이 있다면 로그인 상태 유지
$(function (){
    if(sessionStorage.length !== 0){
        document.getElementById('user_name').innerHTML = sessionStorage.getItem("name")+"님"

        $(function(){
            $('#logout').show();
            $('#myPage').show();
        })
    }
})

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
    })
}

$(function(){
    $('.stat').on('click', function(){
        $('#popup').show()
        const statsData = {
            'basic' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true" alt="STATUS"/>',
            'flag-india' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=flag-india" alt="STATUS"/>',
            'vue' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=vue" alt="STATUS"/>',
            'algoia' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=algoia" alt="STATUS"/>',
            'coalt2' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=coalt2" alt="STATUS"/>',
            'buefy' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=buefy" alt="STATUS"/>',
            'swift' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=swift" alt="STATUS"/>',
            'solarized-light' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=solarized-light" alt="STATUS"/>',
            'gruvbox_light' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=gruvbox_light" alt="STATUS"/>',
            'moltack' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=moltack" alt="STATUS"/>',
            'kacho_ga' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=kacho_ga" alt="STATUS"/>',
            'maroongold' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=maroongold" alt="STATUS"/>',
            'gruvbox' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=gruvbox" alt="STATUS"/>',
            'calm' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=calm" alt="STATUS"/>',
            'cobalt' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=cobalt" alt="STATUS"/>',
            'vue-dark' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=vue-dark" alt="STATUS"/>',
            'nord' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=nord" alt="STATUS"/>',
            'material-palenight' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=material-palenight" alt="STATUS"/>',
            'blueberry' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=blueberry" alt="STATUS"/>',
            'aura_dark' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=aura_dark" alt="STATUS"/>',
            'panda' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=panda" alt="STATUS"/>',
            'noctis_minimus' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=noctis_minimus" alt="STATUS"/>',
            'apprentice' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=apprentice" alt="STATUS"/>',
            'slateorange' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=slateorange" alt="STATUS"/>',
            'onedark' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=onedark" alt="STATUS"/>',
            'city_lights' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=city_lights" alt="STATUS"/>',
            'discord_old_blurple' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=discord_old_blurple" alt="STATUS"/>',
            'darcula' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=darcula" alt="STATUS"/>',
            'bear' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=bear" alt="STATUS"/>',
            'monokai' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=monokai" alt="STATUS"/>',
            'react' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=react" alt="STATUS"/>',
            'ayu-mirage' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=ayu-mirage" alt="STATUS"/>',
            'midnight-purple' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=midnight-purple" alt="STATUS"/>',
            'vision-friendly-dark' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=vision-friendly-dark" alt="STATUS"/>',
            'radical' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=radical" alt="STATUS"/>',
            'merko' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=merko" alt="STATUS"/>',
            'tokyonight' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=tokyonight" alt="STATUS"/>',
            'dark' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=dark" alt="STATUS"/>',
            'dracula' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=dracula" alt="STATUS"/>',
            'nightowl' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=nightowl" alt="STATUS"/>',
            'blue-green' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=blue-green" alt="STATUS"/>',
            'great-gatsby' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=great-gatsby" alt="STATUS"/>',
            'chartreuse-dark' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=chartreuse-dark" alt="STATUS"/>',
            'omni' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=omni" alt="STATUS"/>',
            'gotham' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=gotham" alt="STATUS"/>',
            'yeblu' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=yeblu" alt="STATUS"/>',
            'outrun' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=outrun" alt="STATUS"/>',
            'ocean_dark' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=ocean_dark" alt="STATUS"/>',
            'github_dark' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=github_dark" alt="STATUS"/>',
            'aura' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=aura" alt="STATUS"/>',
            'codeSTACKr' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=codeSTACKr" alt="STATUS"/>',
            'rose_pine' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=rose_pine" alt="STATUS"/>',
            'synthwave' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=synthwave" alt="STATUS"/>',
            'shades-of-purple' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=shades-of-purple" alt="STATUS"/>',
            'jolly' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=jolly" alt="STATUS"/>',
            'solarized-dark' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=solarized-dark" alt="STATUS"/>',
            'prussian' : '<img src="https://github-readme-stats.vercel.app/api?username='+username+'&show_icons=true&theme=prussian" alt="STATUS"/>'
        }
        let statsId = this.id
        // console.log(badgeData[badgeId]);
        let api = statsData[statsId]
        document.getElementById('statsText').innerHTML = api;
        document.getElementById('statsExample').innerHTML = api;
        // document.getElementById('badgeText').innerHTML = "<xmp>"+api+"<xmp>";
        return api
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
    let api = document.getElementById('statsText');
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
