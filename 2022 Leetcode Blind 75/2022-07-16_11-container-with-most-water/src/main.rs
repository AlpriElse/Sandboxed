struct Solution {}

impl Solution {
  pub fn max_area(height: Vec<i32>) -> i32 {
    let mut i = 0;
    let mut j = height.len() - 1;

    let mut max = 0;

    while j > i {
      let h = if height[i] > height[j] { height[j] } else { height[i] };
      let area = h * (j - i) as i32;
  
      if area > max {
        max = area
      }

      if height[i] > height[j] {
        j -= 1
      } else {
        i += 1
      }
    }

    return max;
  }

}

fn main() {
  println!("Hello, world!");

  assert!(Solution::max_area(vec![1, 1]) == 1, "given = {}", Solution::max_area(vec![2, 3]));
  assert!(Solution::max_area(vec![2, 3]) == 2, "given = {}", Solution::max_area(vec![2, 3]));
  assert!(Solution::max_area(vec![1,8,6,2,5,4,8,3,7]) == 49,"given = {}", Solution::max_area(vec![1,8,6,2,5,4,8,3,7]));

  let test4 = Solution::max_area(vec![1,2,4,3]);
  assert!(test4 == 4, "expected = {}, given = {}", 4, test4);
}
