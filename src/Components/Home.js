import React, { useEffect } from 'react'

const Home = () => {


    useEffect(() => {
        setInterval(() => {
            console.log("iam trigerrred")
            window.location.reload(false);
        }, 5000)
    }, [])

    return (
        <div>Home component</div>
    )
}

export default Home