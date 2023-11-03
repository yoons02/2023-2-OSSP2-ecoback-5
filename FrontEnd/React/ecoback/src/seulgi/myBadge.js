import badges from './badges.json';
//뱃지 아이콘 생성
function Badge({badge}){
    const textStyle = {
        textAlign: 'center', 
        margin: '0', 
        padding: '0',
    };
    const badgeStyle={
        boxSizing: 'border-box',//padding, margin이 너비에 포함되도록
        maxWidth:'50px',
        maxHeight:'50px',
        display:'block',
        margin:'0 auto'

    }
    const containerStyle = {
        width: '22%', // 부모 요소의 1/3을 차지하도록 설정
        padding: '10px' // 여백을 주어 뱃지가 서로 닿지 않도록
    };

    return(
        <div style={containerStyle}>
            <img id="badgeImg" src={require(`../image/${badge.img}`)} alt={badge.name} style={badgeStyle}/>
            <p style={textStyle}>{badge.name}</p>
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