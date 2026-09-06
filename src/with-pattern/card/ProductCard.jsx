import Card from "./Card";

function ProductCard() {
    return (
        <Card>
            <Card.Header>
                <h2 className="text-lg font-semibold text-gray-900">
                    iPhone 15 Pro
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    Latest Apple smartphone
                </p>
            </Card.Header>

            <Card.Body>
                <p className="text-gray-600">
                    Experience powerful performance with the A17 Pro chip,
                    titanium design, and an advanced camera system.
                </p>

                <p className="mt-4 text-2xl font-bold text-gray-900">
                    ₹1,29,999
                </p>
            </Card.Body>

            <Card.Footer>
                <div className="flex justify-end gap-3">
                    <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                        Cancel
                    </button>

                    <button className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
                        Buy Now
                    </button>
                </div>
            </Card.Footer>
        </Card>
    );
}

export default ProductCard;