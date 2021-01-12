
def greetUser(name, age)
    puts ("Hello " + name + ", you are " + age + " years old.")
end

puts "What's your name?"
nameInput = gets.chomp
puts "How old are you?"
ageInput = gets.chomp
greetUser(nameInput, ageInput)
puts "Program Finished"
