use std::vec::{Vec};

struct Solution {

}

impl Solution {
  pub fn combination_sum(candidates: Vec<i32>, target: i32) -> Vec<Vec<i32>> {

    if target == 0 {
      return vec![vec![]]
    }

    if target < 1 {
      return vec![]
    }

    if candidates.len() < 1 {
      return vec![]
    }
    
    let curr_val = *(candidates.get(0).unwrap());

    let mut lhs_combinations = Self::combination_sum(candidates[..].to_vec(), target - curr_val);
    let rhs_combinations = Self::combination_sum(candidates[1..].to_vec(), target);

    let mut curr_combinations = vec![];

    for mut combination in lhs_combinations {
      combination.insert(0, curr_val);
      curr_combinations.push(combination);
    }

    for combination in rhs_combinations {
      curr_combinations.push(combination);
    }

    return curr_combinations;
  }
}

fn validate_solution(candidates: Vec<i32>, target: i32, solution: Vec<Vec<i32>>) {
  println!("Testing with candidates={:?}, target={}", candidates, target);

  let given_solution = Solution::combination_sum(candidates, target);

  println!("Given solution: {:?}\nIntended solution: {:?}\n", given_solution, solution);
}

fn main() {
  println!("hello world!");

  validate_solution(vec![2,3,6,7], 7, vec![vec![2,2,3], vec![7]]);
  validate_solution(vec![2,3,5], 8, vec![vec![2,2,2,2],vec![2,3,3], vec![3,5]]);
  validate_solution(vec![2], 1, vec![]);
}

