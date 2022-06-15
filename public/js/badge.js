const firebaseInstance = firebase;
const authService = firebase.auth();
const user = firebase.auth().currentUser;
const username = sessionStorage.getItem("name")
let response = fetch("https://api.github.com/repos/" + username + "/" + username + "/contents/README.md");

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
        document.getElementById('user_name').innerHTML = sessionStorage.getItem("name")+"님"

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

const badgeData = {
    'Adobe' : '<img src="https://img.shields.io/badge/Adobe-FF0000?style=flat-square&logo=Adobe&logoColor=white" alt="BADGE"/>',
    'Adobe XD' : '<img src="https://img.shields.io/badge/Adobe XD-FF61F6?style=flat-square&logo=Adobe XD&logoColor=white" alt="BADGE"/>',
    'Adobe InDesign' : '<img src="https://img.shields.io/badge/Adobe InDesign-FF3366?style=flat-square&logo=Adobe InDesign&logoColor=white" alt="BADGE"/>',
    'Adobe Photoshop' : '<img src="https://img.shields.io/badge/Adobe Photoshop-31A8FF?style=flat-square&logo=Adobe Photoshop&logoColor=white" alt="BADGE"/>',
    'Adobe Illustrator' : '<img src="https://img.shields.io/badge/Adobe Illustrator-FF9A00?style=flat-square&logo=Adobe Illustrator&logoColor=white" alt="BADGE"/>',
    'Adobe Premiere Pro' : '<img src="https://img.shields.io/badge/Adobe Premiere Pro-9999FF?style=flat-square&logo=Adobe Premiere Pro&logoColor=white" alt="BADGE"/>',
    'Amazon AWS' : '<img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=flat-square&logo=amazonaws&logoColor=white" alt="BADGE"/>',
    'Anaconda' : '<img src="https://img.shields.io/badge/Anaconda-44A833?style=flat-square&logo=Anaconda&logoColor=white" alt="BADGE"/>',
    'Android' : '<img src="https://img.shields.io/badge/Android-3DDC84?style=flat-square&logo=android&logoColor=white" alt="BADGE"/>',
    'Android Studio' : '<img src="https://img.shields.io/badge/Android Studio-3DDC84?style=flat-square&logo=Android Studio&logoColor=white" alt="BADGE"/>',
    'AngularJS' : '<img src="https://img.shields.io/badge/angular.js-DD0031?style=flat-square&logo=angularjs&logoColor=white" alt="BADGE"/>',
    'Apache Tomcat' : '<img src="https://img.shields.io/badge/Apache Tomcat-F8DC75?style=flat-square&logo=apachetomcat&logoColor=black" alt="BADGE"/>',
    'Atom' : '<img src="https://img.shields.io/badge/Atom-66595C?style=flat-square&logo=Atom&logoColor=white" alt="BADGE"/>',
    'Bootstrap' : '<img src="https://img.shields.io/badge/Bootstrapap-7952B3?style=flat-square&logo=bootstrap&logoColor=white" alt="BADGE"/>',
    'CSS3' : '<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="BADGE"/>',
    'C' : '<img src="https://img.shields.io/badge/C-A8B9CC?style=flat-square&logo=C&logoColor=white" alt="BADGE"/>',
    'CPP' : '<img src="https://img.shields.io/badge/C++-00599C?style=flat-square&logo=C%2B%2B&logoColor=white" alt="BADGE"/>',
    'django' : '<img src="https://img.shields.io/badge/django-092E20?style=flat-square&logo=django&logoColor=white" alt="BADGE"/>',
    'Docker' : '<img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=Docker&logoColor=white" alt="BADGE"/>',
    'Expo' : '<img src="https://img.shields.io/badge/Expo-000000?style=flat-square&logo=Expo&logoColor=white" alt="BADGE"/>',
    'Express' : '<img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white" alt="BADGE"/>',
    'Firebase' : '<img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black" alt="BADGE"/>',
    'Flask' : '<img src="https://img.shields.io/badge/Flask-000000?style=flat-square&logo=flask&logoColor=white" alt="BADGE"/>',
    'Flutter' : '<img src="https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white" alt="BADGE"/>',
    'Git' : '<img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white" alt="BADGE"/>',
    'GitHub' : '<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white" alt="BADGE"/>',
    'Go' : '<img src="https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=Go&logoColor=white" alt="BADGE"/>',
    'Google Cloud' : '<img src="https://img.shields.io/badge/Google Cloud-4285F4?style=flat-square&logo=Google Cloud&logoColor=white" alt="BADGE"/>',
    'Google Colab' : '<img src="https://img.shields.io/badge/Google Colab-F9AB00?style=flat-square&logo=Google Colab&logoColor=white" alt="BADGE"/>',
    'GraphQL' : '<img src="https://img.shields.io/badge/GraphQL-E10098?style=flat-square&logo=GraphQL&logoColor=white" alt="BADGE"/>',
    'Heroku' : '<img src="https://img.shields.io/badge/Heroku-430098?style=flat-square&logo=Heroku&logoColor=white" alt="BADGE"/>',
    'HTML5' : '<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="BADGE"/>',
    'Java' : '<img src="https://img.shields.io/badge/java-007396?style=flat-square&logo=java&logoColor=white" alt="BADGE"/>',
    'JavaScript' : '<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="BADGE"/>',
    'jQuery' : '<img src="https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jQuery&logoColor=white" alt="BADGE"/>',
    'JSON' : '<img src="https://img.shields.io/badge/JSON-000000?style=flat-square&logo=json&logoColor=white" alt="BADGE"/>',
    'JSS' : '<img src="https://img.shields.io/badge/JSS-F7DF1E?style=flat-square&logo=JSS&logoColor=black" alt="BADGE"/>',
    'Linux' : '<img src="https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black" alt="BADGE"/>',
    'MariaDB' : '<img src="https://img.shields.io/badge/MariaDB-003545?style=flat-square&logo=mariaDB&logoColor=white" alt="BADGE"/>',
    'MySQL' : '<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white" alt="BADGE"/>',
    'MongoDB' : '<img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white" alt="BADGE"/>',
    'Next.js' : '<img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white" alt="BADGE"/>',
    'Node.js' : '<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white" alt="BADGE"/>',
    'Nuxt.js' : '<img src="https://img.shields.io/badge/Nuxt.js-00DC82?style=flat-square&logo=Nuxt.js&logoColor=white" alt="BADGE"/>',
    'ORACLE' : '<img src="https://img.shields.io/badge/ORACLE-F80000?style=flat-square&logo=oracle&logoColor=white" alt="BADGE"/>',
    'PHP' : '<img src="https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white" alt="BADGE"/>',
    'PhpStorm' : '<img src="https://img.shields.io/badge/PhpStorm-000000?style=flat-square&logo=PhpStorm&logoColor=white" alt="BADGE"/>',
    'Postman' : '<img src="https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=Postman&logoColor=white" alt="BADGE"/>',
    'PyCharm' : '<img src="https://img.shields.io/badge/PyCharm-000000?style=flat-square&logo=PyCharm&logoColor=white" alt="BADGE"/>',
    'Python' : '<img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=Python&logoColor=white" alt="BADGE"/>',
    'Ruby' : '<img src="https://img.shields.io/badge/Ruby-CC342D?style=flat-square&logo=Ruby&logoColor=white" alt="BADGE"/>',
    'RubyOnRails' : '<img src="https://img.shields.io/badge/RubyOnRails-CC0000?style=flat-square&logo=RubyOnRails&logoColor=white" alt="BADGE"/>',
    'Rust' : '<img src="https://img.shields.io/badge/Rust-000000?style=flat-square&logo=Rust&logoColor=white" alt="BADGE"/>',
    'React' : '<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black" alt="BADGE"/>',
    'React Native' : '<img src="https://img.shields.io/badge/React Native-61DAFB?style=flat-square&logo=React&logoColor=black" alt="BADGE"/>',
    'Sass' : '<img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white" alt="BADGE"/>',
    'Selenium' : '<img src="https://img.shields.io/badge/Selenium-43B02A?style=flat-square&logo=Selenium&logoColor=white" alt="BADGE"/>',
    'Spring' : '<img src="https://img.shields.io/badge/Spring-6DB33F?style=flat-square&logo=Spring&logoColor=white" alt="BADGE"/>',
    'Storybook' : '<img src="https://img.shields.io/badge/Storybook-FF4785?style=flat-square&logo=Storybook&logoColor=white" alt="BADGE"/>',
    'styled-components' : '<img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white" alt="BADGE"/>',
    'Svelte' : '<img src="https://img.shields.io/badge/Svelte-FF3E00?style=flat-square&logo=Svelte&logoColor=white" alt="BADGE"/>',
    'Swift' : '<img src="https://img.shields.io/badge/Swift-F05138?style=flat-square&logo=Swift&logoColor=white" alt="BADGE"/>',
    'Typescript' : '<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white" alt="BADGE"/>',
    'Tailwind CSS' : '<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white" alt="BADGE"/>',
    'Ubuntu' : '<img src="https://img.shields.io/badge/Ubuntu-E95420?style=flat-square&logo=Ubuntu&logoColor=white" alt="BADGE"/>',
    'Visual Studio' : '<img src="https://img.shields.io/badge/Visual Studio-5C2D91?style=flat-square&logo=Visual Studio&logoColor=white" alt="BADGE"/>',
    'Visual Studio Code' : '<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat-square&logo=Visual Studio Code&logoColor=white" alt="BADGE"/>',
    'Velog' : '<img src="https://img.shields.io/badge/Velog-20C997?style=flat-square&logo=velog&logoColor=white" alt="BADGE"/>',
    'Vercel' : '<img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white" alt="BADGE"/>',
    'Vue.js' : '<img src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat-square&logo=Vue.js&logoColor=white" alt="BADGE"/>',
    'Xcode' : '<img  src="https://img.shields.io/badge/Xcode-147EFB?style=flat-square&logo=Xcode&logoColor=white" alt="BADGE"/>',
    'WebStorm' : '<img src="https://img.shields.io/badge/WebStorm-000000?style=flat-square&logo=WebStorm&logoColor=white" alt="BADGE"/>'
}
$(function(){
    $('.badge').on('click', function(){
        $('#popup').show()
        let badgeId = this.id
        let api = badgeData[badgeId]
        document.getElementById('badgeText').innerHTML = api;
        document.getElementById('badgeExample').innerHTML = api;
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
    let api = document.getElementById('badgeText');
    const token = gitToken;
    const username = gitName;
    console.log("15초 후 전송");
    await sleep(15000);
    fetch("https://api.github.com/repos/" + username + "/" + username + "/contents/README.md")
        .then((res) => {
            return res.json();
        })
        .then(async (data) => {
            console.log(data.sha);
            console.log(data);

            const commitMessage = "addREADME"
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
                    message: commitMessage,
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
