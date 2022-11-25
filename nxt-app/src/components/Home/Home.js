import { useEffect, useState } from 'react'
import './__styles__/home.css'
import ViewComponent from '../viewComponent/ViewComponent'

const Home = () => {

    const buttonVals = ["Resource", "Request", "User"]
    const [dataState, setData] = useState([])
    const [selectedView, setSelectedView] = useState("Resource")

    useEffect(() => {
        getData()
    }, [setData])

    const getData = async () => {
        const res = await fetch(
            "https://media-content.ccbp.in/website/react-assignment/resources.json"
        ).then(response => {
            if (response.status >= 400) {
                throw Error
            }
            return response.json()
        }).then(data => {
            console.log(data)
            return data
        })
        setData(res)
    }

    const handleViewSelection = (e) => {
        setSelectedView(e.target.value)
    }

    return (
        <div>
            
            <div className="viewSelectionContainer">
                {buttonVals.map(val => {
                    return (
                        <button
                            className={`viewSelection ${selectedView == val ? 'viewSelectionSelected' : ''}`}
                            onClick={handleViewSelection}
                            value={val}
                            key={val}
                        >
                            {`${val}s`}
                        </button>
                    )
                })}
            </div>
            <ViewComponent view={selectedView} data={dataState} />
        </div>
    )
}

export default Home