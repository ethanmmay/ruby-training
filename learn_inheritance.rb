class Chef
    def makeChicken
        puts "The chef makes chicken"
    end
    def makeSalad
        puts "The chef makes salad"
    end
    def makeSpecial
        puts "The chef makes The Ultimate Sub"
    end
end

class ItalianChef < Chef
    def makeSpecial
        puts "The chef makes spaghetti"
    end
    def makePasta
        puts "The chef makes pasta"
    end
end

chef = Chef.new()
chef.makeSpecial

italian = ItalianChef.new
italian.makeSpecial










