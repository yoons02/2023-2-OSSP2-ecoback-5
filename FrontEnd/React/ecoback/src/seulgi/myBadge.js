import badges from './jsonFile/badges.json';
import './mypage.css'

//뱃지 아이콘 생성
function Badge({badge}){
    const containerStyle = {
        width: '20%', 
        padding: '10px',
        margin:'20px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',

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
    const gridStyle = {
        display: 'flex',
        flexWrap: 'wrap', // 아이템이 넘치면 다음 줄로 감싸기
        margin: '0 -10px' // 컨테이너의 여백을 상쇄한다
    };
    return (
        <div className="badgeGrid" style={gridStyle}>
            {
                badges.map(badge=>{
                    return <Badge key={badge.id} badge={badge} />
                })
            }
        </div>
    )
}

export default BadgeGrid;