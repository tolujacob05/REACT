import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

function Header() {
  return (
    <>
      <div>
        <header className="header">
          <h1>Fast React Pizza</h1>
        </header>
      </div>
    </>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <>
      <div>
        <main className="menu">
          <h2>Our Menu</h2>

          {numPizzas > 0 ? (
            <ul className="pizzas">
              {pizzaData.map((pizza) => (
                <Pizza pizzaObj={pizza} key={pizza.name} />
              ))}
            </ul>
          ) : (
            <p>We're still working on our menu. Please check back again</p>
          )}

          {/*<Pizza
            name="Pizza Spinaci"
            ingredients="Tomato, mozarella, spinach, and ricotta cheese"
            photoName="pizzas/spinaci.jpg"
            price={10}
          />

          <Pizza
            name="Pizza funghi"
            ingredients="Tomato, mushrooms"
            photoName="pizzas/funghi.jpg"
            price={12}
          />*/}
        </main>
      </div>
    </>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;

  return (
    <>
      <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <div>
          <h2>{pizzaObj.name}</h2>
          <p>{pizzaObj.ingredients}</p>

          {/* {pizzaObj.soldOut ? <span>SOLD OUT</span> ? <span>{`Price: ${pizzaObj.price + 4}`}</span>} */}
          <span>
            {pizzaObj.soldOut ? " SOLD OUT " : `Price: ${pizzaObj.price + 4}`}
          </span>
        </div>
      </li>
    </>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>"We're open until {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order Now</button>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>"We're open until {closeHour}:00. Come visit us or order online.</p>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
