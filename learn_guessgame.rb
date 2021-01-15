
secret_word = "giraffe"
starting_guesses = 3
guesses_left = starting_guesses
guess = ""

while guess != secret_word && guesses_left >= 1
    puts "Enter guess: "
    guess = gets.chomp
    guesses_left -= 1
    puts "" + guesses_left.to_s
end

if guesses_left == 0
    puts "Oh no, you lost. Sorry"
elsif guesses_left == starting_guesses - 1
    puts "You guessed it first try!"
else
    puts "You guessed it!"
end