//뱃지 카테고리 목록
const badges=[
    {id:1, name:"실천의 시작", img:"img_src1"},
    {id:2, name:"티끌모아 태산", img:"img_src2"},
    {id:3, name: "단골 손님", img:"img_src"},
    {id:4, name: "커피중독", img:"img_src"},
    {id:5, name: "텀블러 홀릭", img:"img_src"},
    {id:6, name: "환경 지킴이", img:"img_src"},
    {id:7, name: "당신은 천사", img:"img_src"},
    {id:8, name: "포인트 재벌", img:"img_src"},
    {id:9, name: "10회 달성", img:"img_src"},
    {id:10, name: "50회 달성", img:"img_src"},
    {id:11, name: "100회 달성", img:"img_src"},
    {id:12, name: "500회 달성", img:"img_src"},
]

//뱃지 아이콘 생성
function Badge({badge}){
    return(
        <div>
            <img src={badge.img} alt={badge.name}/>
            <p>{badge.name}</p>
        </div>
    );
}

//map함수로 badges 순회하며 뱃지그리드 생성
function badgeGrid(){
    return (
        <div className="badgeGrid">
            {
                badges.map(badge=>{
                    <Badge key={badge.id} badge={badge} />
                })
            }
        </div>
    )
}