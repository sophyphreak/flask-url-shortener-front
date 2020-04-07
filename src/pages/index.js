import React, {useState} from "react"
import "./style.css"

const IndexPage = () => {
  const [inputValue, setInputValue] = useState("https://www.google.com");
return (
  <div>
    <div className="container">
      <h2>API Project: URL Shortener Microservice</h2>
      <h3>User Story: </h3>
      <ol>
        <li>
          I can POST a URL to <code>[project_url]/api/shorturl/new</code> and I
          will receive a shortened URL in the JSON response.
          <br />
          Example :{" "}
          <code>{'{"original_url":"https://www.google.com","short_url":1}'}</code>
        </li>
        <li>
          If I pass an invalid URL that doesn't follow the{" "}
          <code>http(s)://www.example.com(/more/routes)</code> format, the JSON
          response will contain an error like{" "}
          <code>{'{"error":"invalid URL"}'}</code>
        </li>
        <li>
          When I visit the shortened URL, it will redirect me to my original
          link.
        </li>
      </ol>

      <h3>Short URL Creation </h3>
      <p>
        example: <code>POST https://flask-url-shortener.andrew-horn-portfolio.life/api/shorturl/new</code> -{" "}
        <code>https://www.google.com</code>
      </p>
      <form action="https://flask-url-shortener.andrew-horn-portfolio.life/api/shorturl/new" method="POST">
        <label for="url_input">URL to be shortened</label>
        <input
          id="url_input"
          type="text"
          name="url"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input type="submit" value="POST URL" />
      </form>
      <h3>Example Usage:</h3>
      <a href="https://flask-url-shortener.andrew-horn-portfolio.life/api/shorturl/3">https://flask-url-shortener.andrew-horn-portfolio.life/api/shorturl/3</a>

      <h3>Will Redirect to:</h3>
      <p>https://www.washingtonpost.com</p>
    </div>
  </div>
)
}

export default IndexPage
