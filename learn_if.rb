isalive = true
ishappy = true

if isalive and ishappy
    puts "You are alive! Congratulations."
elsif isalive and !ishappy
    puts "You're alive, but you're going through a hard time."
elsif !isalive and ishappy
    puts "That doesn't make sense. AH! Are you a ghost!?"
else
    puts "You're either dead or unhappy. So sad!"
end