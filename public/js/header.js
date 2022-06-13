const colorData= {
    'pRandom' : 'timeAuto',
    'rRandom' :'random',
    'pRGadient' : 'timeGradient',
    'hexcode' : '#B897FF',
    'clickMe' : '#713fe8'
}
function pop(id){
    $('#popup').show()
    console.log(id)
    return id
}
function color(colorCode){
    console.log(colorCode)
    console.log(pId)
    switch (colorCode){
        case "pR":
            cC = "timeAuto"; break;
        case "rR":
            cC = "random"; break;
        case "gR":
            cC = "timeGradient"; break;
        case "H":
            cC = "B897FF"; break;
        case "C":
            cC = "713fe8"; break;
        default:
            cC = "713fe8";
    }
    const headerData = {
        'Wave'  : '<img src="https://capsule-render.vercel.app/api?type=wave&color='+cC+'&height=200&text=WAVE" style="width:100%" style="width:100%"/>',
        'Egg'  : '<img src="https://capsule-render.vercel.app/api?type=egg&color='+cC+'&height=210" style="width:100%"/>',
        'Shark'  : '<img src="https://capsule-render.vercel.app/api?type=shark&color='+cC+'&height=140" style="width:100%"/>',
        'Slice'  : '<img src="https://capsule-render.vercel.app/api?type=slice&color='+cC+'&height=200&text=SLICE&fontAlign=70&rotate=13&fontAlignY=25&desc=desc%20function%20is%20also%20rotated.&descAlign=70.&descAlignY=44" style="width:100%"/>',
        'React'  : '<img src="https://capsule-render.vercel.app/api?type=rect&color='+cC+'&text=%20%20RECT%20%20&fontAlign=30&fontSize=30&textBg=true&desc=Use%20%27textBg%27%20to%20highlight%20%27text%27&descAlign=60&descAlignY=50" style="width:100%"/>',
        'Soft'  : '<img src="https://capsule-render.vercel.app/api?type=soft&color='+cC+'&text=Good%20to%20use%20with%20other%20readme&fontSize=40&animation=twinkling" style="width:100%"/>',
        'Rounded'  : '<img src="https://capsule-render.vercel.app/api?type=rounded&color='+cC+'&text=Rounded%20with%20stroke&fontAlignY=50&fontSize=40&height=200&stroke=000000&strokeWidth=2" style="width:100%"/>',
        'Cylinder'  : '<img src="https://capsule-render.vercel.app/api?type=cylinder&color='+cC+'&text=Cylinder&fontAlignY=45&fontSize=40&height=150&animation=blinking&desc=desc%20is%20also%20animated&descAlignY=70" style="width:100%"/>',
        'Waving'  : '<img src="https://capsule-render.vercel.app/api?type=waving&height=200&text=Waving!&fontAlign=80&fontAlignY=40&color='+cC+'" style="width:100%"/>',
        'Transparent'  : '<img src="https://capsule-render.vercel.app/api?type=transparent&fontColor='+cC+'&text=Transparent&height=150&fontSize=60&desc=Only%20Use%20Text&descAlignY=75&descAlign=60" style="width:100%"/>'
    }
    txt = headerData[pId]
    console.log(txt)
    document.getElementById('headerText').innerHTML = txt;
    document.getElementById('headerExample').innerHTML = txt;
    return colorCode
}

$(function(){

    $('#close').on('click', function(){
        $('#popup').hide()
        document.getElementById('headerText').innerHTML = "";
        document.getElementById('headerExample').innerHTML = "";
    })

    $('#cancel').on('click', function(){
        $('#popup').hide()
        document.getElementById('headerText').innerHTML = "";
        document.getElementById('headerExample').innerHTML = "";
    })
})
const firebaseConfig = {
    //  firebase sdk
    apiKey: "AIzaSyAScwaKmiKUyqgxaPBk2VUrydYSHUJF3pY",
    authDomain: "clickme-ca826.firebaseapp.com",
    projectId: "clickme-ca826",
    storageBucket: "clickme-ca826.appspot.com",
    messagingSenderId: "229716770871",
    appId: "1:229716770871:web:ba982b7fd732da3dd47fb2",
    measurementId: "G-KT1SPMPS2N"
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
