import badges from './badges.json';
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