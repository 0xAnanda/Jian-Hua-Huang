
# 完成以下函式，在函式中使用迴圈計算最小值到最大值之間，固定間隔的整數總和。
# 其中你可以假設 max 一定大於 min 且為整數，step 為正整數。


from typing import Counter


def calculate(min, max, step):
    result = 0 
    for i in range(min, max + 1, step):
        result += i
    print(result)

calculate(1, 3, 1) # 你的程式要能夠計算 1+2+3，最後印出 6
calculate(4, 8, 2) # 你的程式要能夠計算 4+6+8，最後印出 18
calculate(-1, 2, 2) # 你的程式要能夠計算 -1+1，最後印出 0





print("=================================================================================")





# 完成以下函式，正確計算出非 manager 的員工平均薪資，所謂非 manager 就是在資料中manager 欄位標註為 False (Python) 
# 的員工，程式需考慮員工資料數量不定的情況。
def avg(data):
    for employees in data.values():
        sumSalary = 0
        counter = 0
        result = 0
        for person in employees:
            if person["manager"] == False:
                sumSalary += person["salary"]
                counter += 1
        result = int(sumSalary / counter)
        print(result)
    return result

avg({

"employees":[
{
"name":"John",
"salary":30000,
"manager":False
},
{
"name":"Bob",
"salary":60000,
"manager":True
},
{
"name":"Jenny",
"salary":50000,
"manager":False
},
{
"name":"Tony",
"salary":40000,
"manager":False
}
]
}) # 呼叫 avg 函式





print("=================================================================================")








# 完成以下函式，正確計算出非 manager 的員工平均薪資，所謂非 manager 就是在資料中manager 欄位標註為 False (Python) 
# 的員工，程式需考慮員工資料數量不定的情況。
import pandas as pd

def avg(data):
    result = 0
    count = 0
    datas= pd.DataFrame(data , index=["A", "B", "C", "D"])
    names = datas["employees"]
    for right in names:
        if right["manager"]== False:
            result += right["salary"]
            count += 1
    result /= count
    print(int(result))
    return result
avg({

"employees":[
{
"name":"John",
"salary":30000,
"manager":False
},
{
"name":"Bob",
"salary":60000,
"manager":True
},
{
"name":"Jenny",
"salary":50000,
"manager":False
},
{
"name":"Tony",
"salary":40000,
"manager":False
}
]
}) # 呼叫 avg 函式




print("=================================================================================")




def func(a):
    def func2(b , c):
        print(a + (b * c))
    return func2


func(2)(3, 4) # 你補完的函式能印出 2+(3*4) 的結果 14
func(5)(1, -5) # 你補完的函式能印出 5+(1*-5) 的結果 0
func(-3)(2, 9) # 你補完的函式能印出 -3+(2*9) 的結果 15
# 一般形式為 func(a)(b, c) 要印出 a+(b*c) 的結果





print("=================================================================================")



def maxProduct(nums):
    multiply = 0
    result = -99999
    for i in nums:
        for j in nums:
            if (i != j):
                multiply  = i * j    
                if multiply > result:
                    result= multiply
    print(result)
    return result   



maxProduct([5, 20, 2, 6]) # 得到 120
maxProduct([10, -20, 0, 3]) # 得到 30
maxProduct([10, -20, 0, -3]) # 得到 60
maxProduct([-1, 0, 2]) # 得到 0
maxProduct([5,-1, -2, 0]) # 得到 2
maxProduct([-5, -2]) # 得到 10





print("=================================================================================")


# Given an array of integers, show indices of the two numbers such that they add up to a
# specific target. You can assume that each input would have exactly one solution, and you
# can not use the same element twice.

def twoSum(nums, target):
    # enumerate functiuon
    show= []
    for inx,num in enumerate(nums):
        for  num1 in  nums:
            if num + num1 == target:
                show.append(inx)
    return show
            
result=twoSum([2, 11, 7, 15], 9)
print(result) # show [0, 2] because nums[0]+nums[2] is 9





print("=================================================================================")

# 給定只會包含 0 或 1 兩種數字的列表 (Python) ，計算連續出現 0 的最大長度。

def maxZeros(nums):
    counter= 1
    result = 1
    if 0 not in nums :
        result = 0

    for i in range(len(nums)-1):
        if nums[i] == 0 and nums[i + 1] == 0 :
            counter += 1
            if result < counter:
                result = counter
            
        elif nums[i+1] == 1:
            counter = 1
    print(result)
maxZeros([0, 1, 0, 0]) # 得到 2
maxZeros([1, 0, 0, 0, 0, 1, 0, 1, 0, 0]) # 得到 4
maxZeros([1, 1, 1, 1, 1]) # 得到 0
maxZeros([0, 0, 0, 1, 1]) # 得到 3