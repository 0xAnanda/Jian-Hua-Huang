// 完成以下函式，在函式中使用迴圈計算最小值到最大值之間，固定間隔的整數總和。
// 其中你可以假設 max 一定大於 min 且為整數，step 為正整數。
function calculate(min, max, step) {
  let result = 0;
  for (let i = min; i <= max; i += step) {
    result += i;
  }
  console.log(result);
}

calculate(1, 3, 1); // 你的程式要能夠計算 1+2+3，最後印出 6
calculate(4, 8, 2); // 你的程式要能夠計算 4+6+8，最後印出 18
calculate(-1, 2, 2); // 你的程式要能夠計算 -1+1，最後印出 0

console.log("======================================================");

/*
完成以下函式，正確計算出非 manager 的員工平均薪資，所謂非 manager 就是在資料中
manager 欄位標註為 false (JavaScript) 的員工，程式需考慮員工資料數量
不定的情況。
*/
function avg(data) {
  employees = data["employees"];
  let people = employees.filter((person) => {
    return person.manager == false;
  });
  let sumSalary = 0;
  let result = 0;
  for (let i = 0; i < people.length; i++) {
    sumSalary += people[i].salary;
  }
  result = sumSalary / people.length;
  console.log(result);
  return result;
}

avg({
  employees: [
    {
      name: "John",
      salary: 30000,
      manager: false,
    },
    {
      name: "Bob",
      salary: 60000,
      manager: true,
    },
    {
      name: "Jenny",
      salary: 50000,
      manager: false,
    },
    {
      name: "Tony",
      salary: 40000,
      manager: false,
    },
  ],
}); // 呼叫 avg 函式

console.log("======================================================");

// 完成以下函式，最後能印出程式中註解所描述的結果。
function func(a) {
  function func2(b, c) {
    console.log(a + b * c);
  }

  return func2;
}

func(2)(3, 4); // 你補完的函式能印出 2+(3*4) 的結果 14
func(5)(1, -5); // 你補完的函式能印出 5+(1*-5) 的結果 0
func(-3)(2, 9); // 你補完的函式能印出 -3+(2*9) 的結果 15
// 一般形式為 func(a)(b, c) 要印出 a+(b*c) 的結果

console.log("======================================================");

// 找出至少包含兩筆整數的陣列 (JavaScript) 中，兩兩數字相乘後的最大值。

function maxProduct(nums) {
  let result = -Infinity;
  let multiply = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] != nums[j]) {
        multiply = nums[i] * nums[j];
        if (multiply > result) {
          result = multiply;
        }
      }
    }
  }
  console.log(result);
  return result;
}

maxProduct([5, 20, 2, 6]); // 得到 120
maxProduct([10, -20, 0, 3]); // 得到 30
maxProduct([10, -20, 0, -3]); // 得到 60
maxProduct([-1, 2]); // 得到 -2
maxProduct([-1, 0, 2]); // 得到 0 或 -0
maxProduct([5, -1, -2, 0]); // 得到 2
maxProduct([-5, -2]); // 得到 10

console.log("======================================================");

//   Given an array of integers, show indices of the two numbers such that they add up to a
// specific target. You can assume that each input would have exactly one solution, and you
// can not use the same element twice
function twoSum(nums, target) {
  let num = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        num.push(i);
      }
    }
  }
  return num;
}

let result = twoSum([2, 11, 7, 15], 9);
console.log(result); // show [0, 2] because nums[0]+nums[2] is 9

console.log("======================================================");

//給定只會包含 0 或 1 兩種數字的陣列 (JavaScript)，計算連續出現 0 的最大長度。

function maxZeros(nums) {
  let count = 1;
  let result = 1;

  if (!nums.includes(0)) {
    result = 0;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + nums[i + 1] == 0) {
      count += 1;
      if (result < count) {
        result = count;
      }
    } else if (nums[i + 1] == 1) {
      count = 1;
    }
  }
  console.log(result);
  return result;
}
maxZeros([0, 1, 0, 0]); // 得到 2
maxZeros([1, 0, 0, 0, 0, 1, 0, 1, 0, 0]); // 得到 4
maxZeros([1, 1, 1, 1, 1]); // 得到 0
maxZeros([0, 0, 0, 1, 1]); // 得到 3
