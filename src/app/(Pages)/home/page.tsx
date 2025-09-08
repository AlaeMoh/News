"use client"
import { fetchBreakingNews } from '@/app/service/api';
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/home.css"



type Article = {
  
  ai_content: string | null;        // "ONLY AVAILABLE..." text
  ai_org: string | null;            // "ONLY AVAILABLE..." text
  ai_region: string | null;         // "ONLY AVAILABLE..." text
  ai_summary: string | null;        // "ONLY AVAILABLE..." text
  ai_tag: string | null;            // "ONLY AVAILABLE..." text

  article_id: string;               // unique hash ID
  category: string[];               // e.g., ['sports']
  content: string;                  // article body or "ONLY AVAILABLE..."
  country: string[];                // e.g., ['united states of america']
  creator: string[];                // e.g., ['Inside Hilltopper Sports']
  description: string;              // short description / excerpt
  duplicate: boolean;               // true/false
  image_url: string | null;         // URL to image
  keywords: string[];               // array of keyword strings
  language: string;                 // language code, e.g., "english"
  link: string;                     // article URL
  pubDate: string;                  // timestamp string, e.g., "2025-09-05 04:36:55"
  pubDateTZ: string;                // timezone string, e.g., "UTC"

  sentiment: string | null;         // only in paid plan
  sentiment_stats: string | null;   // only in paid plan

  source_icon: string | null;       // URL to icon
  source_id: string;                // source identifier, e.g., "yahoo"
  source_name: string;              // human-readable source, e.g., "Yahoo! News"
  source_priority: number;          // numeric priority
  source_url: string;               // base URL of source
  title: string;                    // article title
  video_url: string | null;         // video link if available
};

export default function Page() {
    const [articles, setArticles]= useState<Article[]>([])

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const breakingNews= await fetchBreakingNews ();
                setArticles(breakingNews)
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
   
      <div className="col-6 pb-5 pt-5" key={item.article_id}>
        {/* <!-- Article Card --> */}
        <div className="card shadow-lg border-0 rounded-4">
          <img src={item.image_url || null}
               className="card-img-top rounded-top-4"
               alt="Article image"></img>
          <div className="card-body">
            <h5 className="card-title">
            {item.title}
            </h5>
            <p className="card-subtitle text-muted mb-2">
              Source: <a href="" target="_blank">{item.source_name}</a> | Published: {item.pubDate}
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
