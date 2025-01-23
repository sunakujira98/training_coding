export const twoSum = (nums: number[], target: number): number[] => {
  const numMap = new Map<number, number>();

  for (let i = 0; i < nums.length - 1; i++) {
    let complement = target - nums[i]; // eg 9 - 2 = 7, next if the number if 7
    if (numMap.has(complement)) {
      const complementIndex = numMap.get(complement);

      return [complementIndex!, i];
    }
    numMap.set(nums[i], i);
  }

  throw new Error("Not found");
};

const nums = [2, 7, 11, 15];
const target = 9;

console.log("twoSum", twoSum(nums, target));
