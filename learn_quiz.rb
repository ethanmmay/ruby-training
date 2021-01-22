class Question
    attr_accessor :prompt, :answer
    def initialize(prompt, answer)
        @prompt = prompt
        @answer = answer
    end
end

p1 = "What color are apples?\n(a) Red\n(b) Blue\n(c) Orange"
p2 = "What color are oranges?\n(a) Red\n(b) Blue\n(c) Orange"
p3 = "What color are blueberries?\n(a) Red\n(b) Blue\n(c) Orange"

questions = [
    Question.new(p1, "a"),
    Question.new(p2, "c"),
    Question.new(p3, "b")
]

def runTest(questions)
    answer = ""
    score = 0
    for question in questions
        puts question.prompt
        answer = gets.chomp
        if answer == question.answer
            score += 1 
        end
    end
    puts ("You got " + score.to_s + "/" + questions.length().to_s)
end

runTest(questions)
