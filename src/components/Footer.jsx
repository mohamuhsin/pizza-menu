export default function Footer() {
    const hour = new Date().getHours();
    const openHr = 11;
    const closedHr = 24;
    const isOpen = hour >= openHr && hour <= closedHr;

    return (
        <footer className="footer">
            <div className="order">
                <p>
                    {isOpen ? (
                        <p>We are open until {openHr}:00, Come visit us or order online.</p>
                    ) : (
                        <p>
                            We are happy to welcome you between {openHr}:00 and {closedHr}
                            :00.
                        </p>
                    )}
                </p>
                {isOpen && <button className="btn">Order</button>}
            </div>
        </footer>
    );
}
