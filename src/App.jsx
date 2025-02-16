import axios from 'axios'
import { useState, useEffect } from 'react'
import Feed from './Feed';
function App() {
  const [articles, setArticles] = useState([]);
  const [source, setSource] = useState('https://rssvercel.vercel.app/yle');
  
  const sources = [
    { value: 'https://rssvercel.vercel.app/yle', label: 'YLE' },
    { value: 'https://rssvercel.vercel.app/hs', label: 'Helsingin Sanomat' },
    { value: 'https://rssvercel.vercel.app/euro', label: 'European Newsroom' },
  ]; 
  /* const sources = [
    { value: 'http://localhost:4000/euro', label: 'European Newsroom' },
    { value: 'http://localhost:4000/yle', label: 'YLE' },
    { value: 'http://localhost:4000/hs', label: 'Helsingin Sanomat' },
  ]; */

  console.log(articles);
  const fetchArticles = async () => {
    try {
      const response = await axios.get(source);
      setArticles(response.data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };


  // Päivittää lähteen ja hakee artikkelit
  const handleSourceChange = (event) => {
    const newSource = event.target.value;
    setSource(newSource);
    //fetchArticles(source); // Varmistaa, että artikkelit päivittyvät heti
  };

  // Hakee artikkelit alussa
  useEffect(() => {
    fetchArticles(source);
  }, [source]); // Tyhjä dependency array -> ajetaan vain kerran
  
  return (
    <>
      <h1>News</h1>
      <h3>Select source</h3>
      {sources.map((src) => (
        <label key={src.value} style={{ marginRight: '10px' }}>
          <input
            type="radio"
            name="rss_source"
            value={src.value}
            checked={source === src.value}
            onChange={handleSourceChange}
          />
          {src.label}
        </label>
      ))}
      
      {articles.map((item, index) => (
            <Feed
                key={index}
                title={item.title}
                link={item.link}
                description={item.description}
            />
      ))}
    </>
  )
}

export default App;
