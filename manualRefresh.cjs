const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const dummyProblems = [
    {
        title: "Two Sum",
        slug: "two-sum",
        difficulty: "Easy",
        category: "Array",
        order: 1,
        videoId: "UXDSeD9mN-k",
        description: "<p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.</p>",
        starterCodes: {
            javascript: "function twoSum(nums, target) {\n  // Write your code here\n};",
            python: "def twoSum(nums, target):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your code here\n    }\n}"
        },
        handlerFunction: "twoSum",
        constraints: ["2 <= nums.length <= 10^4"],
        examples: [
            { id: 1, inputText: "nums = [2,7,11,15], target = 9", outputText: "[0,1]", explanation: "nums[0] + nums[1] == 9" }
        ],
        testCases: [
            { input: [[2, 7, 11, 15], 9], output: [0, 1] },
            { input: [[3, 2, 4], 6], output: [1, 2] },
            { input: [[3, 3], 6], output: [0, 1] }
        ]
    },
    {
        title: "Reverse String",
        slug: "reverse-string",
        difficulty: "Easy",
        category: "String",
        order: 2,
        videoId: "tG0-bQZ9zP4",
        description: "<p>Write a function that reverses a string. The input string is given as an array of characters <code>s</code>.</p>",
        starterCodes: {
            javascript: "function reverseString(s) {\n  // Write your code here\n  return s.reverse();\n};",
            python: "def reverseString(s):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public void reverseString(char[] s) {\n        // Write your code here\n    }\n}"
        },
        handlerFunction: "reverseString",
        constraints: ["1 <= s.length <= 10^5"],
        examples: [
            { id: 1, inputText: 's = ["h","e","l","l","o"]', outputText: '["o","l","l","e","h"]', explanation: "Reverse the array in-place." }
        ],
        testCases: [
            { input: [["h", "e", "l", "l", "o"]], output: ["o", "l", "l", "e", "h"] },
            { input: [["H", "a", "n", "n", "a", "h"]], output: ["h", "a", "n", "n", "a", "H"] }
        ]
    },
    {
        title: "Palindrome Number",
        slug: "palindrome-number",
        difficulty: "Medium",
        category: "Math",
        order: 3,
        videoId: "yqbL18D455",
        description: "<p>Given an integer <code>x</code>, return <code>true</code> if <code>x</code> is a palindrome, and <code>false</code> otherwise.</p>",
        starterCodes: {
            javascript: "function isPalindrome(x) {\n  // Write your code here\n};",
            python: "def isPalindrome(x):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public boolean isPalindrome(int x) {\n        // Write your code here\n    }\n}"
        },
        handlerFunction: "isPalindrome",
        constraints: ["-2^31 <= x <= 2^31 - 1"],
        examples: [
            { id: 1, inputText: "x = 121", outputText: "true", explanation: "121 reads as 121 from left to right and from right to left." }
        ],
        testCases: [
            { input: [121], output: true },
            { input: [-121], output: false },
            { input: [10], output: false }
        ]
    },
    {
        title: "Valid Parentheses",
        slug: "valid-parentheses",
        difficulty: "Easy",
        category: "String",
        order: 4,
        videoId: "WTzjTskDFMg",
        description: "<p>Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.</p>",
        starterCodes: {
            javascript: "function isValid(s) {\n  // Write your code here\n};",
            python: "def isValid(s):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public boolean isValid(String s) {\n        // Write your code here\n    }\n}"
        },
        handlerFunction: "isValid",
        constraints: ["1 <= s.length <= 10^4", "s consists of parentheses only '()[]{}'."],
        examples: [
            { id: 1, inputText: 's = "()"', outputText: "true", explanation: "Valid parentheses." }
        ],
        testCases: [
            { input: ["()"], output: true },
            { input: ["()[]{}"], output: true },
            { input: ["(]"], output: false }
        ]
    },
    {
        title: "Contains Duplicate",
        slug: "contains-duplicate",
        difficulty: "Easy",
        category: "Array",
        order: 5,
        videoId: "3OamzN90kPg",
        description: "<p>Given an integer array <code>nums</code>, return <code>true</code> if any value appears at least twice in the array, and return <code>false</code> if every element is distinct.</p>",
        starterCodes: {
            javascript: "function containsDuplicate(nums) {\n  // Write your code here\n};",
            python: "def containsDuplicate(nums):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public boolean containsDuplicate(int[] nums) {\n        // Write your code here\n    }\n}"
        },
        handlerFunction: "containsDuplicate",
        constraints: ["1 <= nums.length <= 10^5"],
        examples: [
            { id: 1, inputText: "nums = [1,2,3,1]", outputText: "true", explanation: "1 appears twice." }
        ],
        testCases: [
            { input: [[1, 2, 3, 1]], output: true },
            { input: [[1, 2, 3, 4]], output: false },
            { input: [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]], output: true }
        ]
    },
    {
        title: "Climbing Stairs",
        slug: "climbing-stairs",
        difficulty: "Easy",
        category: "Dynamic Programming",
        order: 6,
        videoId: "Y0lT9Fck7qI",
        description: "<p>You are climbing a staircase. It takes <code>n</code> steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?</p>",
        starterCodes: {
            javascript: "function climbStairs(n) {\n  // Write your code here\n};",
            python: "def climbStairs(n):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int climbStairs(int n) {\n        // Write your code here\n    }\n}"
        },
        handlerFunction: "climbStairs",
        constraints: ["1 <= n <= 45"],
        examples: [
            { id: 1, inputText: "n = 2", outputText: "2", explanation: "There are two ways to climb to the top.\\n1. 1 step + 1 step\\n2. 2 steps" }
        ],
        testCases: [
            { input: [2], output: 2 },
            { input: [3], output: 3 },
            { input: [4], output: 5 }
        ]
    }
];

const ProblemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    difficulty: { type: String, required: true },
    category: { type: String, required: true },
    order: { type: Number, required: true },
    videoId: { type: String },
    description: { type: String, required: true },
    starterCodes: {
        javascript: { type: String, required: true },
        python: { type: String, required: true },
        java: { type: String, required: true }
    },
    examples: [
        {
            id: Number,
            inputText: { type: String, required: true },
            outputText: { type: String, required: true },
            explanation: { type: String }
        }
    ],
    constraints: [{ type: String, required: true }],
    handlerFunction: { type: String, required: true },
    testCases: [
        {
            input: [mongoose.Schema.Types.Mixed],
            output: mongoose.Schema.Types.Mixed
        }
    ]
});

const Problem = mongoose.model("Problem_Testing_Seed", ProblemSchema, "problems");

async function seed() {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected");

    await Problem.deleteMany({});
    await Problem.insertMany(dummyProblems);

    console.log("Seeded successfully");
    mongoose.disconnect();
}

seed().catch(console.error);
