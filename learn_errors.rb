luckyNumbers = [24, 38, 56, 75]
# luckyNumbers["Fourteen"] (TypeError)

# num = 10 / 0 (ZeroDivisionError)

begin
    errorNum = 14 / 0
rescue
    puts "Divison by 0 Error"
end

begin
    luckyNumbers["Fourteen"]
rescue
    puts "Type Error"
end

begin
    luckyNumbers[10/0]
rescue ZeroDivisionError # Catches Specific Error
    puts "ZeroDivision Error Caught"
rescue TypeError => e # Takes Error Message as Variable
    puts e
end
