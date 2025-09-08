const API_KEY= "pub_3d8c0110efaf478384067b69c3feeafb"

export const fetchBreakingNews = async ()=>{
try{
    const res= await fetch(`https://newsdata.io/api/1/latest?apikey=${API_KEY}&country=us&prioritydomain=top`);
    const data= await res.json();
    return data.results;
}catch(err){
         console.error("Error fetching products:", err);
      }

}

export const fetchLastPoliticalNews = async ()=>{
    try{
        const res = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_3d8c0110efaf478384067b69c3feeafb&category=politics&country=us`)
        const data= await res.json();
       return data.results;
        }catch(err){
         console.error("Error fetching products:", err);
      }
}

export const fetchGoogleElectricNews = async ()=>{
    try{
        const res = await fetch(`https://newsdata.io/api/1/latest?apikey=${API_KEY}&q=electric%20vehicles%20OR%20sustainability&domainurl=news.google.com`)
        const data= await res.json();
    
       return data.results;
       
        }catch(err){
         console.error("Error fetching products:", err);
      }
}

export const fetchGooglePoliticalNews = async ()=>{
    try{
        const res = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_3d8c0110efaf478384067b69c3feeafb&q=politics&domainurl=news.google.com`)
        const data= await res.json();
    
       return data.results;
       
        }catch(err){
         console.error("Error fetching products:", err);
      }
}

export const fetchHistoricalNews = async () =>{
        try{
        const res = await fetch(`https://newsdata.io/api/1/crypto?apikey=${API_KEY}&coin=btc&from_date=2023-07-24`)
        const data= await res.json();
    
       return data.results;
       
        }catch(err){
         console.error("Error fetching products:", err);
      }
    }
export const fetchArticleById = async (id:string)=>{
    try{
        const res = await fetch(`https://newsdata.io/api/1/article/${id}?apikey=${API_KEY}`)
        const data= await res.json();
    
       return data.results;
       
        }catch(err){
         console.error("Error fetching products:", err);
      }
        

}