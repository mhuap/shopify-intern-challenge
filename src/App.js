import { useEffect, useState } from "react";
import Post from "./components/post";
import "./styles.css";
const axios = require("axios");

export default function App() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod", {
        params: {
          count: 5,
          api_key: "Jap4zFA0qpPdnKXSFe55Dnn3bD9w6jmnFnS0hr9L"
        }
      })
      .then((response) => {
        // console.log(response)
        setApiData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log("oops", error);
      });
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Spacestagram</h1>
        <span className="subtitle">Image-sharing from the final frontier</span>
      </header>
      <main>
        {apiData &&
          apiData.map((image, index) => (
            <Post
              key={index}
              src={image.url}
              title={image.title}
              date={image.date}
              explanation={image.explanation}
            />
          ))}
      </main>

      <footer>
        <a href="https://github.com/mhuap/shopify-intern-challenge">
          See on Github
        </a>
      </footer>
    </div>
  );
}
