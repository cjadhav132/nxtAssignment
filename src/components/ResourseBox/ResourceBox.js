import './__styles__/resourceBox.css'

const ResourseBox = ({ resourse }) => {
    return (
        <div className="col-4" style={{padding: "16px"}}>
            <div key={resourse.id} className="mainContainer">
                <div className="firstRow">
                    <img src={resourse.icon_url} className="logoImg" alt="" />
                    <div>
                        <div>{resourse.title}</div>
                        <div className="categoryStyle">{resourse.category}</div>
                    </div>
                </div>
                <div className="secondRow">
                    <a href={resourse.link}>{resourse.link}</a>
                </div>
                <div className="thirdRow">{resourse.description}</div>
            </div>
        </div>
    )
}

export default ResourseBox