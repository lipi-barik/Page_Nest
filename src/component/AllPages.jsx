import { useState, useEffect } from "react";

const AllPages = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/v1/books");
                if (!response.ok) {
                    throw new Error("Failed to fetch books");
                }
                const data = await response.json();
                setBooks(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div className="bg-gray-100 py-10">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-blue-500 text-lg font-semibold">All Books</h2>
                <h1 className="text-3xl font-bold mt-2">Browse Our Collection</h1>
                <p className="text-gray-500 mt-2">Find the perfect book from our extensive collection.</p>
            </div>

            {loading && <p className="text-center mt-5 text-blue-500">Loading books...</p>}
            {error && <p className="text-center mt-5 text-red-500">Error: {error}</p>}

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                {books.map((book) => (
                    <div key={book._id} className="bg-white p-4 rounded-lg shadow-md">
                        <img src={book.url} alt={book.title} className="w-full h-40 object-cover rounded-md" />
                        <h3 className="text-lg font-semibold mt-2">{book.title}</h3>
                        <p className="text-gray-500 text-sm">by {book.author}</p>
                        <p className="text-gray-900 font-bold mt-2">₹{book.price}</p>
                        <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllPages;
