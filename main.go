package main

import (
	"fmt"
	"strconv"
)

func main() {
	n := selfNumber(75)
	fmt.Println(n)
}

func selfNumber(n int) int {
	if n < 0 {
		fmt.Errorf("number must be positive")
	}
	nums := 0
	toChar := strconv.Itoa(n)
	for _, v := range toChar {
		nums = n + int(v)
	}
	fmt.Println(nums)
	return nums
}
