// import { useState, useEffect } from "react";

// const Allbooks = () => {
//     const [books, setBooks] = useState([]);

   
//     return (
//         <div className="bg-gray-100 py-10">
//             <div className="max-w-6xl mx-auto text-center">
//                 <h2 className="text-blue-500 text-lg font-semibold">Best Books</h2>
//                 <h1 className="text-3xl font-bold mt-2">Top Books</h1>
//                 <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet consectetur.</p>
//             </div>

            
//             <div className="text-center mt-8">
//                 <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
//                     View All Books
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Allbooks;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const Allbooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Initialize navigation

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

    const displayedBooks = books.slice(0, 4); // Always show only 4 books here

    return (
        <div className="bg-gray-100 py-10">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-blue-500 text-lg font-semibold">Best Books</h2>
                <h1 className="text-3xl font-bold mt-2">Top Books</h1>
                <p className="text-gray-500 mt-2">Explore our collection of best books.</p>
            </div>

            {loading && <p className="text-center mt-5 text-blue-500">Loading books...</p>}
            {error && <p className="text-center mt-5 text-red-500">Error: {error}</p>}

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                {displayedBooks.map((book) => (
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

            {/* Redirect to the /books page when clicking "View All Books" */}
            {books.length > 4 && (
                <div className="text-center mt-8">
                    <button   
                        onClick={() => navigate("/books")}  // Redirect to BooksPage
                        className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
                    >
                        View All Books
                    </button>
                </div>
            )}
        </div>
    );
};

export default Allbooks;
