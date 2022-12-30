import { useCallback, useEffect, useState } from "react"
import ResourseBox from "../ResourseBox/ResourceBox"
import './__styles__/ViewComponent.css'
import search from '../../imgs/search.png'
import { useSelector, connect } from "react-redux"

const ViewComponent = ({ view }) => {

    const [resources, setResources] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [pgVals, setPgVals] = useState([])
    const [start, setStart] = useState(0)
    const data = useSelector(state =>  state.businesses)

    const cardsToShow = 6

    const basePagination = (vals) => {
        let n = vals.length
        let cnt = 1
        const temp = []
        while (n > 0) {
            temp.push(cnt)
            cnt += 1
            n -= cardsToShow
        }
        setPgVals(temp)
        setStart(0)
    }

    const handlePagination = (e) => {
        // console.log(e.target.value)
        setStart((e.target.value - 1) * cardsToShow)

    }

    const handleData = useCallback(() => {
        if (data) {
            if (view === "Resource") {
                setResources(data)
                basePagination(data)
            }
            else {
                const temp = data.filter(d => {
                    return d.tag === view.toLowerCase()
                })
                setResources(temp)
                basePagination(temp)
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
                {resources.map((res, index) => {
                    if ((start <= index) && (index < (start + cardsToShow))) {
                        return (
                            <ResourseBox resourse={res} key={res.id} />
                        )
                    }
                    return null
                })}
            </div>
            <div>
                <div className="bottomPage" aria-label="Page navigation example">
                    <ul className="pagination">
                        {pgVals.map(val => {
                            return (
                                <li
                                    className={`page-item page-link ${((start / cardsToShow) === val - 1) ? 'pgActive' : ''}`}
                                    value={val}
                                    onClick={handlePagination}
                                    key={val}
                                >
                                    {val}
                                </li>
                            )
                        })}

                    </ul>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        businesses: state.businesses
    };
  };
  

export default connect(mapStateToProps)(ViewComponent)