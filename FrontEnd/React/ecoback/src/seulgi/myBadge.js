import badges from './jsonFile/badges.json';
import './mypage.css'

//뱃지 아이콘 생성
function Badge({badge}){
    const containerStyle = {
        width: '20vw', 
        margin:'5%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',

    };

    return(
        <div style={containerStyle}>
            <div id="hexagon">
            <img id="badgeImg" src={require(`../image/${badge.img}`)} alt={badge.name} />
            </div>
            
            <p id="badgeName">{badge.name}</p>
        </div>
    );
}

//map함수로 badges 순회하며 뱃지그리드 생성
function BadgeGrid(){
    return (
        <div className="badgeBox">
            {
                badges.map(badge=>{
                    return <Badge key={badge.id} badge={badge} />
                })
            }
        </div>
    )
}

export default BadgeGrid;