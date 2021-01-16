
File.open("testfile.txt", "r") do |file|

    # puts file.readline()
    # puts file.readchar()
    for line in file.readlines()
        puts line
    end
    puts file.read().include? "text"
end