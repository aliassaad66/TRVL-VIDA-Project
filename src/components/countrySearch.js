const React = require("react");
const { useState } = require("react");

function CountrySearch() {
    const [name, setName] = useState("");
    const [data, handleData] = useState(null);

    let dataMarkup = "There is no data to show";
    if (data !== null) {
      dataMarkup = JSON.stringify(data);
    }
  
    function updateName(event) {
      setName(event.target.value);
    }

    function search(event) {
        event.preventDefault();
        let url = `https://restcountries.eu/rest/v2/name/${name}`;
        let queryString = `?fullText=true`;
        fetch(url + queryString, { method: "GET" })
          .then(function waitForData(res) {
            return res.json();
          })
          .then(function (data) {
            handleData(data);
          });
      }

    
    return(
        <div>
        <form onSubmit={search}>
          <input
            type="text"
            placeholder="Country"
            value={name}
            onChange={updateName}
          />
          <input type="submit" value="Search" />
        </form>
        <p>{dataMarkup}</p>
      </div>
    );
}
   
module.exports = CountrySearch;


