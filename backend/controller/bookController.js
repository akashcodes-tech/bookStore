import Book from "../model/bookModel.js"

const getBook = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json({ success: true, data: books });
    } catch (error) {
        console.error("Error fetching books:", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export default getBook;