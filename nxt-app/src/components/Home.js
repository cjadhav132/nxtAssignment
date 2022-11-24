import { useEffect, useState } from 'react'


const Home = () => {

    const [dataState, setData] = useState()

    useEffect(() => {
        console.log("getting resources")
        getData()
    }, [])

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

    return (
        <div>
            <h1>Hello world</h1>
        </div>

    )
}

export default Home