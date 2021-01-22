
class Book
    attr_accessor :title, :author, :pagenum
end


book1 = Book.new()
book1.title = "Harry Potter"
book1.author = "JK Rowling - Transphobe"
book1.pagenum = 400

book2 = Book.new()
book2.title = "Lord of the Rings"
book2.author = "Tolkein"
book2.pagenum = 500

puts book2.author + " > " + book1.author