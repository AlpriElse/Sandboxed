
struct Solution {

}

impl Solution {
  pub fn climb_stairs(n: i32) -> i32 {

    if n <= 2 {
      return n
    }

    let mut a = 1;
    let mut b = 2;

    for _ in 2..n {
      let curr = a + b;

      a = b;
      b = curr;
    }

    return b

  }
}

fn main() {
  println!("Hello, world!");

  assert!(Solution::climb_stairs(1) == 1);
  assert!(Solution::climb_stairs(2) == 2);
  assert!(Solution::climb_stairs(3) == 3, "shit {}", Solution::climb_stairs(3));
  assert!(Solution::climb_stairs(10) == 89);
}
