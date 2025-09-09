"use client"
import { fetchBreakingNews, fetchTopArticles } from '@/app/service/api';
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/home.css"


export interface Source {
  id: string | null;
  name: string;
}

export interface Article {
  source: Source;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string; // ISO date string
  content: string | null;
}

export default function Page() {
    const [articles, setArticles]= useState<Article[]>([])

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const breakingNews= await fetchTopArticles ();
                setArticles(breakingNews)
                console.log(breakingNews)
            }catch(error){
                console.error("Error fetching products:", error);
            }
        }
        fetchData()
    },[])
  return (
    <div className='container'>
    <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
       <h1 className='text-danger text-center pt-3'>Breaking News</h1>
      </div>
        <div className="row justify-content-center pb-5">
        {articles.map((item)=>(
   
      <div className="col-6 pb-5 pt-5" key={item.title}>
        {/* <!-- Article Card --> */}
        <div className="card shadow-lg border-0 rounded-4">
          <img src={item.urlToImage || null}
               className="card-img-top rounded-top-4"
               alt="Article image"></img>
          <div className="card-body">
            <h5 className="card-title">
            {item.title}
            </h5>
            <p className="card-subtitle text-muted mb-2">
              Source: <a href="" target="_blank">{item.title}</a> | Published: {item.publishedAt}
            </p>
            <p className="card-text">
                {item.description}
            </p>
            <a href={`/article`}
               className="btn btn-danger"
               target="_blank"
               onClick={() => localStorage.setItem("selectedArticle", JSON.stringify(item))}>
              Read Full Article
            </a>
          </div>
        </div>
        {/* <!-- End Article Card --> */}
      </div>
    
      
       ))}
        </div>
    </div>
  )
}
