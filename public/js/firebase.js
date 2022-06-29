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
const db = firebase.firestore();
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
    $('#logout').show();
    $('#myPage').show();
    // 세션에 name를 사용하여 저장
    sessionStorage.setItem("name", username)
    sessionStorage.setItem("email", email)
    db.collection(email).doc(email).set({"name":username,"email":email}); // 내용을 덮어씀
    db.collection(email).get().then((data) => {
        if (data.size < 2) {
            alert("Github Token을 입력해 주세요.");
            location.href = "myPage.html"
        } else {
            db.collection(email).doc('Token').get().then((result)=> {
                for(let doc in result.data()){
                    token=result.data().Token
                    console.log(token)
                    sessionStorage.setItem("token", token)
                }
            })
        }
    })
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
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("token");
        location.reload();
    });
}

// 세션이 있다면 로그인 상태 유지
$(function (){
    if(sessionStorage.length >= 1){
        document.getElementById('user_name').innerHTML = sessionStorage.getItem("name")+"님"

        $(function(){
            $('#logout').show();
            $('#myPage').show();
        })
    }
})
