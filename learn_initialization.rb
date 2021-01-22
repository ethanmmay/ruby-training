
# class Book
#     attr_accessor :title, :author, :pagenum
# end


# book1 = Book.new("Mike")
# book1.title = "Harry Potter"
# book1.author = "JK Rowling - Transphobe"
# book1.pagenum = 400

# book2 = Book.new("Bill")
# book2.title = "Lord of the Rings"
# book2.author = "Tolkein"
# book2.pagenum = 500

# puts book2.author + " > " + book1.author


class Book
    attr_accessor :title, :author, :pagenum
    def initialize(title, author, pagenum)
        @title = title
        @author = author
        @pagenum = pagenum
        puts ("Created " + title)
    end
end


book1 = Book.new("Harry Potter", "JK Rowling - Transphobe", 300)
book2 = Book.new("Lord of the Rings", "Tolkein", 400)


puts book1.author + " < " + book2.author