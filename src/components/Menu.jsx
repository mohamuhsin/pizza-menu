import Pizza from "./Pizza.jsx";
import { pizzaData } from "../data.js";

export default function Menu() {
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            <p>
                Authentic Italian cuisine. 6 creative dishes to choose from. All from
                our stone oven, all organic, all delicious.
            </p>

            <ul className="pizzas">
                {pizzaData.map((pizza) => (
                    <Pizza key={pizza.name} pizza={pizza} />
                ))}
            </ul>
        </main>
    );
}
