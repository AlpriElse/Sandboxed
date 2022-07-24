use std::collections::HashMap;

struct Solution {

}

impl Solution {
    pub fn num_decodings(s: &String) -> i32 {
        let mut cache: HashMap<i32, i32> = HashMap::new();

        cache.insert(s.len() as i32, 1);

        return Solution::num_decodings_recursive(&s, 0, &mut cache);
    }

    pub fn num_decodings_recursive(s: &String, i: i32, cache: &mut HashMap<i32, i32>) -> i32 {

        if cache.contains_key(&i) {
            return *cache.get(&i).unwrap()
        }

        let first_char = s.chars().nth(i as usize).unwrap();
        if first_char == '0' {
            return 0
        }

        if i as usize == s.len() - 1 {
            return 1
        }

        let choose_single_digit = Solution::num_decodings_recursive(s, i+1, cache);

        let has_valid_double_digit = (((i + 1) as usize) < s.len()) && (
            s.chars().nth(i as usize).unwrap() == '1' 
            || (s.chars().nth(i as usize).unwrap() == '2' && s.chars().nth((i + 1) as usize).unwrap().to_digit(10).unwrap() <= 6)
        );
        
        let choose_double_digit = if has_valid_double_digit { 
            Solution::num_decodings_recursive(s, i+2, cache) 
        } else { 0 };

        let result = choose_single_digit + choose_double_digit;

        cache.insert(i, result);

        return result
    }
}

fn validate_solution(input: String, expected: i32) {
    println!(
        "num_decodings({})={}, expected={}", 
        &input, 
        Solution::num_decodings(&input), 
        expected
    )
}

fn main() {
    println!("Hello, world!");
    validate_solution(String::from("12"), 2);
    validate_solution(String::from("226"), 3);
    validate_solution(String::from("06"), 0);
    validate_solution(String::from("10"), 1);
}
