import { useState } from 'react'
import rightImg from './imgs/right.png'
import './__styles__/AddResourse.css'

const AddResourse = ({ goToHome, accepted, rejected }) => {

    const buttonVals = ["Resource", "Request", "User"]
    const [title, setTitle] = useState('')
    const [link, setLink] = useState('')
    const [url, setUrl] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [tagName, setTag] = useState(buttonVals[0])

    const btnDis = !(title && link && url && category)

    const handleTitle = ((e) => {
        setTitle(e.target.value)
    })

    const handleLink = ((e) => {
        setLink(e.target.value)
    })

    const handleUrl = ((e) => {
        setUrl(e.target.value)
    })

    const handleDescription = ((e) => {
        setDescription(e.target.value)
    })

    const handleCategory = ((e) => {
        setCategory(e.target.value)
    })

    const handleTag = ((e) => {
        setCategory(e.target.value)
    })

    const finalSubmit = async () => {
        const addItemUrl = "https://media-content.ccbp.in/website/react-assignment/add_resource.json"
        fetch(addItemUrl).then((res) => {
            if (res.status >= 400) {
                rejected()
            }
            accepted()
        })
    }

    return (
        <div className="row rowStyle">
            <div className="col-6 colStyle leftCol">
                <div>
                    <div className='backDiv' onClick={goToHome}>{`< Users`}</div>
                </div>
                <div className='contentMainContainer'>
                    <div className='itemTitle'>Item Details</div>
                    <div className='itemSubtitleContainer'>
                        <span className='itemSubtitle'>ITEM TITLE</span>
                        <input value={title} onChange={handleTitle} className='itemInput' />
                    </div>
                    <div className='itemSubtitleContainer'>
                        <span className='itemSubtitle'>LINK</span>
                        <input value={link} onChange={handleLink} className='itemInput' />
                    </div>
                    <div className='itemSubtitleContainer'>
                        <span className='itemSubtitle'>ICON URL</span>
                        <input className='itemInput' value={url} onChange={handleUrl} />
                    </div>
                    <div className='itemSubtitleContainer'>
                        <span className='itemSubtitle'>TAG NAME</span>
                        <br />
                        <select className='itemInput' style={{ color: '#7E858E' }}>
                            {buttonVals.map((val) => {
                                return (
                                    <option value={val} key={val} >{val}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className='itemSubtitleContainer'>
                        <span className='itemSubtitle'>CATEGORY</span>
                        <input className='itemInput' value={category} onChange={handleCategory} />
                    </div>
                    <div className='itemSubtitleContainer'>
                        <span className='itemSubtitle'>DESCRIPTION</span>
                        <input className='itemInput' value={description} onChange={handleDescription} />
                    </div>
                    <div>
                        <button className='btn btn-primary' disabled={btnDis} onClick={finalSubmit} >CREATE</button>
                    </div>
                </div>
            </div>
            <div className="col-6 colStyle" >
                <img src={rightImg} alt="" className='rightImgStyle' />
            </div>
        </div>
    )
}

export default AddResourse