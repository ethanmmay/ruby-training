
def greetUser(name, age)
    puts ("Hello " + name + ", you are " + age.to_s + " years old.")
end

puts "What's your name?"
nameInput = gets.chomp
puts "How old are you?"
ageInput = gets.chomp
greetUser(nameInput, ageInput)
puts "Program Finished"
