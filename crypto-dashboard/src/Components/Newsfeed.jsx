import React, { useEffect, useState } from 'react'
import axios from "axios";



function Newsfeed() {
    const [articles, setArticles] = useState(null)

    useEffect(() => {




        const options = {
            method: 'GET',
            url: 'https://crypto-news15.p.rapidapi.com/news',
            headers: {
                'x-rapidapi-host': 'crypto-news15.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            setArticles(response.data)
        }).catch(function (error) {
            console.error(error);
        });



    }, [])


    const first7Articles = articles?.slice(0, 7)

    return (
        <div className="news-feed">
            <h2>News Feed.</h2>
            {first7Articles?.map((article, index) => (
                <div key={index}>
                    <a href={article.url}>
                    <p>{article.title}</p>
                    </a>
                </div>
            ))}

        </div>
    )
}

export default Newsfeed
