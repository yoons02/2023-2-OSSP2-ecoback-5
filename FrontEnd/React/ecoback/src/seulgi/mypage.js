import badge from "../seulgi/myBadge.js";

const myPage=()=>{
    return (
        <div>
            <div className="normal">
                <div className="title">Eco$Back</div>
                <div id="menubar_array"> 
                    <line/><line/><line/>
                </div>
            </div>
            <hr />
            <div className="proFile">
                <div>홍길동 님의 프로필</div>
                <div className="faceImage">
                    <img src={"img.url"} alt="faceImg" />
                    <p>2023년 10월 1일부터 함께하는 중</p>
                    <button>프로필 편집</button>
                </div>
            </div>
            <hr />
            <div className="badgeCollection">
                <div>내가 모은 뱃지</div>
                <div>6/12</div>


            </div>
        </div>
    )
}