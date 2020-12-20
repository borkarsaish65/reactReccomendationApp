import React, { useState } from "react";
import "./App.css";

export default function App() {
  // var books = {
  //   "Atomic Habits": { Author: "James Clear", Rating: "4/5" },
  //   Alchemist: { Author: "Paulo Coelho", Rating: "3/5" },
  //   "The Slight Edge": { Author: "Jeff Olsen", Rating: "4/5" }
  // };

  const [currView, setCategoryView] = useState("movies");

  var dataItems = {
    books: [
      {
        name: "Atomic Habits",
        author: "James Clear",
        rating: "4/5",
        info:
          "Excellent book on building bad habits. Quitting bad habits and building new Identity. Must read."
      },
      {
        name: "The Alchemist",
        author: "Paulo Coelho",
        rating: "3/5",
        info:
          "Book about why you should never give up, and how to keep moving forward when there is no easy answers."
      },
      {
        name: "The Slight Edge",
        author: "Jeff Olsen",
        rating: "4/5",
        info:
          "Great book on how to create change in your life using tiny consistent habits."
      }
    ],
    movies: [
      {
        name: "Tumbbad",
        info: "A unique Indian horror movie!",
        rating: "3.5/5"
      },
      {
        name: "Spiderman:Into the Spiderverse",
        rating: "4/5",
        info:
          "Insanely good movie. If you are fan of spiderman or not you still need to watch this movie!"
      },
      {
        name: "AndhaDhun",
        rating: "4/5",
        info:
          "This movie is hilarious as well as engaging. Keeps you on the edge of your seat till end."
      }
    ],
    anime: [
      {
        name: "Attack On Titan",
        info: "Action packed and filled with mysteries.",
        rating: "5/5"
      },
      {
        name: "Full Metal Alchemist",
        rating: "4/5",
        info:
          "Tale about two brothers who tries to bring their dead mother back and pay the price."
      }
    ],
    podcasts: [
      {
        name: "Tea With Tanay",
        rating: "5/5",
        info:
          "Podcast about a programmer who shares amazing insights without ever having tea."
      }
    ]
  };

  var dataItemsArray = Object.keys(dataItems);

  function setGenre(genre) {
    console.log(genre);
    setCategoryView(genre);
  }

  function newbg(index) {
    if (index % 1 == 0) {
      return "gray";
    }
  }

  return (
    <div className="App">
      <section className="header">
        <h1>My Recommendation</h1>
      </section>

      <div className="body">
        <div className="category">
          {dataItemsArray.map((item) => {
            return <button onClick={() => setGenre(item)}>{item}</button>;
          })}
        </div>
        <div className="output">
          {dataItems[currView].map((item, index) => {
            return (
              <li
                style={{ backgroundColor: newbg(item) }}
                key={item.name}
                className="lis"
              >
                <div className="box">
                  <h2>{item.name}</h2>
                  <div className="">
                    <p style={{ textAlign: "left" }}>{item.info}</p>
                    <p style={{ textAlign: "left" }}>Rating:{item.rating}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </div>
      </div>

      <section className="footer">
        <p>App gives my favourite recommendations! Enjoy!</p>
      </section>
    </div>
  );
}
