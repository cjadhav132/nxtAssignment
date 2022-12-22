import { useCallback, useEffect, useState } from "react"
import ResourseBox from "../ResourseBox/ResourceBox"
import './__styles__/ViewComponent.css'
import search from '../../imgs/search.png'

const ViewComponent = ({ view, data }) => {

    const [resources, setResources] = useState([])
    const [searchValue, setSearchValue] = useState('')

    const handleData = useCallback(() => {
        if (data) {
            if (view === "Resource") {
                setResources(data)
            }
            else {
                const temp = data.filter(d => {
                    return d.tag === view.toLowerCase()
                })
                setResources(temp)
            }
        }
    }, [view, data])

    useEffect(() => {
        handleData()
        setSearchValue('')
    }, [view, handleData])

    const handleSearch = useCallback((e) => {
        const ipValue = e.target.value
        const compareVal = ipValue.toLowerCase()
        if (ipValue.length === 0) {
            handleData()
        }
        else {
            const temp = resources.filter((res) => {
                return compareVal === res.title.slice(0, ipValue.length).toLowerCase()
            })
            setResources(temp)
        }
        setSearchValue(ipValue)
    }, [resources, handleData])

    return (
        <div style={{ margin: "0px 10%" }}>
            <div className="searchBar">
                <div>
                    <img className="searchImg" src={search} alt="" />
                </div>
                <input value={searchValue} onChange={handleSearch} className="searchInput" placeholder="Search" />
            </div>
            <div className="row">
                {resources.map(res => {
                    return (
                        <ResourseBox resourse={res} key={res.id} />
                    )
                })}
            </div>
        </div>
    )
}

export default ViewComponent