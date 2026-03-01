export const dummyProblems = [

    {
        title: "Sum",
        slug: "sum-of-two-numbers",
        difficulty: "Easy",
        category: "Foundation",
        order: 1,
        videoId: "",
        description: "<p>Given two integers, return their sum.</p>",
        starterCodes: {
            javascript: "function sum(a, b) {\n  // Write your code here\n};",
            python: "def sum(a, b):\n    pass",
            java: "class Solution {\n    public int sum(int a, int b) {\n    }\n}"
        },
        handlerFunction: "sum",
        constraints: ["-10^9 <= a, b <= 10^9"],
        examples: [
            {
                id: 1,
                inputText: "a = 2, b = 3",
                outputText: "5",
                explanation: "2 + 3 = 5"
            }
        ],
        testCases: [
            { input: [2, 3], output: 5 }
        ]
    },

    {
        title: "Second Largest",
        slug: "second-largest-element",
        difficulty: "Easy",
        category: "Foundation",
        order: 2,
        videoId: "",
        description: "<p>Find the second largest element in an array.</p>",
        starterCodes: {
            javascript: "function secondLargest(nums) {\n  // Write your code here\n};",
            python: "def secondLargest(nums):\n    pass",
            java: "class Solution {\n    public int secondLargest(int[] nums) {\n    }\n}"
        },
        handlerFunction: "secondLargest",
        constraints: ["2 <= nums.length <= 10^4"],
        examples: [
            {
                id: 1,
                inputText: "nums = [10, 20, 4, 45, 99]",
                outputText: "45",
                explanation: "99 is largest, 45 is second largest"
            }
        ],
        testCases: [
            { input: [[10, 20, 4, 45, 99]], output: 45 }
        ]
    },

    {
        title: "Palindrome Number",
        slug: "palindrome-number",
        difficulty: "Easy",
        category: "Foundation",
        order: 3,
        videoId: "",
        description: "<p>Determine whether an integer is a palindrome.</p>",
        starterCodes: {
            javascript: "function isPalindrome(x) {\n  // Write your code here\n};",
            python: "def isPalindrome(x):\n    pass",
            java: "class Solution {\n    public boolean isPalindrome(int x) {\n    }\n}"
        },
        handlerFunction: "isPalindrome",
        constraints: ["-2^31 <= x <= 2^31 - 1"],
        examples: [
            {
                id: 1,
                inputText: "x = 121",
                outputText: "true",
                explanation: "121 reads same backward"
            }
        ],
        testCases: [
            { input: [121], output: true },
            { input: [-121], output: false }
        ]
    },

    {
        title: "Reverse Integer",
        slug: "reverse-integer",
        difficulty: "Medium",
        category: "Foundation",
        order: 4,
        videoId: "",
        description: "<p>Reverse digits of a signed 32-bit integer.</p>",
        starterCodes: {
            javascript: "function reverse(x) {\n  // Write your code here\n};",
            python: "def reverse(x):\n    pass",
            java: "class Solution {\n    public int reverse(int x) {\n    }\n}"
        },
        handlerFunction: "reverse",
        constraints: ["-2^31 <= x <= 2^31 - 1"],
        examples: [
            {
                id: 1,
                inputText: "x = 123",
                outputText: "321",
                explanation: "Digits reversed"
            }
        ],
        testCases: [
            { input: [123], output: 321 },
            { input: [-123], output: -321 }
        ]
    },

    {
        title: "Count Negative Numbers in an Array",
        slug: "count-negative-numbers",
        difficulty: "Easy",
        category: "Foundation",
        order: 5,
        videoId: "",
        description: "<p>Count total negative numbers in an array.</p>",
        starterCodes: {
            javascript: "function countNegatives(nums) {\n  // Write your code here\n};",
            python: "def countNegatives(nums):\n    pass",
            java: "class Solution {\n    public int countNegatives(int[] nums) {\n    }\n}"
        },
        handlerFunction: "countNegatives",
        constraints: ["1 <= nums.length <= 10^4"],
        examples: [
            {
                id: 1,
                inputText: "nums = [-1,-2,3,4,-5]",
                outputText: "3",
                explanation: "Three negative numbers"
            }
        ],
        testCases: [
            { input: [[-1, -2, 3, 4, -5]], output: 3 }
        ]
    },

    {
        title: "Find Smallest Number in an Array",
        slug: "find-smallest-number",
        difficulty: "Easy",
        category: "Foundation",
        order: 6,
        videoId: "",
        description: "<p>Return the smallest number in the array.</p>",
        starterCodes: {
            javascript: "function findSmallest(nums) {\n  // Write your code here\n};",
            python: "def findSmallest(nums):\n    pass",
            java: "class Solution {\n    public int findSmallest(int[] nums) {\n    }\n}"
        },
        handlerFunction: "findSmallest",
        testCases: [
            { input: [[3, 5, 1, 8]], output: 1 }
        ]
    },

    {
        title: "Find Largest Number in an Array",
        slug: "find-largest-number",
        difficulty: "Medium",
        category: "Foundation",
        order: 7,
        videoId: "",
        description: "<p>Return the largest number in the array.</p>",
        starterCodes: {
            javascript: "function findLargest(nums) {\n  // Write your code here\n};",
            python: "def findLargest(nums):\n    pass",
            java: "class Solution {\n    public int findLargest(int[] nums) {\n    }\n}"
        },
        handlerFunction: "findLargest",
        testCases: [
            { input: [[3, 5, 1, 8]], output: 8 }
        ]
    },

    {
        title: "Binary Search",
        slug: "binary-search",
        difficulty: "Easy",
        category: "Foundation",
        order: 8,
        videoId: "",
        description: "<p>Given a sorted array and a target value, return its index using binary search.</p>",
        starterCodes: {
            javascript: "function binarySearch(nums, target) {\n  // Write your code here\n};",
            python: "def binarySearch(nums, target):\n    pass",
            java: "class Solution {\n    public int binarySearch(int[] nums, int target) {\n    }\n}"
        },
        handlerFunction: "binarySearch",
        testCases: [
            { input: [[-1, 0, 3, 5, 9, 12], 9], output: 4 }
        ]
    },

    {
        title: "Merge Sort",
        slug: "merge-sort",
        difficulty: "Medium",
        category: "Foundation",
        order: 9,
        videoId: "",
        description: "<p>Implement merge sort algorithm.</p>",
        starterCodes: {
            javascript: "function mergeSort(nums) {\n  // Write your code here\n};",
            python: "def mergeSort(nums):\n    pass",
            java: "class Solution {\n    public int[] mergeSort(int[] nums) {\n    }\n}"
        },
        handlerFunction: "mergeSort",
        testCases: [
            { input: [[5, 2, 3, 1]], output: [1, 2, 3, 5] }
        ]
    },

    {
        title: "Power of Two",
        slug: "power-of-two",
        difficulty: "Easy",
        category: "Foundation",
        order: 10,
        videoId: "",
        description: "<p>Determine whether a given number is a power of two.</p>",
        starterCodes: {
            javascript: "function isPowerOfTwo(n) {\n  // Write your code here\n};",
            python: "def isPowerOfTwo(n):\n    pass",
            java: "class Solution {\n    public boolean isPowerOfTwo(int n) {\n    }\n}"
        },
        handlerFunction: "isPowerOfTwo",
        testCases: [
            { input: [16], output: true },
            { input: [3], output: false }
        ]
    },
    // Arrays
   

    {
        title: "Remove Duplicates",
        slug: "remove-duplicates-from-sorted-array",
        difficulty: "Easy",
        category: "Array",
        order: 2,
        videoId: "",
        description: "<p>Remove duplicates in-place from a sorted array and return the new length.</p>",
        starterCodes: {
            javascript: "function removeDuplicates(nums) {\n  // Write your code here\n};",
            python: "def removeDuplicates(nums):\n    pass",
            java: "class Solution {\n    public int removeDuplicates(int[] nums) {\n    }\n}"
        },
        handlerFunction: "removeDuplicates",
        constraints: ["1 <= nums.length <= 10^4"],
        examples: [
            {
                id: 1,
                inputText: "nums = [1,1,2]",
                outputText: "2",
                explanation: "Array becomes [1,2]"
            }
        ],
        testCases: [
            { input: [[1, 1, 2]], output: 2 },
            { input: [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]], output: 5 }
        ]
    },

    {
        title: "Remove Element",
        slug: "remove-element",
        difficulty: "Easy",
        category: "Array",
        order: 3,
        videoId: "",
        description: "<p>Remove all occurrences of a value in-place and return the new length.</p>",
        starterCodes: {
            javascript: "function removeElement(nums, val) {\n  // Write your code here\n};",
            python: "def removeElement(nums, val):\n    pass",
            java: "class Solution {\n    public int removeElement(int[] nums, int val) {\n    }\n}"
        },
        handlerFunction: "removeElement",
        constraints: ["0 <= nums.length <= 100"],
        examples: [
            {
                id: 1,
                inputText: "nums = [3,2,2,3], val = 3",
                outputText: "2",
                explanation: "Remaining elements are [2,2]"
            }
        ],
        testCases: [
            { input: [[3, 2, 2, 3], 3], output: 2 },
            { input: [[0, 1, 2, 2, 3, 0, 4, 2], 2], output: 5 }
        ]
    },

    {
        title: "Reverse String",
        slug: "reverse-string",
        difficulty: "Easy",
        category: "Array",
        order: 4,
        videoId: "",
        description: "<p>Write a function that reverses a string in-place.</p>",
        starterCodes: {
            javascript: "function reverseString(s) {\n  // Write your code here\n};",
            python: "def reverseString(s):\n    pass",
            java: "class Solution {\n    public void reverseString(char[] s) {\n    }\n}"
        },
        handlerFunction: "reverseString",
        constraints: ["1 <= s.length <= 10^5"],
        examples: [
            {
                id: 1,
                inputText: "s = ['h','e','l','l','o']",
                outputText: "['o','l','l','e','h']",
                explanation: "String reversed in-place"
            }
        ],
        testCases: [
            { input: [["h", "e", "l", "l", "o"]], output: ["o", "l", "l", "e", "h"] }
        ]
    },

    {
        title: "Best Time to Buy and Sell Stock",
        slug: "best-time-to-buy-and-sell-stock",
        difficulty: "Easy",
        category: "Array",
        order: 5,
        videoId: "",
        description: "<p>Find the maximum profit from buying and selling a stock once.</p>",
        starterCodes: {
            javascript: "function maxProfit(prices) {\n  // Write your code here\n};",
            python: "def maxProfit(prices):\n    pass",
            java: "class Solution {\n    public int maxProfit(int[] prices) {\n    }\n}"
        },
        handlerFunction: "maxProfit",
        constraints: ["1 <= prices.length <= 10^5"],
        examples: [
            {
                id: 1,
                inputText: "prices = [7,1,5,3,6,4]",
                outputText: "5",
                explanation: "Buy at 1, sell at 6"
            }
        ],
        testCases: [
            { input: [[7, 1, 5, 3, 6, 4]], output: 5 },
            { input: [[7, 6, 4, 3, 1]], output: 0 }
        ]
    },

    {
        title: "Merge Sorted Arrays",
        slug: "merge-sorted-arrays",
        difficulty: "Easy",
        category: "Array",
        order: 6,
        videoId: "",
        description: "<p>Merge two sorted arrays into one sorted array in-place.</p>",
        starterCodes: {
            javascript: "function merge(nums1, m, nums2, n) {\n  // Write your code here\n};",
            python: "def merge(nums1, m, nums2, n):\n    pass",
            java: "class Solution {\n    public void merge(int[] nums1, int m, int[] nums2, int n) {\n    }\n}"
        },
        handlerFunction: "merge",
        constraints: ["0 <= m, n <= 200"],
        examples: [
            {
                id: 1,
                inputText: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3",
                outputText: "[1,2,2,3,5,6]",
                explanation: "Merged and sorted"
            }
        ],
        testCases: [
            { input: [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3], output: [1, 2, 2, 3, 5, 6] }
        ]
    },

    {
        title: "Move Zeros",
        slug: "move-zeros",
        difficulty: "Easy",
        category: "Array",
        order: 7,
        videoId: "",
        description: "<p>Move all zeros to the end while maintaining order of non-zero elements.</p>",
        starterCodes: {
            javascript: "function moveZeroes(nums) {\n  // Write your code here\n};",
            python: "def moveZeroes(nums):\n    pass",
            java: "class Solution {\n    public void moveZeroes(int[] nums) {\n    }\n}"
        },
        handlerFunction: "moveZeroes",
        constraints: ["1 <= nums.length <= 10^4"],
        examples: [
            {
                id: 1,
                inputText: "nums = [0,1,0,3,12]",
                outputText: "[1,3,12,0,0]",
                explanation: "Zeros moved to end"
            }
        ],
        testCases: [
            { input: [[0, 1, 0, 3, 12]], output: [1, 3, 12, 0, 0] }
        ]
    },

    {
        title: "Max Consecutive Ones",
        slug: "max-consecutive-ones",
        difficulty: "Easy",
        category: "Array",
        order: 8,
        videoId: "",
        description: "<p>Find the maximum number of consecutive 1s in the array.</p>",
        starterCodes: {
            javascript: "function findMaxConsecutiveOnes(nums) {\n  // Write your code here\n};",
            python: "def findMaxConsecutiveOnes(nums):\n    pass",
            java: "class Solution {\n    public int findMaxConsecutiveOnes(int[] nums) {\n    }\n}"
        },
        handlerFunction: "findMaxConsecutiveOnes",
        constraints: ["1 <= nums.length <= 10^5"],
        examples: [
            {
                id: 1,
                inputText: "nums = [1,1,0,1,1,1]",
                outputText: "3",
                explanation: "Three consecutive ones"
            }
        ],
        testCases: [
            { input: [[1, 1, 0, 1, 1, 1]], output: 3 }
        ]
    },

    {
        title: "Missing Number",
        slug: "missing-number",
        difficulty: "Easy",
        category: "Array",
        order: 9,
        videoId: "",
        description: "<p>Find the missing number in the range [0, n].</p>",
        starterCodes: {
            javascript: "function missingNumber(nums) {\n  // Write your code here\n};",
            python: "def missingNumber(nums):\n    pass",
            java: "class Solution {\n    public int missingNumber(int[] nums) {\n    }\n}"
        },
        handlerFunction: "missingNumber",
        constraints: ["n == nums.length"],
        examples: [
            {
                id: 1,
                inputText: "nums = [3,0,1]",
                outputText: "2",
                explanation: "2 is missing"
            }
        ],
        testCases: [
            { input: [[3, 0, 1]], output: 2 }
        ]
    },

    {
        title: "Single Number",
        slug: "single-number",
        difficulty: "Easy",
        category: "Array",
        order: 10,
        videoId: "",
        description: "<p>Find the element that appears only once while others appear twice.</p>",
        starterCodes: {
            javascript: "function singleNumber(nums) {\n  // Write your code here\n};",
            python: "def singleNumber(nums):\n    pass",
            java: "class Solution {\n    public int singleNumber(int[] nums) {\n    }\n}"
        },
        handlerFunction: "singleNumber",
        constraints: ["1 <= nums.length <= 3 * 10^4"],
        examples: [
            {
                id: 1,
                inputText: "nums = [4,1,2,1,2]",
                outputText: "4",
                explanation: "4 appears once"
            }
        ],
        testCases: [
            { input: [[4, 1, 2, 1, 2]], output: 4 }
        ]
    },

    // ─── Linked List ──────────────────────────────────────────────────────────

    {
        title: "Design Linked List",
        slug: "design-linked-list",
        difficulty: "Medium",
        category: "Linked List",
        order: 11,
        videoId: "",
        description: "<p>Design your own singly linked list. Implement <code>get(index)</code>, <code>addAtHead(val)</code>, <code>addAtTail(val)</code>, <code>addAtIndex(index, val)</code>, and <code>deleteAtIndex(index)</code>.</p>",
        starterCodes: {
            javascript: "class MyLinkedList {\n  constructor() {\n    // Write your code here\n  }\n  get(index) {}\n  addAtHead(val) {}\n  addAtTail(val) {}\n  addAtIndex(index, val) {}\n  deleteAtIndex(index) {}\n}",
            python: "class MyLinkedList:\n    def __init__(self):\n        pass\n    def get(self, index):\n        pass\n    def addAtHead(self, val):\n        pass\n    def addAtTail(self, val):\n        pass\n    def addAtIndex(self, index, val):\n        pass\n    def deleteAtIndex(self, index):\n        pass",
            java: "class MyLinkedList {\n    public MyLinkedList() {}\n    public int get(int index) { return -1; }\n    public void addAtHead(int val) {}\n    public void addAtTail(int val) {}\n    public void addAtIndex(int index, int val) {}\n    public void deleteAtIndex(int index) {}\n}"
        },
        handlerFunction: "designLinkedList",
        constraints: ["0 <= index, val <= 1000", "At most 2000 operations"],
        examples: [
            {
                id: 1,
                inputText: 'addAtHead(1), addAtTail(3), addAtIndex(1, 2), get(1)',
                outputText: "2",
                explanation: "Linked list becomes 1 -> 2 -> 3, get(1) returns 2."
            }
        ],
        testCases: [
            { input: ["designLinkedList"], output: null }
        ]
    },

    {
        title: "Middle of Linked List",
        slug: "middle-of-linked-list",
        difficulty: "Easy",
        category: "Linked List",
        order: 12,
        videoId: "",
        description: "<p>Given the head of a singly linked list, return the middle node. If there are two middle nodes, return the second middle node.</p>",
        starterCodes: {
            javascript: "function middleNode(head) {\n  // Write your code here\n};",
            python: "def middleNode(head):\n    pass",
            java: "class Solution {\n    public ListNode middleNode(ListNode head) {\n    }\n}"
        },
        handlerFunction: "middleNode",
        constraints: ["1 <= Number of nodes <= 100", "1 <= Node.val <= 100"],
        examples: [
            {
                id: 1,
                inputText: "head = [1,2,3,4,5]",
                outputText: "[3,4,5]",
                explanation: "The middle node of the list is node 3."
            }
        ],
        testCases: [
            { input: [[1, 2, 3, 4, 5]], output: [3, 4, 5] },
            { input: [[1, 2, 3, 4, 5, 6]], output: [4, 5, 6] }
        ]
    },

    {
        title: "Reverse Linked List",
        slug: "reverse-linked-list",
        difficulty: "Easy",
        category: "Linked List",
        order: 13,
        videoId: "",
        description: "<p>Given the head of a singly linked list, reverse the list, and return the reversed list.</p>",
        starterCodes: {
            javascript: "function reverseList(head) {\n  // Write your code here\n};",
            python: "def reverseList(head):\n    pass",
            java: "class Solution {\n    public ListNode reverseList(ListNode head) {\n    }\n}"
        },
        handlerFunction: "reverseList",
        constraints: ["0 <= Number of nodes <= 5000", "-5000 <= Node.val <= 5000"],
        examples: [
            {
                id: 1,
                inputText: "head = [1,2,3,4,5]",
                outputText: "[5,4,3,2,1]",
                explanation: "The list is reversed."
            }
        ],
        testCases: [
            { input: [[1, 2, 3, 4, 5]], output: [5, 4, 3, 2, 1] },
            { input: [[1, 2]], output: [2, 1] }
        ]
    },

    {
        title: "Linked List Cycle",
        slug: "linked-list-cycle",
        difficulty: "Easy",
        category: "Linked List",
        order: 14,
        videoId: "",
        description: "<p>Given the head of a linked list, determine if the linked list has a cycle in it. Return <code>true</code> if there is a cycle, otherwise return <code>false</code>.</p>",
        starterCodes: {
            javascript: "function hasCycle(head) {\n  // Write your code here\n};",
            python: "def hasCycle(head):\n    pass",
            java: "class Solution {\n    public boolean hasCycle(ListNode head) {\n    }\n}"
        },
        handlerFunction: "hasCycle",
        constraints: ["0 <= Number of nodes <= 10^4", "-10^5 <= Node.val <= 10^5"],
        examples: [
            {
                id: 1,
                inputText: "head = [3,2,0,-4], pos = 1",
                outputText: "true",
                explanation: "There is a cycle: tail connects to node at index 1."
            }
        ],
        testCases: [
            { input: [[3, 2, 0, -4], 1], output: true },
            { input: [[1, 2], -1], output: false }
        ]
    },

    {
        title: "Palindrome Linked List",
        slug: "palindrome-linked-list",
        difficulty: "Easy",
        category: "Linked List",
        order: 15,
        videoId: "",
        description: "<p>Given the head of a singly linked list, return <code>true</code> if it is a palindrome or <code>false</code> otherwise.</p>",
        starterCodes: {
            javascript: "function isPalindrome(head) {\n  // Write your code here\n};",
            python: "def isPalindrome(head):\n    pass",
            java: "class Solution {\n    public boolean isPalindrome(ListNode head) {\n    }\n}"
        },
        handlerFunction: "isPalindrome",
        constraints: ["1 <= Number of nodes <= 10^5", "0 <= Node.val <= 9"],
        examples: [
            {
                id: 1,
                inputText: "head = [1,2,2,1]",
                outputText: "true",
                explanation: "The linked list reads 1 -> 2 -> 2 -> 1, which is a palindrome."
            }
        ],
        testCases: [
            { input: [[1, 2, 2, 1]], output: true },
            { input: [[1, 2]], output: false }
        ]
    },

    {
        title: "Intersection of Two Linked Lists",
        slug: "intersection-of-two-linked-lists",
        difficulty: "Easy",
        category: "Linked List",
        order: 16,
        videoId: "",
        description: "<p>Given the heads of two singly linked-lists <code>headA</code> and <code>headB</code>, return the node at which the two lists intersect. If the two linked lists have no intersection, return <code>null</code>.</p>",
        starterCodes: {
            javascript: "function getIntersectionNode(headA, headB) {\n  // Write your code here\n};",
            python: "def getIntersectionNode(headA, headB):\n    pass",
            java: "class Solution {\n    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {\n    }\n}"
        },
        handlerFunction: "getIntersectionNode",
        constraints: ["Each list has at least 1 node."],
        examples: [
            {
                id: 1,
                inputText: "listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], intersectVal = 8",
                outputText: "8",
                explanation: "The intersected node's value is 8."
            }
        ],
        testCases: [
            { input: [[4, 1, 8, 4, 5], [5, 6, 1, 8, 4, 5], 8, 2, 3], output: 8 }
        ]
    },

    {
        title: "Remove Linked List Elements",
        slug: "remove-linked-list-elements",
        difficulty: "Easy",
        category: "Linked List",
        order: 17,
        videoId: "",
        description: "<p>Given the head of a linked list and an integer <code>val</code>, remove all nodes with <code>Node.val == val</code>, and return the new head.</p>",
        starterCodes: {
            javascript: "function removeElements(head, val) {\n  // Write your code here\n};",
            python: "def removeElements(head, val):\n    pass",
            java: "class Solution {\n    public ListNode removeElements(ListNode head, int val) {\n    }\n}"
        },
        handlerFunction: "removeElements",
        constraints: ["0 <= Number of nodes <= 10^4", "1 <= val <= 50"],
        examples: [
            {
                id: 1,
                inputText: "head = [1,2,6,3,4,5,6], val = 6",
                outputText: "[1,2,3,4,5]",
                explanation: "All nodes with value 6 are removed."
            }
        ],
        testCases: [
            { input: [[1, 2, 6, 3, 4, 5, 6], 6], output: [1, 2, 3, 4, 5] },
            { input: [[7, 7, 7, 7], 7], output: [] }
        ]
    },

    {
        title: "Remove Nth Node From End of List",
        slug: "remove-nth-node-from-end-of-list",
        difficulty: "Medium",
        category: "Linked List",
        order: 18,
        videoId: "",
        description: "<p>Given the head of a linked list, remove the <code>n</code>th node from the end of the list and return its head.</p>",
        starterCodes: {
            javascript: "function removeNthFromEnd(head, n) {\n  // Write your code here\n};",
            python: "def removeNthFromEnd(head, n):\n    pass",
            java: "class Solution {\n    public ListNode removeNthFromEnd(ListNode head, int n) {\n    }\n}"
        },
        handlerFunction: "removeNthFromEnd",
        constraints: ["1 <= Number of nodes <= 30", "1 <= n <= sz"],
        examples: [
            {
                id: 1,
                inputText: "head = [1,2,3,4,5], n = 2",
                outputText: "[1,2,3,5]",
                explanation: "Node with value 4 (2nd from end) is removed."
            }
        ],
        testCases: [
            { input: [[1, 2, 3, 4, 5], 2], output: [1, 2, 3, 5] },
            { input: [[1], 1], output: [] }
        ]
    },

    {
        title: "Remove Duplicates from Sorted List",
        slug: "remove-duplicates-from-sorted-list",
        difficulty: "Easy",
        category: "Linked List",
        order: 19,
        videoId: "",
        description: "<p>Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.</p>",
        starterCodes: {
            javascript: "function deleteDuplicates(head) {\n  // Write your code here\n};",
            python: "def deleteDuplicates(head):\n    pass",
            java: "class Solution {\n    public ListNode deleteDuplicates(ListNode head) {\n    }\n}"
        },
        handlerFunction: "deleteDuplicates",
        constraints: ["0 <= Number of nodes <= 300", "-100 <= Node.val <= 100"],
        examples: [
            {
                id: 1,
                inputText: "head = [1,1,2]",
                outputText: "[1,2]",
                explanation: "Duplicate 1 is removed."
            }
        ],
        testCases: [
            { input: [[1, 1, 2]], output: [1, 2] },
            { input: [[1, 1, 2, 3, 3]], output: [1, 2, 3] }
        ]
    },

    {
        title: "Odd Even Linked List",
        slug: "odd-even-linked-list",
        difficulty: "Medium",
        category: "Linked List",
        order: 20,
        videoId: "",
        description: "<p>Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.</p>",
        starterCodes: {
            javascript: "function oddEvenList(head) {\n  // Write your code here\n};",
            python: "def oddEvenList(head):\n    pass",
            java: "class Solution {\n    public ListNode oddEvenList(ListNode head) {\n    }\n}"
        },
        handlerFunction: "oddEvenList",
        constraints: ["0 <= Number of nodes <= 10^4", "-10^6 <= Node.val <= 10^6"],
        examples: [
            {
                id: 1,
                inputText: "head = [1,2,3,4,5]",
                outputText: "[1,3,5,2,4]",
                explanation: "Odd indices [1,3,5] come first, then even [2,4]."
            }
        ],
        testCases: [
            { input: [[1, 2, 3, 4, 5]], output: [1, 3, 5, 2, 4] },
            { input: [[2, 1, 3, 5, 6, 4, 7]], output: [2, 3, 6, 7, 1, 5, 4] }
        ]
    },

    {
        title: "Add Two Numbers",
        slug: "add-two-numbers",
        difficulty: "Medium",
        category: "Linked List",
        order: 21,
        videoId: "",
        description: "<p>You are given two non-empty linked lists representing two non-negative integers stored in reverse order. Add the two numbers and return the sum as a linked list.</p>",
        starterCodes: {
            javascript: "function addTwoNumbers(l1, l2) {\n  // Write your code here\n};",
            python: "def addTwoNumbers(l1, l2):\n    pass",
            java: "class Solution {\n    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n    }\n}"
        },
        handlerFunction: "addTwoNumbers",
        constraints: ["1 <= Number of nodes <= 100", "0 <= Node.val <= 9"],
        examples: [
            {
                id: 1,
                inputText: "l1 = [2,4,3], l2 = [5,6,4]",
                outputText: "[7,0,8]",
                explanation: "342 + 465 = 807, stored as [7,0,8]."
            }
        ],
        testCases: [
            { input: [[2, 4, 3], [5, 6, 4]], output: [7, 0, 8] },
            { input: [[0], [0]], output: [0] }
        ]
    },

    {
        title: "Merge Two Sorted Lists",
        slug: "merge-two-sorted-lists",
        difficulty: "Easy",
        category: "Linked List",
        order: 22,
        videoId: "",
        description: "<p>Merge two sorted linked lists and return them as one sorted list. The list should be made by splicing together the nodes of the first two lists.</p>",
        starterCodes: {
            javascript: "function mergeTwoLists(list1, list2) {\n  // Write your code here\n};",
            python: "def mergeTwoLists(list1, list2):\n    pass",
            java: "class Solution {\n    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {\n    }\n}"
        },
        handlerFunction: "mergeTwoLists",
        constraints: ["0 <= Number of nodes <= 50", "-100 <= Node.val <= 100"],
        examples: [
            {
                id: 1,
                inputText: "list1 = [1,2,4], list2 = [1,3,4]",
                outputText: "[1,1,2,3,4,4]",
                explanation: "Both lists merged in sorted order."
            }
        ],
        testCases: [
            { input: [[1, 2, 4], [1, 3, 4]], output: [1, 1, 2, 3, 4, 4] },
            { input: [[], []], output: [] }
        ]
    },

    {
        title: "Rotate List",
        slug: "rotate-list",
        difficulty: "Medium",
        category: "Linked List",
        order: 23,
        videoId: "",
        description: "<p>Given the head of a linked list, rotate the list to the right by <code>k</code> places.</p>",
        starterCodes: {
            javascript: "function rotateRight(head, k) {\n  // Write your code here\n};",
            python: "def rotateRight(head, k):\n    pass",
            java: "class Solution {\n    public ListNode rotateRight(ListNode head, int k) {\n    }\n}"
        },
        handlerFunction: "rotateRight",
        constraints: ["0 <= Number of nodes <= 500", "0 <= k <= 2 * 10^9"],
        examples: [
            {
                id: 1,
                inputText: "head = [1,2,3,4,5], k = 2",
                outputText: "[4,5,1,2,3]",
                explanation: "List rotated 2 places to the right."
            }
        ],
        testCases: [
            { input: [[1, 2, 3, 4, 5], 2], output: [4, 5, 1, 2, 3] },
            { input: [[0, 1, 2], 4], output: [2, 0, 1] }
        ]
    },

    {
        title: "Swap Nodes in Pairs",
        slug: "swap-nodes-in-pairs",
        difficulty: "Medium",
        category: "Linked List",
        order: 24,
        videoId: "",
        description: "<p>Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes.</p>",
        starterCodes: {
            javascript: "function swapPairs(head) {\n  // Write your code here\n};",
            python: "def swapPairs(head):\n    pass",
            java: "class Solution {\n    public ListNode swapPairs(ListNode head) {\n    }\n}"
        },
        handlerFunction: "swapPairs",
        constraints: ["0 <= Number of nodes <= 100", "0 <= Node.val <= 100"],
        examples: [
            {
                id: 1,
                inputText: "head = [1,2,3,4]",
                outputText: "[2,1,4,3]",
                explanation: "Every two adjacent nodes swapped."
            }
        ],
        testCases: [
            { input: [[1, 2, 3, 4]], output: [2, 1, 4, 3] },
            { input: [[1]], output: [1] }
        ]
    },

    // ─── Strings ──────────────────────────────────────────────────────────────

    {
        title: "Length of Last Word",
        slug: "length-of-last-word",
        difficulty: "Easy",
        category: "String",
        order: 25,
        videoId: "",
        description: "<p>Given a string <code>s</code> consisting of words and spaces, return the length of the last word in the string. A word is a maximal substring consisting of non-space characters only.</p>",
        starterCodes: {
            javascript: "function lengthOfLastWord(s) {\n  // Write your code here\n};",
            python: "def lengthOfLastWord(s):\n    pass",
            java: "class Solution {\n    public int lengthOfLastWord(String s) {\n    }\n}"
        },
        handlerFunction: "lengthOfLastWord",
        constraints: ["1 <= s.length <= 10^4", "s consists of English letters and spaces"],
        examples: [
            { id: 1, inputText: 's = "Hello World"', outputText: "5", explanation: "The last word is 'World' with length 5." }
        ],
        testCases: [
            { input: ["Hello World"], output: 5 },
            { input: ["   fly me   to   the moon  "], output: 4 }
        ]
    },

    {
        title: "Find Words Containing Character",
        slug: "find-words-containing-character",
        difficulty: "Easy",
        category: "String",
        order: 26,
        videoId: "",
        description: "<p>Given a 0-indexed array of strings <code>words</code> and a character <code>x</code>, return an array of indices representing the words that contain <code>x</code>.</p>",
        starterCodes: {
            javascript: "function findWordsContaining(words, x) {\n  // Write your code here\n};",
            python: "def findWordsContaining(words, x):\n    pass",
            java: "class Solution {\n    public List<Integer> findWordsContaining(String[] words, char x) {\n    }\n}"
        },
        handlerFunction: "findWordsContaining",
        constraints: ["1 <= words.length <= 50", "1 <= words[i].length <= 50"],
        examples: [
            { id: 1, inputText: 'words = ["leet","code"], x = "e"', outputText: "[0,1]", explanation: "'e' appears in both words." }
        ],
        testCases: [
            { input: [["leet", "code"], "e"], output: [0, 1] },
            { input: [["abc", "bcd", "aaaa", "cbc"], "a"], output: [0, 2] }
        ]
    },

    {
        title: "Jewels and Stones",
        slug: "jewels-and-stones",
        difficulty: "Easy",
        category: "String",
        order: 27,
        videoId: "",
        description: "<p>You're given strings <code>jewels</code> representing the types of stones that are jewels, and <code>stones</code> representing the stones you have. Return how many of your stones are also jewels.</p>",
        starterCodes: {
            javascript: "function numJewelsInStones(jewels, stones) {\n  // Write your code here\n};",
            python: "def numJewelsInStones(jewels, stones):\n    pass",
            java: "class Solution {\n    public int numJewelsInStones(String jewels, String stones) {\n    }\n}"
        },
        handlerFunction: "numJewelsInStones",
        constraints: ["1 <= jewels.length, stones.length <= 50", "jewels and stones consist of English letters"],
        examples: [
            { id: 1, inputText: 'jewels = "aA", stones = "aAAbbbb"', outputText: "3", explanation: "a, A, A are jewels." }
        ],
        testCases: [
            { input: ["aA", "aAAbbbb"], output: 3 },
            { input: ["z", "ZZ"], output: 0 }
        ]
    },

    {
        title: "Find Most Frequent Vowel and Consonant",
        slug: "find-most-frequent-vowel-and-consonant",
        difficulty: "Easy",
        category: "String",
        order: 28,
        videoId: "",
        description: "<p>Given a string <code>s</code>, find the most frequent vowel and most frequent consonant. Return the sum of their frequencies.</p>",
        starterCodes: {
            javascript: "function mostFrequentVowelAndConsonant(s) {\n  // Write your code here\n};",
            python: "def mostFrequentVowelAndConsonant(s):\n    pass",
            java: "class Solution {\n    public int mostFrequentVowelAndConsonant(String s) {\n    }\n}"
        },
        handlerFunction: "mostFrequentVowelAndConsonant",
        constraints: ["1 <= s.length <= 1000", "s consists of only lowercase English letters"],
        examples: [
            { id: 1, inputText: 's = "aeiou"', outputText: "2", explanation: "Most frequent vowel is any with count 1, same for consonant. Sum = 1 + 1 = 2." }
        ],
        testCases: [
            { input: ["aeiou"], output: 2 },
            { input: ["aabbcc"], output: 4 }
        ]
    },

    {
        title: "Split a String in Balanced Strings",
        slug: "split-a-string-in-balanced-strings",
        difficulty: "Easy",
        category: "String",
        order: 29,
        videoId: "",
        description: "<p>Balanced strings have an equal quantity of L and R characters. Given a balanced string <code>s</code>, split it into the maximum number of balanced strings.</p>",
        starterCodes: {
            javascript: "function balancedStringSplit(s) {\n  // Write your code here\n};",
            python: "def balancedStringSplit(s):\n    pass",
            java: "class Solution {\n    public int balancedStringSplit(String s) {\n    }\n}"
        },
        handlerFunction: "balancedStringSplit",
        constraints: ["2 <= s.length <= 1000", "s[i] is either 'L' or 'R'", "s is a balanced string"],
        examples: [
            { id: 1, inputText: 's = "RLRRLLRLRL"', outputText: "4", explanation: "Can split into RL, RRLL, RL, RL." }
        ],
        testCases: [
            { input: ["RLRRLLRLRL"], output: 4 },
            { input: ["RLLLLRRRLR"], output: 3 }
        ]
    },

    {
        title: "Reverse String II",
        slug: "reverse-string-ii",
        difficulty: "Easy",
        category: "String",
        order: 30,
        videoId: "",
        description: "<p>Given a string <code>s</code> and integer <code>k</code>, reverse the first <code>k</code> characters for every <code>2k</code> characters counting from the start.</p>",
        starterCodes: {
            javascript: "function reverseStr(s, k) {\n  // Write your code here\n};",
            python: "def reverseStr(s, k):\n    pass",
            java: "class Solution {\n    public String reverseStr(String s, int k) {\n    }\n}"
        },
        handlerFunction: "reverseStr",
        constraints: ["1 <= s.length <= 10^4", "s consists of only lowercase English letters", "1 <= k <= 10^4"],
        examples: [
            { id: 1, inputText: 's = "abcdefg", k = 2', outputText: '"bacdfeg"', explanation: "Reverse every first 2 chars in each 4-char block." }
        ],
        testCases: [
            { input: ["abcdefg", 2], output: "bacdfeg" },
            { input: ["abcd", 2], output: "bacd" }
        ]
    },

    {
        title: "Valid Palindrome",
        slug: "valid-palindrome",
        difficulty: "Easy",
        category: "String",
        order: 31,
        videoId: "",
        description: "<p>A phrase is a palindrome if, after converting all uppercase letters to lowercase and removing all non-alphanumeric characters, it reads the same forward and backward. Given a string <code>s</code>, return <code>true</code> if it is a palindrome.</p>",
        starterCodes: {
            javascript: "function isPalindrome(s) {\n  // Write your code here\n};",
            python: "def isPalindrome(s):\n    pass",
            java: "class Solution {\n    public boolean isPalindrome(String s) {\n    }\n}"
        },
        handlerFunction: "isPalindrome",
        constraints: ["1 <= s.length <= 2 * 10^5", "s consists only of printable ASCII characters"],
        examples: [
            { id: 1, inputText: 's = "A man, a plan, a canal: Panama"', outputText: "true", explanation: "Reads 'amanaplanacanalpanama' which is a palindrome." }
        ],
        testCases: [
            { input: ["A man, a plan, a canal: Panama"], output: true },
            { input: ["race a car"], output: false }
        ]
    },

    {
        title: "Largest Odd Number in a String",
        slug: "largest-odd-number-in-a-string",
        difficulty: "Easy",
        category: "String",
        order: 32,
        videoId: "",
        description: "<p>Given a string <code>num</code> representing a large integer, return the largest-valued odd integer (as a string) that is a non-empty substring of <code>num</code>, or an empty string if no odd integer exists.</p>",
        starterCodes: {
            javascript: "function largestOddNumber(num) {\n  // Write your code here\n};",
            python: "def largestOddNumber(num):\n    pass",
            java: "class Solution {\n    public String largestOddNumber(String num) {\n    }\n}"
        },
        handlerFunction: "largestOddNumber",
        constraints: ["1 <= num.length <= 10^5", "num only consists of digits and does not have leading zeros"],
        examples: [
            { id: 1, inputText: 'num = "52"', outputText: '"5"', explanation: "The only odd number is 5." }
        ],
        testCases: [
            { input: ["52"], output: "5" },
            { input: ["4206"], output: "" },
            { input: ["35427"], output: "35427" }
        ]
    },

    {
        title: "Longest Common Prefix",
        slug: "longest-common-prefix",
        difficulty: "Easy",
        category: "String",
        order: 33,
        videoId: "",
        description: "<p>Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string.</p>",
        starterCodes: {
            javascript: "function longestCommonPrefix(strs) {\n  // Write your code here\n};",
            python: "def longestCommonPrefix(strs):\n    pass",
            java: "class Solution {\n    public String longestCommonPrefix(String[] strs) {\n    }\n}"
        },
        handlerFunction: "longestCommonPrefix",
        constraints: ["1 <= strs.length <= 200", "0 <= strs[i].length <= 200", "strs[i] consists of only lowercase English letters"],
        examples: [
            { id: 1, inputText: 'strs = ["flower","flow","flight"]', outputText: '"fl"', explanation: "Common prefix is 'fl'." }
        ],
        testCases: [
            { input: [["flower", "flow", "flight"]], output: "fl" },
            { input: [["dog", "racecar", "car"]], output: "" }
        ]
    },

    {
        title: "Valid Anagram",
        slug: "valid-anagram",
        difficulty: "Easy",
        category: "String",
        order: 34,
        videoId: "",
        description: "<p>Given two strings <code>s</code> and <code>t</code>, return <code>true</code> if <code>t</code> is an anagram of <code>s</code>, and <code>false</code> otherwise.</p>",
        starterCodes: {
            javascript: "function isAnagram(s, t) {\n  // Write your code here\n};",
            python: "def isAnagram(s, t):\n    pass",
            java: "class Solution {\n    public boolean isAnagram(String s, String t) {\n    }\n}"
        },
        handlerFunction: "isAnagram",
        constraints: ["1 <= s.length, t.length <= 5 * 10^4", "s and t consist of lowercase English letters"],
        examples: [
            { id: 1, inputText: 's = "anagram", t = "nagaram"', outputText: "true", explanation: "Same characters rearranged." }
        ],
        testCases: [
            { input: ["anagram", "nagaram"], output: true },
            { input: ["rat", "car"], output: false }
        ]
    },

    {
        title: "Isomorphic Strings",
        slug: "isomorphic-strings",
        difficulty: "Easy",
        category: "String",
        order: 35,
        videoId: "",
        description: "<p>Given two strings <code>s</code> and <code>t</code>, determine if they are isomorphic. Two strings are isomorphic if the characters in <code>s</code> can be replaced to get <code>t</code>.</p>",
        starterCodes: {
            javascript: "function isIsomorphic(s, t) {\n  // Write your code here\n};",
            python: "def isIsomorphic(s, t):\n    pass",
            java: "class Solution {\n    public boolean isIsomorphic(String s, String t) {\n    }\n}"
        },
        handlerFunction: "isIsomorphic",
        constraints: ["1 <= s.length <= 5 * 10^4", "t.length == s.length", "s and t consist of any valid ASCII character"],
        examples: [
            { id: 1, inputText: 's = "egg", t = "add"', outputText: "true", explanation: "e->a, g->d mapping is consistent." }
        ],
        testCases: [
            { input: ["egg", "add"], output: true },
            { input: ["foo", "bar"], output: false },
            { input: ["paper", "title"], output: true }
        ]
    },

    {
        title: "Group Anagrams",
        slug: "group-anagrams",
        difficulty: "Medium",
        category: "String",
        order: 36,
        videoId: "",
        description: "<p>Given an array of strings <code>strs</code>, group the anagrams together. You can return the answer in any order.</p>",
        starterCodes: {
            javascript: "function groupAnagrams(strs) {\n  // Write your code here\n};",
            python: "def groupAnagrams(strs):\n    pass",
            java: "class Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n    }\n}"
        },
        handlerFunction: "groupAnagrams",
        constraints: ["1 <= strs.length <= 10^4", "0 <= strs[i].length <= 100", "strs[i] consists of lowercase English letters"],
        examples: [
            { id: 1, inputText: 'strs = ["eat","tea","tan","ate","nat","bat"]', outputText: '[["bat"],["nat","tan"],["ate","eat","tea"]]', explanation: "Grouped by anagram families." }
        ],
        testCases: [
            { input: [["eat", "tea", "tan", "ate", "nat", "bat"]], output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]] }
        ]
    },

    // ─── Stack & Queues ───────────────────────────────────────────────────────

    { title: "Implement Stack", slug: "implement-stack", difficulty: "Easy", category: "Stack & Queue", order: 37, videoId: "", description: "<p>Implement a last-in-first-out (LIFO) stack using only arrays. Implement push, pop, top, and isEmpty operations.</p>", starterCodes: { javascript: "class MyStack {\n  constructor() {}\n  push(x) {}\n  pop() {}\n  top() {}\n  isEmpty() {}\n}", python: "class MyStack:\n    def __init__(self): pass\n    def push(self, x): pass\n    def pop(self): pass\n    def top(self): pass\n    def isEmpty(self): pass", java: "class MyStack {\n    public void push(int x) {}\n    public int pop() { return 0; }\n    public int top() { return 0; }\n    public boolean isEmpty() { return true; }\n}" }, handlerFunction: "implementStack", constraints: ["1 <= calls <= 100"], examples: [{ id: 1, inputText: 'push(1), push(2), top()', outputText: "2", explanation: "Last pushed is 2." }], testCases: [{ input: ["implementStack"], output: null }] },

    { title: "Implement Queue using Stacks", slug: "implement-queue-using-stacks", difficulty: "Easy", category: "Stack & Queue", order: 38, videoId: "", description: "<p>Implement a first-in-first-out (FIFO) queue using only two stacks. Implement push, pop, peek, and empty operations.</p>", starterCodes: { javascript: "class MyQueue {\n  constructor() {}\n  push(x) {}\n  pop() {}\n  peek() {}\n  empty() {}\n}", python: "class MyQueue:\n    def __init__(self): pass\n    def push(self, x): pass\n    def pop(self): pass\n    def peek(self): pass\n    def empty(self): pass", java: "class MyQueue {\n    public void push(int x) {}\n    public int pop() { return 0; }\n    public int peek() { return 0; }\n    public boolean empty() { return true; }\n}" }, handlerFunction: "implementQueue", constraints: ["1 <= calls <= 100"], examples: [{ id: 1, inputText: 'push(1), push(2), peek(), pop()', outputText: "1", explanation: "First in first out." }], testCases: [{ input: ["implementQueue"], output: null }] },

    { title: "Min Stack", slug: "min-stack", difficulty: "Easy", category: "Stack & Queue", order: 39, videoId: "", description: "<p>Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.</p>", starterCodes: { javascript: "class MinStack {\n  constructor() {}\n  push(val) {}\n  pop() {}\n  top() {}\n  getMin() {}\n}", python: "class MinStack:\n    def __init__(self): pass\n    def push(self, val): pass\n    def pop(self): pass\n    def top(self): pass\n    def getMin(self): pass", java: "class MinStack {\n    public void push(int val) {}\n    public void pop() {}\n    public int top() { return 0; }\n    public int getMin() { return 0; }\n}" }, handlerFunction: "minStack", constraints: ["1 <= calls <= 3 * 10^4"], examples: [{ id: 1, inputText: 'push(-2), push(0), push(-3), getMin()', outputText: "-3", explanation: "Minimum is -3." }], testCases: [{ input: ["minStack"], output: null }] },

    { title: "Valid Parentheses", slug: "valid-parentheses", difficulty: "Easy", category: "Stack & Queue", order: 40, videoId: "", description: "<p>Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid. An input string is valid if: open brackets are closed by the same type of brackets, and open brackets are closed in the correct order.</p>", starterCodes: { javascript: "function isValid(s) {\n  // Write your code here\n};", python: "def isValid(s):\n    pass", java: "class Solution {\n    public boolean isValid(String s) {\n    }\n}" }, handlerFunction: "isValid", constraints: ["1 <= s.length <= 10^4", "s consists of parentheses only '()[]{}'"], examples: [{ id: 1, inputText: 's = "()"', outputText: "true", explanation: "Properly matched parentheses." }, { id: 2, inputText: 's = "([)]"', outputText: "false", explanation: "Wrong closing order." }], testCases: [{ input: ["()"], output: true }, { input: ["()[]{}"], output: true }, { input: ["(]"], output: false }, { input: ["([)]"], output: false }] },

    { title: "Remove Outermost Parentheses", slug: "remove-outermost-parentheses", difficulty: "Easy", category: "Stack & Queue", order: 40, videoId: "", description: "<p>Remove the outermost parentheses of every primitive string in a valid parentheses string decomposition.</p>", starterCodes: { javascript: "function removeOuterParentheses(s) {\n  // Write your code here\n};", python: "def removeOuterParentheses(s):\n    pass", java: "class Solution {\n    public String removeOuterParentheses(String s) {\n    }\n}" }, handlerFunction: "removeOuterParentheses", constraints: ["1 <= s.length <= 10^5"], examples: [{ id: 1, inputText: 's = "(()())(())"', outputText: '"()()()"', explanation: "Remove outermost from each primitive." }], testCases: [{ input: ["(()())(())"], output: "()()()" }, { input: ["(()())(())(()(()))"], output: "()()()()(())" }] },

    { title: "Evaluate Reverse Polish Notation", slug: "evaluate-reverse-polish-notation", difficulty: "Medium", category: "Stack & Queue", order: 41, videoId: "", description: "<p>Evaluate the value of an arithmetic expression in Reverse Polish Notation. Valid operators are +, -, *, and /.</p>", starterCodes: { javascript: "function evalRPN(tokens) {\n  // Write your code here\n};", python: "def evalRPN(tokens):\n    pass", java: "class Solution {\n    public int evalRPN(String[] tokens) {\n    }\n}" }, handlerFunction: "evalRPN", constraints: ["1 <= tokens.length <= 10^4"], examples: [{ id: 1, inputText: 'tokens = ["2","1","+","3","*"]', outputText: "9", explanation: "((2+1)*3) = 9." }], testCases: [{ input: [["2", "1", "+", "3", "*"]], output: 9 }, { input: [["4", "13", "5", "/", "+"]], output: 6 }] },

    { title: "Next Greater Element", slug: "next-greater-element", difficulty: "Easy", category: "Stack & Queue", order: 42, videoId: "", description: "<p>Given two arrays where nums1 is a subset of nums2, find the next greater element for each element in nums1 within nums2.</p>", starterCodes: { javascript: "function nextGreaterElement(nums1, nums2) {\n  // Write your code here\n};", python: "def nextGreaterElement(nums1, nums2):\n    pass", java: "class Solution {\n    public int[] nextGreaterElement(int[] nums1, int[] nums2) {\n    }\n}" }, handlerFunction: "nextGreaterElement", constraints: ["1 <= nums1.length <= nums2.length <= 1000"], examples: [{ id: 1, inputText: "nums1 = [4,1,2], nums2 = [1,3,4,2]", outputText: "[-1,3,-1]", explanation: "Next greater of 4 is -1, 1 is 3, 2 is -1." }], testCases: [{ input: [[4, 1, 2], [1, 3, 4, 2]], output: [-1, 3, -1] }] },

    { title: "Daily Temperatures", slug: "daily-temperatures", difficulty: "Medium", category: "Stack & Queue", order: 43, videoId: "", description: "<p>Given daily temperatures array, return an array where each element is how many days you have to wait for a warmer temperature.</p>", starterCodes: { javascript: "function dailyTemperatures(temperatures) {\n  // Write your code here\n};", python: "def dailyTemperatures(temperatures):\n    pass", java: "class Solution {\n    public int[] dailyTemperatures(int[] temperatures) {\n    }\n}" }, handlerFunction: "dailyTemperatures", constraints: ["1 <= temperatures.length <= 10^5"], examples: [{ id: 1, inputText: "temperatures = [73,74,75,71,69,72,76,73]", outputText: "[1,1,4,2,1,1,0,0]", explanation: "Days to wait for warmer temperature." }], testCases: [{ input: [[73, 74, 75, 71, 69, 72, 76, 73]], output: [1, 1, 4, 2, 1, 1, 0, 0] }] },

    { title: "Next Greater Element II", slug: "next-greater-element-ii", difficulty: "Medium", category: "Stack & Queue", order: 44, videoId: "", description: "<p>Given a circular integer array, return the next greater number for every element. In a circular array the next element of the last element is the first element.</p>", starterCodes: { javascript: "function nextGreaterElements(nums) {\n  // Write your code here\n};", python: "def nextGreaterElements(nums):\n    pass", java: "class Solution {\n    public int[] nextGreaterElements(int[] nums) {\n    }\n}" }, handlerFunction: "nextGreaterElements", constraints: ["1 <= nums.length <= 10^4"], examples: [{ id: 1, inputText: "nums = [1,2,1]", outputText: "[2,-1,2]", explanation: "Circular wrap, 1 finds 2, 2 finds no greater so -1, last 1 finds 2." }], testCases: [{ input: [[1, 2, 1]], output: [2, -1, 2] }] },

    { title: "Rotting Oranges", slug: "rotting-oranges", difficulty: "Medium", category: "Stack & Queue", order: 45, videoId: "", description: "<p>In a grid, 0 is empty, 1 is fresh orange, 2 is rotten orange. Every minute, rotten oranges rot adjacent fresh ones. Return the minimum minutes until no fresh oranges remain, or -1 if impossible.</p>", starterCodes: { javascript: "function orangesRotting(grid) {\n  // Write your code here\n};", python: "def orangesRotting(grid):\n    pass", java: "class Solution {\n    public int orangesRotting(int[][] grid) {\n    }\n}" }, handlerFunction: "orangesRotting", constraints: ["1 <= grid.length, grid[i].length <= 10"], examples: [{ id: 1, inputText: "grid = [[2,1,1],[1,1,0],[0,1,1]]", outputText: "4", explanation: "Takes 4 minutes to rot all oranges." }], testCases: [{ input: [[[2, 1, 1], [1, 1, 0], [0, 1, 1]]], output: 4 }, { input: [[[0, 2]]], output: 0 }] },

    // ─── Binary Search ────────────────────────────────────────────────────────

    { title: "Square Root of X", slug: "square-root-of-x", difficulty: "Easy", category: "Binary Search", order: 47, videoId: "", description: "<p>Given a non-negative integer x, return the square root of x rounded down to the nearest integer.</p>", starterCodes: { javascript: "function mySqrt(x) {\n  // Write your code here\n};", python: "def mySqrt(x):\n    pass", java: "class Solution {\n    public int mySqrt(int x) {\n    }\n}" }, handlerFunction: "mySqrt", constraints: ["0 <= x <= 2^31 - 1"], examples: [{ id: 1, inputText: "x = 8", outputText: "2", explanation: "sqrt(8) = 2.82..., floor to 2." }], testCases: [{ input: [4], output: 2 }, { input: [8], output: 2 }] },

    { title: "Guess Higher or Lower", slug: "guess-higher-or-lower", difficulty: "Easy", category: "Binary Search", order: 48, videoId: "", description: "<p>Use binary search to guess a pre-picked number. A guess API returns -1, 0, or 1 for too high, correct, or too low.</p>", starterCodes: { javascript: "function guessNumber(n) {\n  // Write your code here\n};", python: "def guessNumber(n):\n    pass", java: "class Solution {\n    public int guessNumber(int n) {\n    }\n}" }, handlerFunction: "guessNumber", constraints: ["1 <= n <= 2^31 - 1"], examples: [{ id: 1, inputText: "n = 10, pick = 6", outputText: "6", explanation: "Binary search finds 6." }], testCases: [{ input: [10], output: 6 }] },

    { title: "Search in Rotated Sorted Array", slug: "search-in-rotated-sorted-array", difficulty: "Medium", category: "Binary Search", order: 49, videoId: "", description: "<p>Given a rotated sorted array and a target, return the index of target or -1 if not found.</p>", starterCodes: { javascript: "function search(nums, target) {\n  // Write your code here\n};", python: "def search(nums, target):\n    pass", java: "class Solution {\n    public int search(int[] nums, int target) {\n    }\n}" }, handlerFunction: "search", constraints: ["1 <= nums.length <= 5000"], examples: [{ id: 1, inputText: "nums = [4,5,6,7,0,1,2], target = 0", outputText: "4", explanation: "0 is at index 4." }], testCases: [{ input: [[4, 5, 6, 7, 0, 1, 2], 0], output: 4 }, { input: [[4, 5, 6, 7, 0, 1, 2], 3], output: -1 }] },

    { title: "First Bad Version", slug: "first-bad-version", difficulty: "Easy", category: "Binary Search", order: 50, videoId: "", description: "<p>Given n versions [1,2,...,n] and an API isBadVersion(v), find the first bad version using minimum API calls.</p>", starterCodes: { javascript: "function solution(isBadVersion) {\n  return function(n) {\n    // Write your code here\n  };\n};", python: "def firstBadVersion(n):\n    pass", java: "class Solution {\n    public int firstBadVersion(int n) {\n    }\n}" }, handlerFunction: "firstBadVersion", constraints: ["1 <= bad <= n <= 2^31 - 1"], examples: [{ id: 1, inputText: "n = 5, bad = 4", outputText: "4", explanation: "First bad version is 4." }], testCases: [{ input: [5], output: 4 }] },

    { title: "Find Peak Element", slug: "find-peak-element", difficulty: "Medium", category: "Binary Search", order: 51, videoId: "", description: "<p>A peak element is greater than its neighbors. Given an input array, find a peak element and return its index. O(log n) required.</p>", starterCodes: { javascript: "function findPeakElement(nums) {\n  // Write your code here\n};", python: "def findPeakElement(nums):\n    pass", java: "class Solution {\n    public int findPeakElement(int[] nums) {\n    }\n}" }, handlerFunction: "findPeakElement", constraints: ["1 <= nums.length <= 1000"], examples: [{ id: 1, inputText: "nums = [1,2,3,1]", outputText: "2", explanation: "3 at index 2 is a peak." }], testCases: [{ input: [[1, 2, 3, 1]], output: 2 }] },

    { title: "Find Minimum in Rotated Sorted Array", slug: "find-minimum-in-rotated-sorted-array", difficulty: "Medium", category: "Binary Search", order: 52, videoId: "", description: "<p>Find the minimum element in a rotated sorted array with all unique elements. Must run in O(log n) time.</p>", starterCodes: { javascript: "function findMin(nums) {\n  // Write your code here\n};", python: "def findMin(nums):\n    pass", java: "class Solution {\n    public int findMin(int[] nums) {\n    }\n}" }, handlerFunction: "findMin", constraints: ["1 <= nums.length <= 5000"], examples: [{ id: 1, inputText: "nums = [3,4,5,1,2]", outputText: "1", explanation: "1 is the minimum." }], testCases: [{ input: [[3, 4, 5, 1, 2]], output: 1 }, { input: [[4, 5, 6, 7, 0, 1, 2]], output: 0 }] },

    { title: "Find First and Last Position in Sorted Array", slug: "find-first-and-last-position-in-sorted-array", difficulty: "Medium", category: "Binary Search", order: 53, videoId: "", description: "<p>Given a sorted array, find the starting and ending position of a given target value. Must run in O(log n) time.</p>", starterCodes: { javascript: "function searchRange(nums, target) {\n  // Write your code here\n};", python: "def searchRange(nums, target):\n    pass", java: "class Solution {\n    public int[] searchRange(int[] nums, int target) {\n    }\n}" }, handlerFunction: "searchRange", constraints: ["0 <= nums.length <= 10^5"], examples: [{ id: 1, inputText: "nums = [5,7,7,8,8,10], target = 8", outputText: "[3,4]", explanation: "8 appears at positions 3 and 4." }], testCases: [{ input: [[5, 7, 7, 8, 8, 10], 8], output: [3, 4] }, { input: [[5, 7, 7, 8, 8, 10], 6], output: [-1, -1] }] },

    { title: "Single Element in a Sorted Array", slug: "single-element-in-a-sorted-array", difficulty: "Medium", category: "Binary Search", order: 54, videoId: "", description: "<p>You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element in O(log n) time.</p>", starterCodes: { javascript: "function singleNonDuplicate(nums) {\n  // Write your code here\n};", python: "def singleNonDuplicate(nums):\n    pass", java: "class Solution {\n    public int singleNonDuplicate(int[] nums) {\n    }\n}" }, handlerFunction: "singleNonDuplicate", constraints: ["1 <= nums.length <= 10^5"], examples: [{ id: 1, inputText: "nums = [1,1,2,3,3,4,4,8,8]", outputText: "2", explanation: "2 appears only once." }], testCases: [{ input: [[1, 1, 2, 3, 3, 4, 4, 8, 8]], output: 2 }] },

    { title: "Find K Closest Elements", slug: "find-k-closest-elements", difficulty: "Medium", category: "Binary Search", order: 55, videoId: "", description: "<p>Given a sorted integer array, find k closest integers to x. Result should be sorted in ascending order.</p>", starterCodes: { javascript: "function findClosestElements(arr, k, x) {\n  // Write your code here\n};", python: "def findClosestElements(arr, k, x):\n    pass", java: "class Solution {\n    public List<Integer> findClosestElements(int[] arr, int k, int x) {\n    }\n}" }, handlerFunction: "findClosestElements", constraints: ["1 <= k <= arr.length <= 10^4"], examples: [{ id: 1, inputText: "arr = [1,2,3,4,5], k = 4, x = 3", outputText: "[1,2,3,4]", explanation: "4 closest elements to 3." }], testCases: [{ input: [[1, 2, 3, 4, 5], 4, 3], output: [1, 2, 3, 4] }] },

    { title: "Find Peak in a Mountain Array", slug: "find-peak-in-mountain-array", difficulty: "Easy", category: "Binary Search", order: 56, videoId: "", description: "<p>Given a mountain array (strictly increasing then strictly decreasing), return the index of the peak element. A mountain array satisfies: <code>arr[0] < arr[1] < ... < arr[peak] > ... > arr[n-1]</code>. You must solve it in <code>O(log n)</code> time.</p>", starterCodes: { javascript: "function peakIndexInMountainArray(arr) {\n  // Write your code here\n};", python: "def peakIndexInMountainArray(arr):\n    pass", java: "class Solution {\n    public int peakIndexInMountainArray(int[] arr) {\n    }\n}" }, handlerFunction: "peakIndexInMountainArray", constraints: ["3 <= arr.length <= 10^5", "arr is guaranteed to be a mountain array"], examples: [{ id: 1, inputText: "arr = [0,1,0]", outputText: "1", explanation: "Peak is at index 1." }, { id: 2, inputText: "arr = [0,2,1,0]", outputText: "1", explanation: "Peak is at index 1 with value 2." }], testCases: [{ input: [[0, 1, 0]], output: 1 }, { input: [[0, 2, 1, 0]], output: 1 }, { input: [[0, 10, 5, 2]], output: 1 }] },


    // ─── Two Pointer and Sliding Window ──────────────────────────────────────

    { title: "Two Sum", slug: "two-sum-tp", difficulty: "Easy", category: "Two Pointer and Sliding Window", order: 55, videoId: "", description: "<p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return the indices of the two numbers that add up to target. You may assume that each input has exactly one solution and you may not use the same element twice.</p>", starterCodes: { javascript: "function twoSum(nums, target) {\n  // Write your code here\n};", python: "def twoSum(nums, target):\n    pass", java: "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n    }\n}" }, handlerFunction: "twoSum", constraints: ["2 <= nums.length <= 10^4", "-10^9 <= nums[i] <= 10^9", "Only one valid answer exists"], examples: [{ id: 1, inputText: "nums = [2,7,11,15], target = 9", outputText: "[0,1]", explanation: "nums[0] + nums[1] = 2 + 7 = 9." }], testCases: [{ input: [[2, 7, 11, 15], 9], output: [0, 1] }, { input: [[3, 2, 4], 6], output: [1, 2] }] },

    

    { title: "Find Index of First Occurrence in String", slug: "find-index-of-first-occurrence-in-string", difficulty: "Easy", category: "Two Pointer and Sliding Window", order: 57, videoId: "", description: "<p>Given two strings <code>haystack</code> and <code>needle</code>, return the index of the first occurrence of <code>needle</code> in <code>haystack</code>, or <code>-1</code> if not found.</p>", starterCodes: { javascript: "function strStr(haystack, needle) {\n  // Write your code here\n};", python: "def strStr(haystack, needle):\n    pass", java: "class Solution {\n    public int strStr(String haystack, String needle) {\n    }\n}" }, handlerFunction: "strStr", constraints: ["0 <= haystack.length, needle.length <= 5 * 10^4"], examples: [{ id: 1, inputText: 'haystack = "sadbutsad", needle = "sad"', outputText: "0", explanation: "'sad' occurs at index 0." }], testCases: [{ input: ["sadbutsad", "sad"], output: 0 }, { input: ["leetcode", "leeto"], output: -1 }] },

    { title: "Two Sum II", slug: "two-sum-ii", difficulty: "Easy", category: "Two Pointer and Sliding Window", order: 56, videoId: "", description: "<p>Given a 1-indexed sorted array, find two numbers that add up to target. Return their indices.</p>", starterCodes: { javascript: "function twoSum(numbers, target) {\n  // Write your code here\n};", python: "def twoSum(numbers, target):\n    pass", java: "class Solution {\n    public int[] twoSum(int[] numbers, int target) {\n    }\n}" }, handlerFunction: "twoSumII", constraints: ["2 <= numbers.length <= 3 * 10^4"], examples: [{ id: 1, inputText: "numbers = [2,7,11,15], target = 9", outputText: "[1,2]", explanation: "numbers[1] + numbers[2] = 9." }], testCases: [{ input: [[2, 7, 11, 15], 9], output: [1, 2] }] },

    { title: "Is Subsequence", slug: "is-subsequence", difficulty: "Easy", category: "Two Pointer and Sliding Window", order: 57, videoId: "", description: "<p>Given strings s and t, return true if s is a subsequence of t.</p>", starterCodes: { javascript: "function isSubsequence(s, t) {\n  // Write your code here\n};", python: "def isSubsequence(s, t):\n    pass", java: "class Solution {\n    public boolean isSubsequence(String s, String t) {\n    }\n}" }, handlerFunction: "isSubsequence", constraints: ["0 <= s.length <= 100"], examples: [{ id: 1, inputText: 's = "abc", t = "ahbgdc"', outputText: "true", explanation: "a,b,c appear in order in t." }], testCases: [{ input: ["abc", "ahbgdc"], output: true }, { input: ["axc", "ahbgdc"], output: false }] },

    { title: "Container With Most Water", slug: "container-with-most-water", difficulty: "Medium", category: "Two Pointer and Sliding Window", order: 58, videoId: "", description: "<p>Given n non-negative integers representing vertical lines, find two lines that together with the x-axis form a container holding the most water.</p>", starterCodes: { javascript: "function maxArea(height) {\n  // Write your code here\n};", python: "def maxArea(height):\n    pass", java: "class Solution {\n    public int maxArea(int[] height) {\n    }\n}" }, handlerFunction: "maxArea", constraints: ["2 <= height.length <= 10^5"], examples: [{ id: 1, inputText: "height = [1,8,6,2,5,4,8,3,7]", outputText: "49", explanation: "Lines at index 1 and 8 form max container." }], testCases: [{ input: [[1, 8, 6, 2, 5, 4, 8, 3, 7]], output: 49 }] },

    { title: "Three Sum", slug: "three-sum", difficulty: "Medium", category: "Two Pointer and Sliding Window", order: 59, videoId: "", description: "<p>Given an integer array nums, return all triplets that sum to zero. The solution set must not contain duplicate triplets.</p>", starterCodes: { javascript: "function threeSum(nums) {\n  // Write your code here\n};", python: "def threeSum(nums):\n    pass", java: "class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n    }\n}" }, handlerFunction: "threeSum", constraints: ["3 <= nums.length <= 3000"], examples: [{ id: 1, inputText: "nums = [-1,0,1,2,-1,-4]", outputText: "[[-1,-1,2],[-1,0,1]]", explanation: "Two triplets sum to 0." }], testCases: [{ input: [[-1, 0, 1, 2, -1, -4]], output: [[-1, -1, 2], [-1, 0, 1]] }] },

    { title: "Trapping Rain Water", slug: "trapping-rain-water", difficulty: "Hard", category: "Two Pointer and Sliding Window", order: 60, videoId: "", description: "<p>Given n non-negative integers representing an elevation map, compute how much water it can trap after raining.</p>", starterCodes: { javascript: "function trap(height) {\n  // Write your code here\n};", python: "def trap(height):\n    pass", java: "class Solution {\n    public int trap(int[] height) {\n    }\n}" }, handlerFunction: "trap", constraints: ["1 <= height.length <= 2 * 10^4"], examples: [{ id: 1, inputText: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", outputText: "6", explanation: "6 units of water trapped." }], testCases: [{ input: [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]], output: 6 }] },

    { title: "Longest Substring Without Repeating Characters", slug: "longest-substring-without-repeating-characters", difficulty: "Medium", category: "Two Pointer and Sliding Window", order: 61, videoId: "", description: "<p>Given a string s, find the length of the longest substring without repeating characters.</p>", starterCodes: { javascript: "function lengthOfLongestSubstring(s) {\n  // Write your code here\n};", python: "def lengthOfLongestSubstring(s):\n    pass", java: "class Solution {\n    public int lengthOfLongestSubstring(String s) {\n    }\n}" }, handlerFunction: "lengthOfLongestSubstring", constraints: ["0 <= s.length <= 5 * 10^4"], examples: [{ id: 1, inputText: 's = "abcabcbb"', outputText: "3", explanation: "Longest is 'abc' with length 3." }], testCases: [{ input: ["abcabcbb"], output: 3 }, { input: ["bbbbb"], output: 1 }] },

    { title: "Longest Repeating Character Replacement", slug: "longest-repeating-character-replacement", difficulty: "Medium", category: "Two Pointer and Sliding Window", order: 62, videoId: "", description: "<p>Given a string s and k, replace at most k characters. Return the length of the longest substring with all same letters.</p>", starterCodes: { javascript: "function characterReplacement(s, k) {\n  // Write your code here\n};", python: "def characterReplacement(s, k):\n    pass", java: "class Solution {\n    public int characterReplacement(String s, int k) {\n    }\n}" }, handlerFunction: "characterReplacement", constraints: ["1 <= s.length <= 10^5"], examples: [{ id: 1, inputText: 's = "AABABBA", k = 1', outputText: "4", explanation: "Replace one B: AABBBBA has length 4." }], testCases: [{ input: ["AABABBA", 1], output: 4 }] },

    { title: "Permutation in String", slug: "permutation-in-string", difficulty: "Medium", category: "Two Pointer and Sliding Window", order: 63, videoId: "", description: "<p>Given strings s1 and s2, return true if s2 contains a permutation of s1.</p>", starterCodes: { javascript: "function checkInclusion(s1, s2) {\n  // Write your code here\n};", python: "def checkInclusion(s1, s2):\n    pass", java: "class Solution {\n    public boolean checkInclusion(String s1, String s2) {\n    }\n}" }, handlerFunction: "checkInclusion", constraints: ["1 <= s1.length, s2.length <= 10^4"], examples: [{ id: 1, inputText: 's1 = "ab", s2 = "eidbaooo"', outputText: "true", explanation: "s2 contains 'ba' which is a permutation." }], testCases: [{ input: ["ab", "eidbaooo"], output: true }, { input: ["ab", "eidboaoo"], output: false }] },

    { title: "Sliding Window Maximum", slug: "sliding-window-maximum", difficulty: "Hard", category: "Two Pointer and Sliding Window", order: 64, videoId: "", description: "<p>Given an array and window size k, return the max of each sliding window.</p>", starterCodes: { javascript: "function maxSlidingWindow(nums, k) {\n  // Write your code here\n};", python: "def maxSlidingWindow(nums, k):\n    pass", java: "class Solution {\n    public int[] maxSlidingWindow(int[] nums, int k) {\n    }\n}" }, handlerFunction: "maxSlidingWindow", constraints: ["1 <= nums.length <= 10^5"], examples: [{ id: 1, inputText: "nums = [1,3,-1,-3,5,3,6,7], k = 3", outputText: "[3,3,5,5,6,7]", explanation: "Max in each window of size 3." }], testCases: [{ input: [[1, 3, -1, -3, 5, 3, 6, 7], 3], output: [3, 3, 5, 5, 6, 7] }] },

    // ─── Binary Tree ──────────────────────────────────────────────────────────

    { title: "Preorder Traversal", slug: "preorder-traversal", difficulty: "Easy", category: "Binary Tree", order: 65, videoId: "", description: "<p>Given the root of a binary tree, return the preorder traversal of its nodes' values.</p>", starterCodes: { javascript: "function preorderTraversal(root) {\n  // Write your code here\n};", python: "def preorderTraversal(root):\n    pass", java: "class Solution {\n    public List<Integer> preorderTraversal(TreeNode root) {\n    }\n}" }, handlerFunction: "preorderTraversal", constraints: ["0 <= nodes <= 100"], examples: [{ id: 1, inputText: "root = [1,null,2,3]", outputText: "[1,2,3]", explanation: "Root first, then left, then right." }], testCases: [{ input: [[1, null, 2, 3]], output: [1, 2, 3] }] },

    { title: "Inorder Traversal", slug: "inorder-traversal", difficulty: "Easy", category: "Binary Tree", order: 66, videoId: "", description: "<p>Given the root of a binary tree, return the inorder traversal of its nodes' values.</p>", starterCodes: { javascript: "function inorderTraversal(root) {\n  // Write your code here\n};", python: "def inorderTraversal(root):\n    pass", java: "class Solution {\n    public List<Integer> inorderTraversal(TreeNode root) {\n    }\n}" }, handlerFunction: "inorderTraversal", constraints: ["0 <= nodes <= 100"], examples: [{ id: 1, inputText: "root = [1,null,2,3]", outputText: "[1,3,2]", explanation: "Left, root, right." }], testCases: [{ input: [[1, null, 2, 3]], output: [1, 3, 2] }] },

    { title: "Postorder Traversal", slug: "postorder-traversal", difficulty: "Easy", category: "Binary Tree", order: 67, videoId: "", description: "<p>Given the root of a binary tree, return the postorder traversal of its nodes' values.</p>", starterCodes: { javascript: "function postorderTraversal(root) {\n  // Write your code here\n};", python: "def postorderTraversal(root):\n    pass", java: "class Solution {\n    public List<Integer> postorderTraversal(TreeNode root) {\n    }\n}" }, handlerFunction: "postorderTraversal", constraints: ["0 <= nodes <= 100"], examples: [{ id: 1, inputText: "root = [1,null,2,3]", outputText: "[3,2,1]", explanation: "Left, right, root." }], testCases: [{ input: [[1, null, 2, 3]], output: [3, 2, 1] }] },

    { title: "Level Order Traversal", slug: "level-order-traversal", difficulty: "Medium", category: "Binary Tree", order: 68, videoId: "", description: "<p>Given the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).</p>", starterCodes: { javascript: "function levelOrder(root) {\n  // Write your code here\n};", python: "def levelOrder(root):\n    pass", java: "class Solution {\n    public List<List<Integer>> levelOrder(TreeNode root) {\n    }\n}" }, handlerFunction: "levelOrder", constraints: ["0 <= nodes <= 2000"], examples: [{ id: 1, inputText: "root = [3,9,20,null,null,15,7]", outputText: "[[3],[9,20],[15,7]]", explanation: "Level by level." }], testCases: [{ input: [[3, 9, 20, null, null, 15, 7]], output: [[3], [9, 20], [15, 7]] }] },

    { title: "Maximum Depth of Binary Tree", slug: "maximum-depth-of-binary-tree", difficulty: "Easy", category: "Binary Tree", order: 69, videoId: "", description: "<p>Given the root of a binary tree, return its maximum depth.</p>", starterCodes: { javascript: "function maxDepth(root) {\n  // Write your code here\n};", python: "def maxDepth(root):\n    pass", java: "class Solution {\n    public int maxDepth(TreeNode root) {\n    }\n}" }, handlerFunction: "maxDepth", constraints: ["0 <= nodes <= 10^4"], examples: [{ id: 1, inputText: "root = [3,9,20,null,null,15,7]", outputText: "3", explanation: "Max depth is 3." }], testCases: [{ input: [[3, 9, 20, null, null, 15, 7]], output: 3 }] },

    { title: "Symmetric Tree", slug: "symmetric-tree", difficulty: "Easy", category: "Binary Tree", order: 70, videoId: "", description: "<p>Given the root of a binary tree, check whether it is a mirror of itself (symmetric around its center).</p>", starterCodes: { javascript: "function isSymmetric(root) {\n  // Write your code here\n};", python: "def isSymmetric(root):\n    pass", java: "class Solution {\n    public boolean isSymmetric(TreeNode root) {\n    }\n}" }, handlerFunction: "isSymmetric", constraints: ["1 <= nodes <= 1000"], examples: [{ id: 1, inputText: "root = [1,2,2,3,4,4,3]", outputText: "true", explanation: "Symmetric tree." }], testCases: [{ input: [[1, 2, 2, 3, 4, 4, 3]], output: true }, { input: [[1, 2, 2, null, 3, null, 3]], output: false }] },

    { title: "Invert Binary Tree", slug: "invert-binary-tree", difficulty: "Easy", category: "Binary Tree", order: 71, videoId: "", description: "<p>Given the root of a binary tree, invert the tree and return its root.</p>", starterCodes: { javascript: "function invertTree(root) {\n  // Write your code here\n};", python: "def invertTree(root):\n    pass", java: "class Solution {\n    public TreeNode invertTree(TreeNode root) {\n    }\n}" }, handlerFunction: "invertTree", constraints: ["0 <= nodes <= 100"], examples: [{ id: 1, inputText: "root = [4,2,7,1,3,6,9]", outputText: "[4,7,2,9,6,3,1]", explanation: "Left and right subtrees swapped." }], testCases: [{ input: [[4, 2, 7, 1, 3, 6, 9]], output: [4, 7, 2, 9, 6, 3, 1] }] },

    { title: "Same Tree", slug: "same-tree", difficulty: "Easy", category: "Binary Tree", order: 72, videoId: "", description: "<p>Given the roots of two binary trees, check if they are the same.</p>", starterCodes: { javascript: "function isSameTree(p, q) {\n  // Write your code here\n};", python: "def isSameTree(p, q):\n    pass", java: "class Solution {\n    public boolean isSameTree(TreeNode p, TreeNode q) {\n    }\n}" }, handlerFunction: "isSameTree", constraints: ["0 <= nodes <= 100"], examples: [{ id: 1, inputText: "p = [1,2,3], q = [1,2,3]", outputText: "true", explanation: "Identical trees." }], testCases: [{ input: [[1, 2, 3], [1, 2, 3]], output: true }, { input: [[1, 2], [1, null, 2]], output: false }] },

    { title: "Balanced Binary Tree", slug: "balanced-binary-tree", difficulty: "Easy", category: "Binary Tree", order: 73, videoId: "", description: "<p>Given a binary tree, determine if it is height-balanced (depth of two subtrees differs by at most 1).</p>", starterCodes: { javascript: "function isBalanced(root) {\n  // Write your code here\n};", python: "def isBalanced(root):\n    pass", java: "class Solution {\n    public boolean isBalanced(TreeNode root) {\n    }\n}" }, handlerFunction: "isBalanced", constraints: ["0 <= nodes <= 5000"], examples: [{ id: 1, inputText: "root = [3,9,20,null,null,15,7]", outputText: "true", explanation: "Height balanced." }], testCases: [{ input: [[3, 9, 20, null, null, 15, 7]], output: true }] },

    { title: "Diameter of a Binary Tree", slug: "diameter-of-binary-tree", difficulty: "Easy", category: "Binary Tree", order: 74, videoId: "", description: "<p>Given the root, return the length of the diameter (longest path between any two nodes).</p>", starterCodes: { javascript: "function diameterOfBinaryTree(root) {\n  // Write your code here\n};", python: "def diameterOfBinaryTree(root):\n    pass", java: "class Solution {\n    public int diameterOfBinaryTree(TreeNode root) {\n    }\n}" }, handlerFunction: "diameterOfBinaryTree", constraints: ["1 <= nodes <= 10^4"], examples: [{ id: 1, inputText: "root = [1,2,3,4,5]", outputText: "3", explanation: "Path [4,2,1,3] or [5,2,1,3]." }], testCases: [{ input: [[1, 2, 3, 4, 5]], output: 3 }] },

    { title: "Binary Tree Right Side View", slug: "binary-tree-right-side-view", difficulty: "Medium", category: "Binary Tree", order: 75, videoId: "", description: "<p>Given a binary tree, return values visible from the right side (one per level).</p>", starterCodes: { javascript: "function rightSideView(root) {\n  // Write your code here\n};", python: "def rightSideView(root):\n    pass", java: "class Solution {\n    public List<Integer> rightSideView(TreeNode root) {\n    }\n}" }, handlerFunction: "rightSideView", constraints: ["0 <= nodes <= 100"], examples: [{ id: 1, inputText: "root = [1,2,3,null,5,null,4]", outputText: "[1,3,4]", explanation: "Rightmost nodes at each level." }], testCases: [{ input: [[1, 2, 3, null, 5, null, 4]], output: [1, 3, 4] }] },

    { title: "Lowest Common Ancestor of Binary Tree", slug: "lowest-common-ancestor-binary-tree", difficulty: "Medium", category: "Binary Tree", order: 76, videoId: "", description: "<p>Given a binary tree and two nodes p and q, find their lowest common ancestor.</p>", starterCodes: { javascript: "function lowestCommonAncestor(root, p, q) {\n  // Write your code here\n};", python: "def lowestCommonAncestor(root, p, q):\n    pass", java: "class Solution {\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n    }\n}" }, handlerFunction: "lowestCommonAncestor", constraints: ["2 <= nodes <= 10^5"], examples: [{ id: 1, inputText: "root = [3,5,1,6,2,0,8], p = 5, q = 1", outputText: "3", explanation: "3 is the LCA of 5 and 1." }], testCases: [{ input: [[3, 5, 1, 6, 2, 0, 8], 5, 1], output: 3 }] },

    { title: "Path Sum", slug: "path-sum", difficulty: "Easy", category: "Binary Tree", order: 77, videoId: "", description: "<p>Given the root of a binary tree and an integer <code>targetSum</code>, return <code>true</code> if the tree has a root-to-leaf path such that adding up all the values along the path equals <code>targetSum</code>.</p>", starterCodes: { javascript: "function hasPathSum(root, targetSum) {\n  // Write your code here\n};", python: "def hasPathSum(root, targetSum):\n    pass", java: "class Solution {\n    public boolean hasPathSum(TreeNode root, int targetSum) {\n    }\n}" }, handlerFunction: "hasPathSum", constraints: ["0 <= nodes <= 5000", "-1000 <= Node.val <= 1000"], examples: [{ id: 1, inputText: "root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22", outputText: "true", explanation: "Path 5→4→11→2 sums to 22." }], testCases: [{ input: [[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22], output: true }, { input: [[1, 2, 3], 5], output: false }] },

    { title: "Zigzag Level Order Traversal", slug: "zigzag-level-order-traversal", difficulty: "Medium", category: "Binary Tree", order: 78, videoId: "", description: "<p>Given the root of a binary tree, return the zigzag level order traversal of its nodes' values (i.e., alternating left-to-right then right-to-left for successive levels).</p>", starterCodes: { javascript: "function zigzagLevelOrder(root) {\n  // Write your code here\n};", python: "def zigzagLevelOrder(root):\n    pass", java: "class Solution {\n    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {\n    }\n}" }, handlerFunction: "zigzagLevelOrder", constraints: ["0 <= nodes <= 2000"], examples: [{ id: 1, inputText: "root = [3,9,20,null,null,15,7]", outputText: "[[3],[20,9],[15,7]]", explanation: "Level 1 left-to-right, level 2 right-to-left, etc." }], testCases: [{ input: [[3, 9, 20, null, null, 15, 7]], output: [[3], [20, 9], [15, 7]] }, { input: [[1]], output: [[1]] }] },

    { title: "Subtree of Another Tree", slug: "subtree-of-another-tree", difficulty: "Easy", category: "Binary Tree", order: 79, videoId: "", description: "<p>Given the roots of two binary trees <code>root</code> and <code>subRoot</code>, return <code>true</code> if there is a subtree of root with the same structure and node values as subRoot.</p>", starterCodes: { javascript: "function isSubtree(root, subRoot) {\n  // Write your code here\n};", python: "def isSubtree(root, subRoot):\n    pass", java: "class Solution {\n    public boolean isSubtree(TreeNode root, TreeNode subRoot) {\n    }\n}" }, handlerFunction: "isSubtree", constraints: ["1 <= root nodes <= 2000", "1 <= subRoot nodes <= 1000"], examples: [{ id: 1, inputText: "root = [3,4,5,1,2], subRoot = [4,1,2]", outputText: "true", explanation: "Subtree [4,1,2] exists in root." }], testCases: [{ input: [[3, 4, 5, 1, 2], [4, 1, 2]], output: true }, { input: [[3, 4, 5, 1, 2, null, null, null, null, 0], [4, 1, 2]], output: false }] },

    { title: "Count Good Nodes in Binary Tree", slug: "count-good-nodes-in-binary-tree", difficulty: "Medium", category: "Binary Tree", order: 80, videoId: "", description: "<p>Given a binary tree root, a node X in the tree is named <strong>good</strong> if in the path from root to X there are no nodes with a value greater than X. Return the number of good nodes in the binary tree.</p>", starterCodes: { javascript: "function goodNodes(root) {\n  // Write your code here\n};", python: "def goodNodes(root):\n    pass", java: "class Solution {\n    public int goodNodes(TreeNode root) {\n    }\n}" }, handlerFunction: "goodNodes", constraints: ["1 <= nodes <= 10^5", "-10^4 <= Node.val <= 10^4"], examples: [{ id: 1, inputText: "root = [3,1,4,3,null,1,5]", outputText: "4", explanation: "Nodes 3, 3, 4, 5 are good nodes." }], testCases: [{ input: [[3, 1, 4, 3, null, 1, 5]], output: 4 }, { input: [[3, 3, null, 4, 2]], output: 3 }] },

    { title: "Populating Next Right Pointers in Each Node", slug: "populating-next-right-pointers", difficulty: "Medium", category: "Binary Tree", order: 81, videoId: "", description: "<p>You are given a perfect binary tree. Populate each node's next pointer to point to its next right node. If there is no next right node, set to null.</p>", starterCodes: { javascript: "function connect(root) {\n  // Write your code here\n};", python: "def connect(root):\n    pass", java: "class Solution {\n    public Node connect(Node root) {\n    }\n}" }, handlerFunction: "connect", constraints: ["0 <= nodes <= 2^12 - 1"], examples: [{ id: 1, inputText: "root = [1,2,3,4,5,6,7]", outputText: "[1,#,2,3,#,4,5,6,7,#]", explanation: "Next pointers filled at each level." }], testCases: [{ input: [[1, 2, 3, 4, 5, 6, 7]], output: [1, null, 2, 3, null, 4, 5, 6, 7, null] }] },

    { title: "Binary Tree Maximum Path Sum", slug: "binary-tree-maximum-path-sum", difficulty: "Hard", category: "Binary Tree", order: 82, videoId: "", description: "<p>A path in a binary tree is a sequence of nodes where each pair of adjacent nodes has an edge. The path does not need to pass through the root. Given the root of the tree, return the maximum path sum of any non-empty path.</p>", starterCodes: { javascript: "function maxPathSum(root) {\n  // Write your code here\n};", python: "def maxPathSum(root):\n    pass", java: "class Solution {\n    public int maxPathSum(TreeNode root) {\n    }\n}" }, handlerFunction: "maxPathSum", constraints: ["1 <= nodes <= 3 * 10^4", "-1000 <= Node.val <= 1000"], examples: [{ id: 1, inputText: "root = [-10,9,20,null,null,15,7]", outputText: "42", explanation: "Path 15→20→7 has max sum = 42." }], testCases: [{ input: [[1, 2, 3]], output: 6 }, { input: [[-10, 9, 20, null, null, 15, 7]], output: 42 }] },

    // ─── Binary Search Tree ───────────────────────────────────────────────────


    { title: "Valid Binary Search Tree", slug: "valid-binary-search-tree", difficulty: "Medium", category: "Binary Search Tree", order: 77, videoId: "", description: "<p>Given the root of a binary tree, determine if it is a valid binary search tree.</p>", starterCodes: { javascript: "function isValidBST(root) {\n  // Write your code here\n};", python: "def isValidBST(root):\n    pass", java: "class Solution {\n    public boolean isValidBST(TreeNode root) {\n    }\n}" }, handlerFunction: "isValidBST", constraints: ["1 <= nodes <= 10^4"], examples: [{ id: 1, inputText: "root = [2,1,3]", outputText: "true", explanation: "Valid BST." }], testCases: [{ input: [[2, 1, 3]], output: true }, { input: [[5, 1, 4, null, null, 3, 6]], output: false }] },

    { title: "Search in a BST", slug: "search-in-a-bst", difficulty: "Easy", category: "Binary Search Tree", order: 78, videoId: "", description: "<p>Given the root of a BST and a value, return the subtree rooted at the node with that value.</p>", starterCodes: { javascript: "function searchBST(root, val) {\n  // Write your code here\n};", python: "def searchBST(root, val):\n    pass", java: "class Solution {\n    public TreeNode searchBST(TreeNode root, int val) {\n    }\n}" }, handlerFunction: "searchBST", constraints: ["1 <= nodes <= 5000"], examples: [{ id: 1, inputText: "root = [4,2,7,1,3], val = 2", outputText: "[2,1,3]", explanation: "Subtree rooted at 2." }], testCases: [{ input: [[4, 2, 7, 1, 3], 2], output: [2, 1, 3] }] },

    { title: "Kth Smallest Element in BST", slug: "kth-smallest-element-in-bst", difficulty: "Medium", category: "Binary Search Tree", order: 79, videoId: "", description: "<p>Given the root of a BST and k, return the kth smallest value.</p>", starterCodes: { javascript: "function kthSmallest(root, k) {\n  // Write your code here\n};", python: "def kthSmallest(root, k):\n    pass", java: "class Solution {\n    public int kthSmallest(TreeNode root, int k) {\n    }\n}" }, handlerFunction: "kthSmallest", constraints: ["1 <= k <= nodes <= 10^4"], examples: [{ id: 1, inputText: "root = [3,1,4,null,2], k = 1", outputText: "1", explanation: "1st smallest is 1." }], testCases: [{ input: [[3, 1, 4, null, 2], 1], output: 1 }] },

    { title: "Lowest Common Ancestor of BST", slug: "lowest-common-ancestor-of-bst", difficulty: "Easy", category: "Binary Search Tree", order: 80, videoId: "", description: "<p>Given a BST and two nodes p and q, find their lowest common ancestor.</p>", starterCodes: { javascript: "function lowestCommonAncestor(root, p, q) {\n  // Write your code here\n};", python: "def lowestCommonAncestor(root, p, q):\n    pass", java: "class Solution {\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n    }\n}" }, handlerFunction: "lcaBST", constraints: ["2 <= nodes <= 10^5"], examples: [{ id: 1, inputText: "root = [6,2,8,0,4,7,9], p = 2, q = 8", outputText: "6", explanation: "6 is LCA of 2 and 8." }], testCases: [{ input: [[6, 2, 8, 0, 4, 7, 9], 2, 8], output: 6 }] },

    // ─── Heap ─────────────────────────────────────────────────────────────────

    { title: "Kth Largest Element in an Array", slug: "kth-largest-element-in-an-array", difficulty: "Medium", category: "Heap", order: 81, videoId: "", description: "<p>Given an integer array and an integer k, return the kth largest element.</p>", starterCodes: { javascript: "function findKthLargest(nums, k) {\n  // Write your code here\n};", python: "def findKthLargest(nums, k):\n    pass", java: "class Solution {\n    public int findKthLargest(int[] nums, int k) {\n    }\n}" }, handlerFunction: "findKthLargest", constraints: ["1 <= k <= nums.length <= 10^5"], examples: [{ id: 1, inputText: "nums = [3,2,1,5,6,4], k = 2", outputText: "5", explanation: "2nd largest is 5." }], testCases: [{ input: [[3, 2, 1, 5, 6, 4], 2], output: 5 }] },

    { title: "Last Stone Weight", slug: "last-stone-weight", difficulty: "Easy", category: "Heap", order: 82, videoId: "", description: "<p>Each turn smash the two heaviest stones. Return the weight of the last stone or 0 if none remain.</p>", starterCodes: { javascript: "function lastStoneWeight(stones) {\n  // Write your code here\n};", python: "def lastStoneWeight(stones):\n    pass", java: "class Solution {\n    public int lastStoneWeight(int[] stones) {\n    }\n}" }, handlerFunction: "lastStoneWeight", constraints: ["1 <= stones.length <= 30"], examples: [{ id: 1, inputText: "stones = [2,7,4,1,8,1]", outputText: "1", explanation: "Final remaining stone is 1." }], testCases: [{ input: [[2, 7, 4, 1, 8, 1]], output: 1 }] },

    { title: "Top K Frequent Elements", slug: "top-k-frequent-elements", difficulty: "Medium", category: "Heap", order: 83, videoId: "", description: "<p>Given an integer array and k, return the k most frequent elements.</p>", starterCodes: { javascript: "function topKFrequent(nums, k) {\n  // Write your code here\n};", python: "def topKFrequent(nums, k):\n    pass", java: "class Solution {\n    public int[] topKFrequent(int[] nums, int k) {\n    }\n}" }, handlerFunction: "topKFrequent", constraints: ["1 <= nums.length <= 10^5"], examples: [{ id: 1, inputText: "nums = [1,1,1,2,2,3], k = 2", outputText: "[1,2]", explanation: "1 appears 3 times, 2 appears 2 times." }], testCases: [{ input: [[1, 1, 1, 2, 2, 3], 2], output: [1, 2] }] },

    // ─── Backtracking ─────────────────────────────────────────────────────────

    { title: "Subsets", slug: "subsets", difficulty: "Medium", category: "Backtracking", order: 84, videoId: "", description: "<p>Given an integer array of unique elements, return all possible subsets (the power set).</p>", starterCodes: { javascript: "function subsets(nums) {\n  // Write your code here\n};", python: "def subsets(nums):\n    pass", java: "class Solution {\n    public List<List<Integer>> subsets(int[] nums) {\n    }\n}" }, handlerFunction: "subsets", constraints: ["1 <= nums.length <= 10"], examples: [{ id: 1, inputText: "nums = [1,2,3]", outputText: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]", explanation: "All possible subsets." }], testCases: [{ input: [[1, 2, 3]], output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]] }] },

    { title: "Combinations", slug: "combinations", difficulty: "Medium", category: "Backtracking", order: 85, videoId: "", description: "<p>Given two integers n and k, return all possible combinations of k numbers from the range [1, n].</p>", starterCodes: { javascript: "function combine(n, k) {\n  // Write your code here\n};", python: "def combine(n, k):\n    pass", java: "class Solution {\n    public List<List<Integer>> combine(int n, int k) {\n    }\n}" }, handlerFunction: "combine", constraints: ["1 <= n <= 20", "1 <= k <= n"], examples: [{ id: 1, inputText: "n = 4, k = 2", outputText: "[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]", explanation: "All 2-combinations from [1..4]." }], testCases: [{ input: [4, 2], output: [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]] }] },

    { title: "Permutations", slug: "permutations", difficulty: "Medium", category: "Backtracking", order: 86, videoId: "", description: "<p>Given an array of distinct integers, return all the possible permutations.</p>", starterCodes: { javascript: "function permute(nums) {\n  // Write your code here\n};", python: "def permute(nums):\n    pass", java: "class Solution {\n    public List<List<Integer>> permute(int[] nums) {\n    }\n}" }, handlerFunction: "permute", constraints: ["1 <= nums.length <= 6"], examples: [{ id: 1, inputText: "nums = [1,2,3]", outputText: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]", explanation: "All permutations." }], testCases: [{ input: [[1, 2, 3]], output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]] }] },

    { title: "Combination Sum", slug: "combination-sum", difficulty: "Medium", category: "Backtracking", order: 87, videoId: "", description: "<p>Given an array of distinct integers and a target, return all combinations that sum to target (can reuse numbers).</p>", starterCodes: { javascript: "function combinationSum(candidates, target) {\n  // Write your code here\n};", python: "def combinationSum(candidates, target):\n    pass", java: "class Solution {\n    public List<List<Integer>> combinationSum(int[] candidates, int target) {\n    }\n}" }, handlerFunction: "combinationSum", constraints: ["1 <= candidates.length <= 30"], examples: [{ id: 1, inputText: "candidates = [2,3,6,7], target = 7", outputText: "[[2,2,3],[7]]", explanation: "Two combinations sum to 7." }], testCases: [{ input: [[2, 3, 6, 7], 7], output: [[2, 2, 3], [7]] }] },

    { title: "Word Search", slug: "word-search", difficulty: "Medium", category: "Backtracking", order: 88, videoId: "", description: "<p>Given an m x n grid of characters and a word, return true if the word exists in the grid (adjacent cells, no reuse).</p>", starterCodes: { javascript: "function exist(board, word) {\n  // Write your code here\n};", python: "def exist(board, word):\n    pass", java: "class Solution {\n    public boolean exist(char[][] board, String word) {\n    }\n}" }, handlerFunction: "exist", constraints: ["1 <= board.length, board[i].length <= 6"], examples: [{ id: 1, inputText: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', outputText: "true", explanation: "ABCCED exists in the board." }], testCases: [{ input: [[["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"], output: true }] },

    // ─── Greedy ───────────────────────────────────────────────────────────────

    { title: "Assign Cookies", slug: "assign-cookies", difficulty: "Easy", category: "Greedy", order: 89, videoId: "", description: "<p>Assign cookies to children. Each child has a greed factor. A cookie satisfies a child if its size >= greed factor. Maximize satisfied children.</p>", starterCodes: { javascript: "function findContentChildren(g, s) {\n  // Write your code here\n};", python: "def findContentChildren(g, s):\n    pass", java: "class Solution {\n    public int findContentChildren(int[] g, int[] s) {\n    }\n}" }, handlerFunction: "findContentChildren", constraints: ["1 <= g.length, s.length <= 3 * 10^4"], examples: [{ id: 1, inputText: "g = [1,2,3], s = [1,1]", outputText: "1", explanation: "Only 1 child can be satisfied." }], testCases: [{ input: [[1, 2, 3], [1, 1]], output: 1 }, { input: [[1, 2], [1, 2, 3]], output: 2 }] },

    { title: "Lemonade Change", slug: "lemonade-change", difficulty: "Easy", category: "Greedy", order: 90, videoId: "", description: "<p>At a lemonade stand each drink costs $5. Customers pay $5, $10, or $20. Can you provide correct change to every customer?</p>", starterCodes: { javascript: "function lemonadeChange(bills) {\n  // Write your code here\n};", python: "def lemonadeChange(bills):\n    pass", java: "class Solution {\n    public boolean lemonadeChange(int[] bills) {\n    }\n}" }, handlerFunction: "lemonadeChange", constraints: ["1 <= bills.length <= 10^5"], examples: [{ id: 1, inputText: "bills = [5,5,5,10,20]", outputText: "true", explanation: "Sufficient change for all." }], testCases: [{ input: [[5, 5, 5, 10, 20]], output: true }, { input: [[5, 5, 10, 10, 20]], output: false }] },

    { title: "Merge Intervals", slug: "merge-intervals", difficulty: "Medium", category: "Greedy", order: 91, videoId: "", description: "<p>Given an array of intervals, merge all overlapping intervals and return the resulting array.</p>", starterCodes: { javascript: "function merge(intervals) {\n  // Write your code here\n};", python: "def merge(intervals):\n    pass", java: "class Solution {\n    public int[][] merge(int[][] intervals) {\n    }\n}" }, handlerFunction: "mergeIntervals", constraints: ["1 <= intervals.length <= 10^4"], examples: [{ id: 1, inputText: "intervals = [[1,3],[2,6],[8,10],[15,18]]", outputText: "[[1,6],[8,10],[15,18]]", explanation: "[1,3] and [2,6] merge to [1,6]." }], testCases: [{ input: [[[1, 3], [2, 6], [8, 10], [15, 18]]], output: [[1, 6], [8, 10], [15, 18]] }] },

    { title: "Gas Station", slug: "gas-station", difficulty: "Medium", category: "Greedy", order: 92, videoId: "", description: "<p>There are n gas stations in a circle. Can you travel around the circuit once? Return the starting station index or -1.</p>", starterCodes: { javascript: "function canCompleteCircuit(gas, cost) {\n  // Write your code here\n};", python: "def canCompleteCircuit(gas, cost):\n    pass", java: "class Solution {\n    public int canCompleteCircuit(int[] gas, int[] cost) {\n    }\n}" }, handlerFunction: "canCompleteCircuit", constraints: ["1 <= gas.length <= 10^5"], examples: [{ id: 1, inputText: "gas = [1,2,3,4,5], cost = [3,4,5,1,2]", outputText: "3", explanation: "Start at index 3." }], testCases: [{ input: [[1, 2, 3, 4, 5], [3, 4, 5, 1, 2]], output: 3 }] },

    // ─── Dynamic Programming ──────────────────────────────────────────────────

    { title: "Climbing Stairs", slug: "climbing-stairs", difficulty: "Easy", category: "Dynamic Programming", order: 93, videoId: "", description: "<p>You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps. In how many distinct ways can you climb to the top?</p>", starterCodes: { javascript: "function climbStairs(n) {\n  // Write your code here\n};", python: "def climbStairs(n):\n    pass", java: "class Solution {\n    public int climbStairs(int n) {\n    }\n}" }, handlerFunction: "climbStairs", constraints: ["1 <= n <= 45"], examples: [{ id: 1, inputText: "n = 3", outputText: "3", explanation: "1+1+1, 1+2, 2+1 = 3 ways." }], testCases: [{ input: [2], output: 2 }, { input: [3], output: 3 }] },

    { title: "House Robber", slug: "house-robber", difficulty: "Medium", category: "Dynamic Programming", order: 94, videoId: "", description: "<p>Rob houses without robbing two adjacent ones. Return the maximum amount you can rob.</p>", starterCodes: { javascript: "function rob(nums) {\n  // Write your code here\n};", python: "def rob(nums):\n    pass", java: "class Solution {\n    public int rob(int[] nums) {\n    }\n}" }, handlerFunction: "rob", constraints: ["1 <= nums.length <= 100"], examples: [{ id: 1, inputText: "nums = [2,7,9,3,1]", outputText: "12", explanation: "Rob house 1, 3, 5: 2+9+1=12." }], testCases: [{ input: [[2, 7, 9, 3, 1]], output: 12 }, { input: [[1, 2, 3, 1]], output: 4 }] },

    { title: "Coin Change", slug: "coin-change", difficulty: "Medium", category: "Dynamic Programming", order: 95, videoId: "", description: "<p>Given an array of coin denominations and amount, return the fewest coins needed to make up that amount, or -1 if not possible.</p>", starterCodes: { javascript: "function coinChange(coins, amount) {\n  // Write your code here\n};", python: "def coinChange(coins, amount):\n    pass", java: "class Solution {\n    public int coinChange(int[] coins, int amount) {\n    }\n}" }, handlerFunction: "coinChange", constraints: ["1 <= coins.length <= 12", "0 <= amount <= 10^4"], examples: [{ id: 1, inputText: "coins = [1,5,6,9], amount = 11", outputText: "2", explanation: "5+6=11, 2 coins." }], testCases: [{ input: [[1, 5, 6, 9], 11], output: 2 }, { input: [[2], 3], output: -1 }] },

    { title: "Maximum Subarray", slug: "maximum-subarray", difficulty: "Easy", category: "Dynamic Programming", order: 96, videoId: "", description: "<p>Given an integer array, find the contiguous subarray with the largest sum and return its sum.</p>", starterCodes: { javascript: "function maxSubArray(nums) {\n  // Write your code here\n};", python: "def maxSubArray(nums):\n    pass", java: "class Solution {\n    public int maxSubArray(int[] nums) {\n    }\n}" }, handlerFunction: "maxSubArray", constraints: ["1 <= nums.length <= 10^5"], examples: [{ id: 1, inputText: "nums = [-2,1,-3,4,-1,2,1,-5,4]", outputText: "6", explanation: "[4,-1,2,1] has largest sum = 6." }], testCases: [{ input: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]], output: 6 }] },

    { title: "Longest Increasing Subsequence", slug: "longest-increasing-subsequence", difficulty: "Medium", category: "Dynamic Programming", order: 97, videoId: "", description: "<p>Given an integer array, return the length of the longest strictly increasing subsequence.</p>", starterCodes: { javascript: "function lengthOfLIS(nums) {\n  // Write your code here\n};", python: "def lengthOfLIS(nums):\n    pass", java: "class Solution {\n    public int lengthOfLIS(int[] nums) {\n    }\n}" }, handlerFunction: "lengthOfLIS", constraints: ["1 <= nums.length <= 2500"], examples: [{ id: 1, inputText: "nums = [10,9,2,5,3,7,101,18]", outputText: "4", explanation: "[2,3,7,101] is the LIS." }], testCases: [{ input: [[10, 9, 2, 5, 3, 7, 101, 18]], output: 4 }] },

    { title: "Word Break", slug: "word-break", difficulty: "Medium", category: "Dynamic Programming", order: 98, videoId: "", description: "<p>Given a string s and a dictionary wordDict, return true if s can be segmented into words from the dictionary.</p>", starterCodes: { javascript: "function wordBreak(s, wordDict) {\n  // Write your code here\n};", python: "def wordBreak(s, wordDict):\n    pass", java: "class Solution {\n    public boolean wordBreak(String s, List<String> wordDict) {\n    }\n}" }, handlerFunction: "wordBreak", constraints: ["1 <= s.length <= 300"], examples: [{ id: 1, inputText: 's = "leetcode", wordDict = ["leet","code"]', outputText: "true", explanation: "'leet' + 'code' = 'leetcode'." }], testCases: [{ input: ["leetcode", ["leet", "code"]], output: true }, { input: ["catsandog", ["cats", "dog", "sand", "and", "cat"]], output: false }] },

    { title: "Unique Paths", slug: "unique-paths", difficulty: "Medium", category: "Dynamic Programming", order: 99, videoId: "", description: "<p>A robot is on an m x n grid at the top-left. It can only move right or down. How many unique paths are there to the bottom-right?</p>", starterCodes: { javascript: "function uniquePaths(m, n) {\n  // Write your code here\n};", python: "def uniquePaths(m, n):\n    pass", java: "class Solution {\n    public int uniquePaths(int m, int n) {\n    }\n}" }, handlerFunction: "uniquePaths", constraints: ["1 <= m, n <= 100"], examples: [{ id: 1, inputText: "m = 3, n = 7", outputText: "28", explanation: "28 unique paths." }], testCases: [{ input: [3, 7], output: 28 }, { input: [3, 2], output: 3 }] },

    // ─── Graphs ───────────────────────────────────────────────────────────────

    { title: "Find if Path Exists in Graph", slug: "find-if-path-exists-in-graph", difficulty: "Easy", category: "Graphs", order: 100, videoId: "", description: "<p>Given n nodes (0 to n-1) and a list of bi-directional edges, determine if a valid path exists from source to destination.</p>", starterCodes: { javascript: "function validPath(n, edges, source, destination) {\n  // Write your code here\n};", python: "def validPath(n, edges, source, destination):\n    pass", java: "class Solution {\n    public boolean validPath(int n, int[][] edges, int source, int destination) {\n    }\n}" }, handlerFunction: "validPath", constraints: ["1 <= n <= 2 * 10^5"], examples: [{ id: 1, inputText: "n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2", outputText: "true", explanation: "Path 0->1->2 exists." }], testCases: [{ input: [3, [[0, 1], [1, 2], [2, 0]], 0, 2], output: true }] },

    { title: "Number of Islands", slug: "number-of-islands", difficulty: "Medium", category: "Graphs", order: 101, videoId: "", description: "<p>Given an m x n 2D binary grid (1=land, 0=water), return the number of islands.</p>", starterCodes: { javascript: "function numIslands(grid) {\n  // Write your code here\n};", python: "def numIslands(grid):\n    pass", java: "class Solution {\n    public int numIslands(char[][] grid) {\n    }\n}" }, handlerFunction: "numIslands", constraints: ["1 <= grid.length, grid[i].length <= 300"], examples: [{ id: 1, inputText: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]', outputText: "3", explanation: "3 separate islands." }], testCases: [{ input: [[["1", "1", "0"], ["0", "1", "0"], ["0", "0", "1"]]], output: 2 }] },

    { title: "Clone Graph", slug: "clone-graph", difficulty: "Medium", category: "Graphs", order: 102, videoId: "", description: "<p>Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.</p>", starterCodes: { javascript: "function cloneGraph(node) {\n  // Write your code here\n};", python: "def cloneGraph(node):\n    pass", java: "class Solution {\n    public Node cloneGraph(Node node) {\n    }\n}" }, handlerFunction: "cloneGraph", constraints: ["0 <= nodes <= 100"], examples: [{ id: 1, inputText: "adjList = [[2,4],[1,3],[2,4],[1,3]]", outputText: "[[2,4],[1,3],[2,4],[1,3]]", explanation: "Graph cloned." }], testCases: [{ input: [[[2, 4], [1, 3], [2, 4], [1, 3]]], output: [[2, 4], [1, 3], [2, 4], [1, 3]] }] },

    { title: "All Paths From Source to Target", slug: "all-paths-from-source-to-target", difficulty: "Medium", category: "Graphs", order: 103, videoId: "", description: "<p>Given a directed acyclic graph, find all paths from node 0 to node n-1.</p>", starterCodes: { javascript: "function allPathsSourceTarget(graph) {\n  // Write your code here\n};", python: "def allPathsSourceTarget(graph):\n    pass", java: "class Solution {\n    public List<List<Integer>> allPathsSourceTarget(int[][] graph) {\n    }\n}" }, handlerFunction: "allPathsSourceTarget", constraints: ["2 <= graph.length <= 15"], examples: [{ id: 1, inputText: "graph = [[1,2],[3],[3],[]]", outputText: "[[0,1,3],[0,2,3]]", explanation: "Two paths from 0 to 3." }], testCases: [{ input: [[[1, 2], [3], [3], []]], output: [[0, 1, 3], [0, 2, 3]] }] },

    { title: "Min Cost to Connect All Points", slug: "min-cost-to-connect-all-points", difficulty: "Medium", category: "Graphs", order: 104, videoId: "", description: "<p>Given points on a 2D plane, return the minimum cost to connect all points (using Manhattan distance).</p>", starterCodes: { javascript: "function minCostConnectPoints(points) {\n  // Write your code here\n};", python: "def minCostConnectPoints(points):\n    pass", java: "class Solution {\n    public int minCostConnectPoints(int[][] points) {\n    }\n}" }, handlerFunction: "minCostConnectPoints", constraints: ["1 <= points.length <= 1000"], examples: [{ id: 1, inputText: "points = [[0,0],[2,2],[3,10],[5,2],[7,0]]", outputText: "20", explanation: "Minimum spanning tree cost is 20." }], testCases: [{ input: [[[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]]], output: 20 }] },

    // ─── BST (missing) ────────────────────────────────────────────────────────

    { title: "Insert into a BST", slug: "insert-into-a-bst", difficulty: "Medium", category: "Binary Search Tree", order: 105, videoId: "", description: "<p>Given the root of a BST and a value, insert the value into the BST and return the root of the updated BST.</p>", starterCodes: { javascript: "function insertIntoBST(root, val) {\n  // Write your code here\n};", python: "def insertIntoBST(root, val):\n    pass", java: "class Solution {\n    public TreeNode insertIntoBST(TreeNode root, int val) {\n    }\n}" }, handlerFunction: "insertIntoBST", constraints: ["0 <= nodes <= 10^4", "val is not in the BST"], examples: [{ id: 1, inputText: "root = [4,2,7,1,3], val = 5", outputText: "[4,2,7,1,3,5]", explanation: "5 inserted as left child of 7." }], testCases: [{ input: [[4, 2, 7, 1, 3], 5], output: [4, 2, 7, 1, 3, 5] }] },

    // ─── Heap (missing) ───────────────────────────────────────────────────────

    { title: "Kth Largest Element in a Stream", slug: "kth-largest-element-in-a-stream", difficulty: "Medium", category: "Heap", order: 106, videoId: "", description: "<p>Design a class to find the k-th largest element in a stream. Note it is the kth largest element in sorted order, not the kth distinct element.</p>", starterCodes: { javascript: "class KthLargest {\n  constructor(k, nums) {}\n  add(val) {}\n}", python: "class KthLargest:\n    def __init__(self, k, nums): pass\n    def add(self, val): pass", java: "class KthLargest {\n    public KthLargest(int k, int[] nums) {}\n    public int add(int val) { return 0; }\n}" }, handlerFunction: "kthLargestStream", constraints: ["1 <= k <= 10^4", "0 <= nums.length <= 10^4"], examples: [{ id: 1, inputText: "k=3, nums=[4,5,8,2], add(3)=4, add(5)=5, add(10)=8", outputText: "4,5,8", explanation: "Kth largest returned after each insertion." }], testCases: [{ input: ["kthLargestStream"], output: null }] },

    { title: "Kth Smallest Element in a Sorted Matrix", slug: "kth-smallest-element-in-sorted-matrix", difficulty: "Medium", category: "Heap", order: 107, videoId: "", description: "<p>Given an n x n matrix where each row and column are sorted in ascending order, return the kth smallest element in the matrix.</p>", starterCodes: { javascript: "function kthSmallest(matrix, k) {\n  // Write your code here\n};", python: "def kthSmallest(matrix, k):\n    pass", java: "class Solution {\n    public int kthSmallest(int[][] matrix, int k) {\n    }\n}" }, handlerFunction: "kthSmallestMatrix", constraints: ["n == matrix.length == matrix[i].length", "1 <= n <= 300"], examples: [{ id: 1, inputText: "matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8", outputText: "13", explanation: "8th smallest element is 13." }], testCases: [{ input: [[[1, 5, 9], [10, 11, 13], [12, 13, 15]], 8], output: 13 }] },

    // ─── Backtracking (missing) ───────────────────────────────────────────────

    { title: "Subsets II", slug: "subsets-ii", difficulty: "Medium", category: "Backtracking", order: 108, videoId: "", description: "<p>Given an integer array that may contain duplicates, return all possible subsets. The solution set must not contain duplicate subsets.</p>", starterCodes: { javascript: "function subsetsWithDup(nums) {\n  // Write your code here\n};", python: "def subsetsWithDup(nums):\n    pass", java: "class Solution {\n    public List<List<Integer>> subsetsWithDup(int[] nums) {\n    }\n}" }, handlerFunction: "subsetsWithDup", constraints: ["1 <= nums.length <= 10"], examples: [{ id: 1, inputText: "nums = [1,2,2]", outputText: "[[],[1],[1,2],[1,2,2],[2],[2,2]]", explanation: "Unique subsets only." }], testCases: [{ input: [[1, 2, 2]], output: [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]] }] },

    { title: "Combination Sum II", slug: "combination-sum-ii", difficulty: "Medium", category: "Backtracking", order: 109, videoId: "", description: "<p>Given a collection of candidate numbers and a target, find all unique combinations where the candidate numbers sum to target. Each number may only be used once.</p>", starterCodes: { javascript: "function combinationSum2(candidates, target) {\n  // Write your code here\n};", python: "def combinationSum2(candidates, target):\n    pass", java: "class Solution {\n    public List<List<Integer>> combinationSum2(int[] candidates, int target) {\n    }\n}" }, handlerFunction: "combinationSum2", constraints: ["1 <= candidates.length <= 100"], examples: [{ id: 1, inputText: "candidates = [10,1,2,7,6,1,5], target = 8", outputText: "[[1,1,6],[1,2,5],[1,7],[2,6]]", explanation: "Unique combos using each number once." }], testCases: [{ input: [[10, 1, 2, 7, 6, 1, 5], 8], output: [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]] }] },

    { title: "Combination Sum III", slug: "combination-sum-iii", difficulty: "Medium", category: "Backtracking", order: 110, videoId: "", description: "<p>Find all valid combinations of k numbers that sum up to n, using only numbers 1-9, with each number used at most once.</p>", starterCodes: { javascript: "function combinationSum3(k, n) {\n  // Write your code here\n};", python: "def combinationSum3(k, n):\n    pass", java: "class Solution {\n    public List<List<Integer>> combinationSum3(int k, int n) {\n    }\n}" }, handlerFunction: "combinationSum3", constraints: ["2 <= k <= 9", "1 <= n <= 60"], examples: [{ id: 1, inputText: "k = 3, n = 7", outputText: "[[1,2,4]]", explanation: "Only 1+2+4=7 is valid." }], testCases: [{ input: [3, 7], output: [[1, 2, 4]] }, { input: [3, 9], output: [[1, 2, 6], [1, 3, 5], [2, 3, 4]] }] },

    { title: "Letter Combinations of a Phone Number", slug: "letter-combinations-of-a-phone-number", difficulty: "Medium", category: "Backtracking", order: 111, videoId: "", description: "<p>Given a string containing digits from 2-9, return all possible letter combinations that the number could represent (telephone keypad mapping).</p>", starterCodes: { javascript: "function letterCombinations(digits) {\n  // Write your code here\n};", python: "def letterCombinations(digits):\n    pass", java: "class Solution {\n    public List<String> letterCombinations(String digits) {\n    }\n}" }, handlerFunction: "letterCombinations", constraints: ["0 <= digits.length <= 4", "digits[i] is a digit in [2,9]"], examples: [{ id: 1, inputText: 'digits = "23"', outputText: '["ad","ae","af","bd","be","bf","cd","ce","cf"]', explanation: "2→abc, 3→def, all combos." }], testCases: [{ input: ["23"], output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"] }, { input: [""], output: [] }] },

    { title: "Permutations II", slug: "permutations-ii", difficulty: "Medium", category: "Backtracking", order: 112, videoId: "", description: "<p>Given a collection of numbers that might contain duplicates, return all possible unique permutations.</p>", starterCodes: { javascript: "function permuteUnique(nums) {\n  // Write your code here\n};", python: "def permuteUnique(nums):\n    pass", java: "class Solution {\n    public List<List<Integer>> permuteUnique(int[] nums) {\n    }\n}" }, handlerFunction: "permuteUnique", constraints: ["1 <= nums.length <= 8"], examples: [{ id: 1, inputText: "nums = [1,1,2]", outputText: "[[1,1,2],[1,2,1],[2,1,1]]", explanation: "3 unique permutations." }], testCases: [{ input: [[1, 1, 2]], output: [[1, 1, 2], [1, 2, 1], [2, 1, 1]] }] },

    { title: "Palindrome Partitioning", slug: "palindrome-partitioning", difficulty: "Medium", category: "Backtracking", order: 113, videoId: "", description: "<p>Given a string s, partition it such that every substring of the partition is a palindrome. Return all possible palindrome partitioning.</p>", starterCodes: { javascript: "function partition(s) {\n  // Write your code here\n};", python: "def partition(s):\n    pass", java: "class Solution {\n    public List<List<String>> partition(String s) {\n    }\n}" }, handlerFunction: "partition", constraints: ["1 <= s.length <= 16"], examples: [{ id: 1, inputText: 's = "aab"', outputText: '[["a","a","b"],["aa","b"]]', explanation: "Two valid palindrome partitions." }], testCases: [{ input: ["aab"], output: [["a", "a", "b"], ["aa", "b"]] }] },

    { title: "N Queens", slug: "n-queens", difficulty: "Hard", category: "Backtracking", order: 114, videoId: "", description: "<p>The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other. Return all distinct solutions.</p>", starterCodes: { javascript: "function solveNQueens(n) {\n  // Write your code here\n};", python: "def solveNQueens(n):\n    pass", java: "class Solution {\n    public List<List<String>> solveNQueens(int n) {\n    }\n}" }, handlerFunction: "solveNQueens", constraints: ["1 <= n <= 9"], examples: [{ id: 1, inputText: "n = 4", outputText: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]', explanation: "Two solutions for 4-queens." }], testCases: [{ input: [1], output: [["Q"]] }] },

    // ─── Greedy (missing) ─────────────────────────────────────────────────────

    { title: "Two City Scheduling", slug: "two-city-scheduling", difficulty: "Medium", category: "Greedy", order: 115, videoId: "", description: "<p>A company is planning to interview 2n people. Given the array costs where costs[i] = [aCost, bCost] is the cost to send person i to city A or B, return the minimum cost to send exactly n people to each city.</p>", starterCodes: { javascript: "function twoCitySchedCost(costs) {\n  // Write your code here\n};", python: "def twoCitySchedCost(costs):\n    pass", java: "class Solution {\n    public int twoCitySchedCost(int[][] costs) {\n    }\n}" }, handlerFunction: "twoCitySchedCost", constraints: ["2 <= n <= 100"], examples: [{ id: 1, inputText: "costs = [[10,20],[30,200],[400,50],[30,20]]", outputText: "110", explanation: "Send person 0,1 to A and person 2,3 to B: 10+30+50+20=110." }], testCases: [{ input: [[[10, 20], [30, 200], [400, 50], [30, 20]]], output: 110 }] },

    { title: "Best Time to Buy and Sell Stock II", slug: "best-time-to-buy-and-sell-stock-ii", difficulty: "Medium", category: "Greedy", order: 116, videoId: "", description: "<p>Given an array prices of stock prices, you may buy and sell on the same day. Find the maximum profit using as many transactions as you like.</p>", starterCodes: { javascript: "function maxProfit(prices) {\n  // Write your code here\n};", python: "def maxProfit(prices):\n    pass", java: "class Solution {\n    public int maxProfit(int[] prices) {\n    }\n}" }, handlerFunction: "maxProfit2", constraints: ["1 <= prices.length <= 3 * 10^4"], examples: [{ id: 1, inputText: "prices = [7,1,5,3,6,4]", outputText: "7", explanation: "Buy at 1, sell at 5 (+4). Buy at 3, sell at 6 (+3). Total = 7." }], testCases: [{ input: [[7, 1, 5, 3, 6, 4]], output: 7 }, { input: [[1, 2, 3, 4, 5]], output: 4 }] },

    { title: "Insert Interval", slug: "insert-interval", difficulty: "Medium", category: "Greedy", order: 117, videoId: "", description: "<p>Given a sorted list of non-overlapping intervals and a new interval, insert the new interval into the list (merging if necessary) and return the result.</p>", starterCodes: { javascript: "function insert(intervals, newInterval) {\n  // Write your code here\n};", python: "def insert(intervals, newInterval):\n    pass", java: "class Solution {\n    public int[][] insert(int[][] intervals, int[] newInterval) {\n    }\n}" }, handlerFunction: "insertInterval", constraints: ["0 <= intervals.length <= 10^4"], examples: [{ id: 1, inputText: "intervals = [[1,3],[6,9]], newInterval = [2,5]", outputText: "[[1,5],[6,9]]", explanation: "[2,5] merges with [1,3]." }], testCases: [{ input: [[[1, 3], [6, 9]], [2, 5]], output: [[1, 5], [6, 9]] }] },

    { title: "Partition Labels", slug: "partition-labels", difficulty: "Medium", category: "Greedy", order: 118, videoId: "", description: "<p>Partition string s into as many parts as possible so that each letter appears in at most one part. Return a list of integers representing the size of these parts.</p>", starterCodes: { javascript: "function partitionLabels(s) {\n  // Write your code here\n};", python: "def partitionLabels(s):\n    pass", java: "class Solution {\n    public List<Integer> partitionLabels(String s) {\n    }\n}" }, handlerFunction: "partitionLabels", constraints: ["1 <= s.length <= 500"], examples: [{ id: 1, inputText: 's = "ababcbacadefegdehijhklij"', outputText: "[9,7,8]", explanation: "Three partitions of sizes 9, 7, 8." }], testCases: [{ input: ["ababcbacadefegdehijhklij"], output: [9, 7, 8] }] },

    { title: "Non-Overlapping Intervals", slug: "non-overlapping-intervals", difficulty: "Medium", category: "Greedy", order: 119, videoId: "", description: "<p>Given an array of intervals, return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.</p>", starterCodes: { javascript: "function eraseOverlapIntervals(intervals) {\n  // Write your code here\n};", python: "def eraseOverlapIntervals(intervals):\n    pass", java: "class Solution {\n    public int eraseOverlapIntervals(int[][] intervals) {\n    }\n}" }, handlerFunction: "eraseOverlapIntervals", constraints: ["1 <= intervals.length <= 10^5"], examples: [{ id: 1, inputText: "intervals = [[1,2],[2,3],[3,4],[1,3]]", outputText: "1", explanation: "Remove [1,3] to make the rest non-overlapping." }], testCases: [{ input: [[[1, 2], [2, 3], [3, 4], [1, 3]]], output: 1 }] },

    { title: "Task Scheduler", slug: "task-scheduler", difficulty: "Medium", category: "Greedy", order: 120, videoId: "", description: "<p>Given a list of tasks and a cooldown n, find the minimum number of intervals the CPU will take to finish all tasks.</p>", starterCodes: { javascript: "function leastInterval(tasks, n) {\n  // Write your code here\n};", python: "def leastInterval(tasks, n):\n    pass", java: "class Solution {\n    public int leastInterval(char[] tasks, int n) {\n    }\n}" }, handlerFunction: "leastInterval", constraints: ["1 <= tasks.length <= 10^4", "tasks[i] is uppercase English letter"], examples: [{ id: 1, inputText: 'tasks = ["A","A","A","B","B","B"], n = 2', outputText: "8", explanation: "A → B → idle → A → B → idle → A → B." }], testCases: [{ input: [["A", "A", "A", "B", "B", "B"], 2], output: 8 }] },

    { title: "Car Pooling", slug: "car-pooling", difficulty: "Medium", category: "Greedy", order: 121, videoId: "", description: "<p>Given trips[i] = [numPassengers, from, to] and capacity of the car, return true if it's possible to pick up and drop off all passengers with given capacity.</p>", starterCodes: { javascript: "function carPooling(trips, capacity) {\n  // Write your code here\n};", python: "def carPooling(trips, capacity):\n    pass", java: "class Solution {\n    public boolean carPooling(int[][] trips, int capacity) {\n    }\n}" }, handlerFunction: "carPooling", constraints: ["1 <= trips.length <= 1000", "1 <= capacity <= 10^5"], examples: [{ id: 1, inputText: "trips = [[2,1,5],[3,3,7]], capacity = 4", outputText: "false", explanation: "At stop 3, 2+3=5 passengers exceed capacity 4." }], testCases: [{ input: [[[2, 1, 5], [3, 3, 7]], 4], output: false }, { input: [[[2, 1, 5], [3, 3, 7]], 5], output: true }] },

    { title: "Candy", slug: "candy", difficulty: "Hard", category: "Greedy", order: 122, videoId: "", description: "<p>Give each child at least 1 candy such that children with a higher rating than their neighbors get more candies. Return the minimum number of candies needed.</p>", starterCodes: { javascript: "function candy(ratings) {\n  // Write your code here\n};", python: "def candy(ratings):\n    pass", java: "class Solution {\n    public int candy(int[] ratings) {\n    }\n}" }, handlerFunction: "candy", constraints: ["1 <= ratings.length <= 2 * 10^4"], examples: [{ id: 1, inputText: "ratings = [1,0,2]", outputText: "5", explanation: "Give [2,1,2] candies." }], testCases: [{ input: [[1, 0, 2]], output: 5 }, { input: [[1, 2, 2]], output: 4 }] },

    // ─── Dynamic Programming (missing) ────────────────────────────────────────

    { title: "Minimum Cost Climbing Stairs", slug: "minimum-cost-climbing-stairs", difficulty: "Easy", category: "Dynamic Programming", order: 123, videoId: "", description: "<p>Given an array cost where cost[i] is the cost to step on stair i, return the minimum cost to reach the top of the floor. You can start from index 0 or 1.</p>", starterCodes: { javascript: "function minCostClimbingStairs(cost) {\n  // Write your code here\n};", python: "def minCostClimbingStairs(cost):\n    pass", java: "class Solution {\n    public int minCostClimbingStairs(int[] cost) {\n    }\n}" }, handlerFunction: "minCostClimbingStairs", constraints: ["2 <= cost.length <= 1000"], examples: [{ id: 1, inputText: "cost = [10,15,20]", outputText: "15", explanation: "Start at 1, step to top: cost = 15." }], testCases: [{ input: [[10, 15, 20]], output: 15 }, { input: [[1, 100, 1, 1, 1, 100, 1, 1, 100, 1]], output: 6 }] },

    { title: "House Robber II", slug: "house-robber-ii", difficulty: "Medium", category: "Dynamic Programming", order: 124, videoId: "", description: "<p>Houses are arranged in a circle. You cannot rob adjacent houses. Return the maximum amount you can rob tonight.</p>", starterCodes: { javascript: "function rob(nums) {\n  // Write your code here\n};", python: "def rob(nums):\n    pass", java: "class Solution {\n    public int rob(int[] nums) {\n    }\n}" }, handlerFunction: "robII", constraints: ["1 <= nums.length <= 100"], examples: [{ id: 1, inputText: "nums = [2,3,2]", outputText: "3", explanation: "Cannot rob house 1 (2) and house 3 (2) both. Best is 3." }], testCases: [{ input: [[2, 3, 2]], output: 3 }, { input: [[1, 2, 3, 1]], output: 4 }] },

    { title: "Palindromic Substrings", slug: "palindromic-substrings", difficulty: "Medium", category: "Dynamic Programming", order: 125, videoId: "", description: "<p>Given a string s, return the number of palindromic substrings in it.</p>", starterCodes: { javascript: "function countSubstrings(s) {\n  // Write your code here\n};", python: "def countSubstrings(s):\n    pass", java: "class Solution {\n    public int countSubstrings(String s) {\n    }\n}" }, handlerFunction: "countSubstrings", constraints: ["1 <= s.length <= 1000"], examples: [{ id: 1, inputText: 's = "abc"', outputText: "3", explanation: "a, b, c are each palindromes." }], testCases: [{ input: ["abc"], output: 3 }, { input: ["aaa"], output: 6 }] },

    { title: "Longest Palindromic Substring", slug: "longest-palindromic-substring", difficulty: "Medium", category: "Dynamic Programming", order: 126, videoId: "", description: "<p>Given a string s, return the longest palindromic substring.</p>", starterCodes: { javascript: "function longestPalindrome(s) {\n  // Write your code here\n};", python: "def longestPalindrome(s):\n    pass", java: "class Solution {\n    public String longestPalindrome(String s) {\n    }\n}" }, handlerFunction: "longestPalindrome", constraints: ["1 <= s.length <= 1000"], examples: [{ id: 1, inputText: 's = "babad"', outputText: '"bab"', explanation: '"bab" and "aba" are both valid answers.' }], testCases: [{ input: ["babad"], output: "bab" }, { input: ["cbbd"], output: "bb" }] },

    { title: "Decode Ways", slug: "decode-ways", difficulty: "Medium", category: "Dynamic Programming", order: 127, videoId: "", description: "<p>A message containing letters A-Z can be encoded as '1'-'26'. Given a string of digits, return the number of ways to decode it.</p>", starterCodes: { javascript: "function numDecodings(s) {\n  // Write your code here\n};", python: "def numDecodings(s):\n    pass", java: "class Solution {\n    public int numDecodings(String s) {\n    }\n}" }, handlerFunction: "numDecodings", constraints: ["1 <= s.length <= 100", "s contains only digits"], examples: [{ id: 1, inputText: 's = "12"', outputText: "2", explanation: '"12" can be decoded as "AB" (1+2) or "L" (12).' }], testCases: [{ input: ["12"], output: 2 }, { input: ["226"], output: 3 }, { input: ["06"], output: 0 }] },

    { title: "Maximum Product Subarray", slug: "maximum-product-subarray", difficulty: "Medium", category: "Dynamic Programming", order: 128, videoId: "", description: "<p>Given an integer array, find a contiguous non-empty subarray with the largest product and return the product.</p>", starterCodes: { javascript: "function maxProduct(nums) {\n  // Write your code here\n};", python: "def maxProduct(nums):\n    pass", java: "class Solution {\n    public int maxProduct(int[] nums) {\n    }\n}" }, handlerFunction: "maxProduct", constraints: ["1 <= nums.length <= 2 * 10^4"], examples: [{ id: 1, inputText: "nums = [2,3,-2,4]", outputText: "6", explanation: "[2,3] has the largest product = 6." }], testCases: [{ input: [[2, 3, -2, 4]], output: 6 }, { input: [[-2, 0, -1]], output: 0 }] },

    { title: "Partition Equal Subset Sum", slug: "partition-equal-subset-sum", difficulty: "Medium", category: "Dynamic Programming", order: 129, videoId: "", description: "<p>Given a non-empty array, determine whether you can partition it into two subsets with equal sum.</p>", starterCodes: { javascript: "function canPartition(nums) {\n  // Write your code here\n};", python: "def canPartition(nums):\n    pass", java: "class Solution {\n    public boolean canPartition(int[] nums) {\n    }\n}" }, handlerFunction: "canPartition", constraints: ["1 <= nums.length <= 200", "1 <= nums[i] <= 100"], examples: [{ id: 1, inputText: "nums = [1,5,11,5]", outputText: "true", explanation: "[1,5,5] and [11] both sum to 11." }], testCases: [{ input: [[1, 5, 11, 5]], output: true }, { input: [[1, 2, 3, 5]], output: false }] },

    { title: "Coin Change II", slug: "coin-change-ii", difficulty: "Medium", category: "Dynamic Programming", order: 130, videoId: "", description: "<p>Given an array of coin denominations and an amount, return the number of combinations that make up that amount.</p>", starterCodes: { javascript: "function change(amount, coins) {\n  // Write your code here\n};", python: "def change(amount, coins):\n    pass", java: "class Solution {\n    public int change(int amount, int[] coins) {\n    }\n}" }, handlerFunction: "coinChange2", constraints: ["1 <= coins.length <= 300", "0 <= amount <= 5000"], examples: [{ id: 1, inputText: "amount = 5, coins = [1,2,5]", outputText: "4", explanation: "5=5, 5=2+2+1, 5=2+1+1+1, 5=1+1+1+1+1." }], testCases: [{ input: [5, [1, 2, 5]], output: 4 }, { input: [3, [2]], output: 0 }] },

    // ─── Graphs (missing) ─────────────────────────────────────────────────────

    { title: "Reconstruct Itinerary", slug: "reconstruct-itinerary", difficulty: "Medium", category: "Graphs", order: 131, videoId: "", description: "<p>Given a list of airline tickets represented as [from, to] pairs, reconstruct the itinerary in order starting from 'JFK'. If multiple valid itineraries exist, return the smallest lexical order.</p>", starterCodes: { javascript: "function findItinerary(tickets) {\n  // Write your code here\n};", python: "def findItinerary(tickets):\n    pass", java: "class Solution {\n    public List<String> findItinerary(List<List<String>> tickets) {\n    }\n}" }, handlerFunction: "findItinerary", constraints: ["1 <= tickets.length <= 300"], examples: [{ id: 1, inputText: 'tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]', outputText: '["JFK","MUC","LHR","SFO","SJC"]', explanation: "Full itinerary from JFK." }], testCases: [{ input: [[["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]], output: ["JFK", "MUC", "LHR", "SFO", "SJC"] }] },

    { title: "Detect Cycle in Undirected Graph", slug: "detect-cycle-in-undirected-graph", difficulty: "Medium", category: "Graphs", order: 132, videoId: "", description: "<p>Given an undirected graph, determine if there is a cycle in the graph using DFS or BFS.</p>", starterCodes: { javascript: "function hasCycle(n, edges) {\n  // Write your code here\n};", python: "def hasCycle(n, edges):\n    pass", java: "class Solution {\n    public boolean hasCycle(int n, int[][] edges) {\n    }\n}" }, handlerFunction: "hasCycleUndirected", constraints: ["1 <= n <= 10^5", "0 <= edges.length <= 10^5"], examples: [{ id: 1, inputText: "n = 4, edges = [[0,1],[1,2],[2,3],[3,0]]", outputText: "true", explanation: "0→1→2→3→0 forms a cycle." }], testCases: [{ input: [4, [[0, 1], [1, 2], [2, 3], [3, 0]]], output: true }, { input: [3, [[0, 1], [1, 2]]], output: false }] },

    { title: "Topological Sort", slug: "topological-sort", difficulty: "Medium", category: "Graphs", order: 133, videoId: "", description: "<p>Given a directed acyclic graph (DAG) with n nodes, return a valid topological ordering of nodes using DFS.</p>", starterCodes: { javascript: "function topoSort(n, edges) {\n  // Write your code here\n};", python: "def topoSort(n, edges):\n    pass", java: "class Solution {\n    public int[] topoSort(int n, int[][] edges) {\n    }\n}" }, handlerFunction: "topoSort", constraints: ["2 <= n <= 10^4"], examples: [{ id: 1, inputText: "n = 4, edges = [[0,1],[0,2],[1,3],[2,3]]", outputText: "[0,2,1,3] or [0,1,2,3]", explanation: "Valid topological order." }], testCases: [{ input: [4, [[0, 1], [0, 2], [1, 3], [2, 3]]], output: [0, 1, 2, 3] }] },

    { title: "Number of Operations to Make Network Connected", slug: "network-connected", difficulty: "Medium", category: "Graphs", order: 134, videoId: "", description: "<p>Given n computers and connections, return the minimum number of cable removals and reconnections to make all computers connected, or -1 if impossible.</p>", starterCodes: { javascript: "function makeConnected(n, connections) {\n  // Write your code here\n};", python: "def makeConnected(n, connections):\n    pass", java: "class Solution {\n    public int makeConnected(int n, int[][] connections) {\n    }\n}" }, handlerFunction: "makeConnected", constraints: ["1 <= n <= 10^5", "1 <= connections.length <= min(n*(n-1)/2, 10^5)"], examples: [{ id: 1, inputText: "n = 4, connections = [[0,1],[0,2],[1,2]]", outputText: "1", explanation: "One cable can connect isolated node 3." }], testCases: [{ input: [4, [[0, 1], [0, 2], [1, 2]]], output: 1 }, { input: [6, [[0, 1], [0, 2], [0, 3], [1, 2]]], output: -1 }] },

    { title: "Cheapest Flights Within K Stops", slug: "cheapest-flights-within-k-stops", difficulty: "Medium", category: "Graphs", order: 135, videoId: "", description: "<p>Given n cities, flights array [from, to, price], src, dst, and k, find the cheapest price from src to dst with at most k stops. Return -1 if no such route.</p>", starterCodes: { javascript: "function findCheapestPrice(n, flights, src, dst, k) {\n  // Write your code here\n};", python: "def findCheapestPrice(n, flights, src, dst, k):\n    pass", java: "class Solution {\n    public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {\n    }\n}" }, handlerFunction: "findCheapestPrice", constraints: ["1 <= n <= 100", "0 <= k < n"], examples: [{ id: 1, inputText: "n=4, flights=[[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src=0, dst=3, k=1", outputText: "700", explanation: "0→1→3 with 1 stop costs 700." }], testCases: [{ input: [4, [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], 0, 3, 1], output: 700 }] },

    { title: "Number of Ways to Arrive at Destination", slug: "number-of-ways-to-arrive-at-destination", difficulty: "Medium", category: "Graphs", order: 136, videoId: "", description: "<p>You are at city 0 and want to reach city n-1 in the shortest time. Count the number of ways to reach it in the shortest time modulo 10^9 + 7.</p>", starterCodes: { javascript: "function countPaths(n, roads) {\n  // Write your code here\n};", python: "def countPaths(n, roads):\n    pass", java: "class Solution {\n    public int countPaths(int n, int[][] roads) {\n    }\n}" }, handlerFunction: "countPaths", constraints: ["1 <= n <= 200", "roads[i] = [ui, vi, timei]"], examples: [{ id: 1, inputText: "n = 7, roads = [[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]]", outputText: "4", explanation: "4 shortest paths to destination." }], testCases: [{ input: [7, [[0, 6, 7], [0, 1, 2], [1, 2, 3], [1, 3, 3], [6, 3, 3], [3, 5, 1], [6, 5, 1], [2, 5, 1], [0, 4, 5], [4, 6, 2]]], output: 4 }] }
];
