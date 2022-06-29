const firebaseConfig = {
    apiKey: "AIzaSyCPUkbA5H-DS-B-4xODdmUYL3UmoThmU2E",
    authDomain: "clickme-65c5b.firebaseapp.com",
    projectId: "clickme-65c5b",
    storageBucket: "clickme-65c5b.appspot.com",
    messagingSenderId: "310258531774",
    appId: "1:310258531774:web:b089b93f0e06eb0b628def",
    measurementId: "G-3EFM7FYLJJ"
};

firebase.initializeApp(firebaseConfig);
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
    // alert("IT SHOW 테스트용 계정입니다. 로그아웃 불가합니다.")
    // ItShow를 위해 너네는 잠시 주석되어있으렴

    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        // 로그아웃 시 버튼 숨기기

        document.getElementsByClassName("login").innerHTML = "Git Hub Login";
        $('#logout').hide();
        $('#myPage').hide();

        // 로그아웃 시 세션 삭제
        sessionStorage.removeItem("name");
        location.reload();
    });
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
