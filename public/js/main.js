$(function(){
    $('#close').on('click', function(){
        $('#popup').hide()
    });

    $('#cancel').on('click', function(){
        $('#popup').hide()
    });
});
const firebaseInstance = firebase;
const authService = firebase.auth();
const user = firebase.auth().currentUser;

const githubLogin = async () => {
    // var toKen = prompt('토큰을 입력하시오.');
    const provider = new firebaseInstance.auth.GithubAuthProvider();
    const data = await authService.signInWithPopup(provider);
    const username = data.additionalUserInfo.username;
    console.log(username);
    // const email = data.user.email
    // console.log(email)
    // const displayName = data.user.displayName
    // console.log(displayName)
    document.getElementById('login').innerHTML = username+"님";

    // 로그인 완료 시 로그아웃 버튼 보이기
    $(function(){
        $('#myPage').show();
        $('#logout').show();
    });

    // 세션에 name를 사용하여 저장
    sessionStorage.setItem("name", username);
    // sessionStorage.setItem("toKen", toKen)
    // console.log(sessionStorage.getItem("toKen"))
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
    // sessionStorage.removeItem("toKen")
}

// main_title 클릭 시 menu 화면으로 스크롤
$(function(){
    $("#main_title").click(function() {
        $('html,body').animate({scrollTop:800}, 500);
    })
})

// 세션이 있다면 로그인 상태 유지
$(function (){
    if(sessionStorage.length !== 0){
        document.getElementById('login').innerHTML = sessionStorage.getItem("name")+"님"

        $(function(){
            $('#logout').show();
            $('#myPage').show();
        })
    }
})
