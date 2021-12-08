package main

import (
	"fmt"
)

func main() {
	var x int

	x = 10
	
	y := 5

	z := x + y

	fmt.Println(z)

	if z > 10 {
		fmt.Println("more than 10")
	} else {
		fmt.Println("not more than 10")
	}
	
	var a [5]int

	a[1] = 5
	fmt.Println(a)

	b := [5]int {1,2,3,4,5}
	fmt.Println(b)

	slice := []int{0}
	slice = append(slice, 10)

	fmt.Println(slice)
}