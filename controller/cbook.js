
const Book = require('../model/book');


exports.addbook =async(req,res) =>{
    try{
        const{url,title,author,price,desc,lang,wishlist} = req.body;
        const newBook= new Book({ url,title,author,price,desc,lang,wishlist});
        await newBook.save();
        res.status(201).json({ message: 'Book added', product : newBook });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
}

exports.getbookById = async (req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  }
  
exports.getsinglebookById =async (req, res) => {
    try {
        const book = await book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: 'Book not found' });
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  }
  
exports.updatebookById = async (req, res) => {
    try {
        const {url,title,author,price,desc,lang,wishlist } = req.body;
        const updatedBook = await book.findByIdAndUpdate(
            req.params.id,
            { url,title,author,price,desc,lang,wishlist },
            // { new: true, runValidators: true } // Return updated document & validate
        );
        if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
        res.status(200).json({ message: 'Book updated', book: updatedBook });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  }


exports.wishlistbyId = async(req,res) =>{
    try{
        const { id } = req.params;
        const { wishlist } = req.body;
        const wishlisted =await book.findByIdAndUpdate(
            id,
            {wishlist}
        );
        // Check if the story was found and updated
        if (!wishlisted) {
            return res.status(404).json({ message: 'not found' });
        }
        res.status(200).json({ message: 'Added to wishlist', book: wishlisted });


    }catch{
        res.status(500).json({ error: error.message });

    }
}

exports.deletebookById = async (req, res) => {
    try {
        const deletedbook = await book.findByIdAndDelete(req.params.id);
        if (!deletedbook) return res.status(404).json({ message: 'Book not found' });
        res.status(200).json({ message: 'Book deleted', user: deletedbook});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  }
  