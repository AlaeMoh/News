"use client"
import { useParams } from 'next/navigation';
import React, { use, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchArticleById } from '@/app/service/api';
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
   

 const [article, setArticle] = useState<Article>();

  useEffect(() => {
    const stored = localStorage.getItem("selectedArticle");
    if (stored) {
      setArticle(JSON.parse(stored));
      console.log(stored)
    }
  }, []);

  if (!article) return <p>No article selected</p>;


  return (
        <div className="container py-5">
      <h2>{article.title}</h2>
      {article.image_url && (
        <img src={article.image_url} alt={article.title} className="img-fluid rounded mb-3" />
      )}
      <p>{article.description}</p>
<p>{article.content}</p>
    </div>
  )
}
