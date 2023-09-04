import React, { useEffect, useState } from 'react';

const InsightContent = () => {
  // Create a state variable to store the fetched data
  const [newsData, setNewsData] = useState([]);
  // Create a state variable to track the loading state
  const [loading, setLoading] = useState(true);

  // Define the API endpoint
  const apiUrl = 'https://newsapi.org/v2/everything?q=games&apiKey=3062d5ac405947cfb37d695df84902c6';

  // Use the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        // Update the state variable with the fetched data
        setNewsData(data.articles);
        // Set loading to false when data is fetched
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Set loading to false when there's an error
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // The empty array [] ensures that this effect runs only once when the component mounts

  return (
    <>
      {loading ? ( // Render a loading component while data is being fetched
        <div className="text-center p-4 w-full">
          <img src="./loader.gif" alt="" />
        </div>
      ) : (
        <div className="lg:pl-[19.5rem]">
          <div className="flex max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[1rem] mx-[1rem] xl:pr-16">
            <div className="lg:w-[75%]">
              {/* Render the fetched data */}
              {newsData.map((article, index) =>
                article.author !== null ? (
                  <a href={article.url} target="_blank" key={index}>
                    <div className="bg-[#F9FFFF] hover:border-indigo-200 hover:border-inset hover:border m-2 rounded-xl p-5 cursor-pointer">
                      <div className="flex gap-4 items-start">
                        <div className="border w-[64px] h-[64px] rounded-xl">
                          <img src={article.urlToImage} alt={article.title} className="w-[64px] h-[64px] w-cover" />
                        </div>
                        <div className="w-full px-2">
                          <div className="flex justify-between items-center mb-4">
                            <div>
                              <h1 className="font-medium text-xl">{article.title}</h1>
                            </div>
                            <div className="">
                              <div className="bg-blue-500 font-medium text-sm p-1 px-2 rounded-full">
                                <div className="text-gray-100">{article.source.name}</div>
                              </div>
                            </div>
                          </div>
                          <div className="text-sm font-medium mb-2">
                            <p className="line-clamp-2">{article.description}</p>
                          </div>
                          <div className="text-xs">
                            <p>
                              Article By <a className="font-bold">{article.author}</a>, {article.publishedAt}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                ) : (
                  <></> // Skip mapping articles with null authors
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InsightContent;
