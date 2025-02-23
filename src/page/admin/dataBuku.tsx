import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/admin/Sidebar';

interface Book {
  title: string;
  author: string;
  year: string;
  publisher: string;
  pages: string;
  isbn: string;
}

const DataBuku: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([
    { title: "The Innovator's Dilemma", author: "Clayton M. Christensen", year: "1997", publisher: "Harvard Business Review Press", pages: "286", isbn: "9781633691780" },
    { title: "The Lean Startup", author: "Eric Ries", year: "2011", publisher: "Crown Business", pages: "336", isbn: "9780307887894" }
  ]);

  const [newBook, setNewBook] = useState<Book>({
    title: '',
    author: '',
    year: '',
    publisher: '',
    pages: '',
    isbn: ''
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [bookToDelete, setBookToDelete] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  // Fungsi untuk menangani tambah buku
  const handleAddBook = () => {
    if (
      newBook.title === '' ||
      newBook.author === '' ||
      newBook.year === '' ||
      newBook.publisher === '' ||
      newBook.pages === '' ||
      newBook.isbn === ''
    ) {
      setNotification('Mohon isi semua field!');
      return;
    }

    setBooks([...books, newBook]);
    setNewBook({ title: '', author: '', year: '', publisher: '', pages: '', isbn: '' });
    setIsModalOpen(false); // Tutup modal setelah menambahkan buku
    setNotification('Buku berhasil ditambahkan!');
  };

  const handleDeleteBook = (isbn: string) => {
    setBookToDelete(isbn);
    setIsConfirmOpen(true);
  };

  const confirmDeleteBook = () => {
    setBooks(books.filter(book => book.isbn !== bookToDelete));
    setIsConfirmOpen(false);
    setBookToDelete(null);
    setNotification('Buku berhasil dihapus!');
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const closeModal = () => {
    setIsModalOpen(false);
    setNotification(null); 
  };

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64">
        <div className="flex flex-1 justify-center py-5 px-6">
          <div className="flex flex-col w-full max-w-4xl">

            {/* Tombol Tambah Buku */}
            <div className="flex justify-between items-center mb-4">
              <button 
                className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-white"
                onClick={() => setIsModalOpen(true)} // Buka modal form tambah buku
              >
                Tambah Buku
              </button>
            </div>

            {/* Modal Tambah Buku dengan Transisi */}
            {isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="bg-white p-8 rounded-lg w-1/2"
    >
      <h2 className="text-xl font-bold mb-4">Tambah Buku Baru</h2>
      <input 
        type="text" 
        placeholder="Judul Buku" 
        className="border p-2 w-full mb-2"
        value={newBook.title}
        onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
      />
      <input 
        type="text" 
        placeholder="Penulis" 
        className="border p-2 w-full mb-2"
        value={newBook.author}
        onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
      />
      <input 
        type="text" 
        placeholder="Tahun Terbit" 
        className="border p-2 w-full mb-2"
        value={newBook.year}
        onChange={(e) => setNewBook({ ...newBook, year: e.target.value })}
      />
      <input 
        type="text" 
        placeholder="Penerbit" 
        className="border p-2 w-full mb-2"
        value={newBook.publisher}
        onChange={(e) => setNewBook({ ...newBook, publisher: e.target.value })}
      />
      <input 
        type="text" 
        placeholder="Jumlah Halaman" 
        className="border p-2 w-full mb-2"
        value={newBook.pages}
        onChange={(e) => setNewBook({ ...newBook, pages: e.target.value })}
      />
      <input 
        type="text" 
        placeholder="ISBN" 
        className="border p-2 w-full mb-2"
        value={newBook.isbn}
        onChange={(e) => setNewBook({ ...newBook, isbn: e.target.value })}
      />
      <div className="flex justify-end gap-2">
        <button 
          className="px-4 py-2 bg-red-600 text-white rounded-lg" 
          onClick={closeModal}
        >
          Batal
        </button>
        <button 
          className="px-4 py-2 bg-blue-600 text-white rounded-lg" 
          onClick={handleAddBook}
        >
          Simpan
        </button>
      </div>
    </motion.div>
  </div>
)}


            {/* Popup Konfirmasi Hapus Buku */}
            {isConfirmOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
                <div className="bg-white p-6 rounded-lg w-1/3 text-center">
                  <h3 className="text-xl font-semibold mb-4">Apakah anda yakin ingin menghapus buku ini?</h3>
                  <div className="flex justify-center gap-4">
                    <button 
                      className="px-4 py-2 bg-green-600 text-white rounded-lg" 
                      onClick={confirmDeleteBook}
                    >
                      Ya
                    </button>
                    <button 
                      className="px-4 py-2 bg-red-600 text-white rounded-lg" 
                      onClick={() => setIsConfirmOpen(false)}
                    >
                      Tidak
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Input Pencarian Buku */}
            <div className="px-4 py-3">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex items-stretch rounded-lg h-full border bg-gray-100">
                  <div className="flex items-center justify-center pl-4 rounded-l-xl bg-gray-200">
                    {/* Search Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                    </svg>
                  </div>
                  <input
                    placeholder="Cari Buku"
                    className="flex w-full rounded-xl border-none bg-gray-100 px-4 text-gray-900 placeholder:text-gray-500 focus:outline-none"
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </label>
            </div>

            {/* Tabel Data Buku */}
            <div className="px-4 py-3 overflow-hidden rounded-lg border border-gray-300 bg-white">
              <table className="w-full border-collapse border border-gray-400">
                <thead>
                  <tr className="bg-white">
                    {['Judul', 'Penulis', 'Tahun Terbit', 'Penerbit', 'Jumlah Halaman', 'ISBN', 'Aksi'].map((header) => (
                      <th key={header} className="px-4 py-3 text-left text-gray-900 text-sm font-medium border border-gray-400">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredBooks.map((book) => (
                    <tr key={book.isbn} className="border-t border-t-gray-300">
                      <td className="px-4 py-2 text-gray-900 border border-gray-400">{book.title}</td>
                      <td className="px-4 py-2 text-gray-700 border border-gray-400">{book.author}</td>
                      <td className="px-4 py-2 text-gray-700 border border-gray-400">{book.year}</td>
                      <td className="px-4 py-2 text-gray-700 border border-gray-400">{book.publisher}</td>
                      <td className="px-4 py-2 text-gray-700 border border-gray-400">{book.pages}</td>
                      <td className="px-4 py-2 text-gray-700 border border-gray-400">{book.isbn}</td>
                      <td className="px-4 py-2 text-blue-600 font-bold cursor-pointer border border-gray-400"
                        onClick={() => handleDeleteBook(book.isbn)}
                      >
                        Hapus
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Popup Notifikasi */}
            {notification && (
              <div className="fixed top-4 right-4 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">
                {notification}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataBuku;
