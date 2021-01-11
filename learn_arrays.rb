friends = Array["Sam", "Colter", "Michael"]
puts friends
puts friends[1].upcase
puts friends[-1].downcase
puts friends[0, 2]

puts "\n\n"

friends[0] = "Nehemiah"
puts friends

enemies = Array.new

enemies[0] = "Gabe"
enemies[3] = "Joel"
puts enemies
puts enemies.length
puts enemies.include? "Joel"
puts enemies.reverse

puts friends.sort