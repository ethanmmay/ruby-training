
class Student
    attr_accessor :name, :major, :gpa
    def initialize(name, major, gpa)
            @name = name 
            @major = major 
            @gpa = gpa
    end

    def hasHonors()
    if @gpa >= 3.5
        return true
    end
        return false
    end
end



Student1 = Student.new("Jim", "Business", 2.6)
Student2 = Student.new("Pam", "Art", 3.5)


puts Student1.hasHonors()
puts Student2.hasHonors()