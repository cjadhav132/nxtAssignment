import { useEffect, useState } from 'react'
import './__styles__/home.css'
import ViewComponent from '../viewComponent/ViewComponent'
import { useDispatch } from "react-redux"
import { getData } from '../../APIs/mainApis'

const Home = () => {

    const buttonVals = ["Resource", "Request", "User"]
    const [selectedView, setSelectedView] = useState("Resource")
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])

    const handleViewSelection = (e) => {
        setSelectedView(e.target.value)
    }

    return (
        <div className='homeDiv'>
            <div>
                <div className="viewSelectionContainer">
                    {buttonVals.map(val => {
                        return (
                            <button
                                className={`viewSelection ${selectedView === val ? 'viewSelectionSelected' : ''}`}
                                onClick={handleViewSelection}
                                value={val}
                                key={val}
                            >
                                {`${val}s`}
                            </button>
                        )
                    })}
                </div>
            </div>
            <ViewComponent view={selectedView} />
        </div>
    )
}

export default Home