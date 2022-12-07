export const contractAddress = "0xf31035B70fCc31e43C2Cd0686A3e72188F791E0B"
export const abi = [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    { inputs: [], name: "NotOwner", type: "error" },
    {
        inputs: [],
        name: "MINIMUM",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "addressToAmountFunded",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    { inputs: [], name: "fund", outputs: [], stateMutability: "payable", type: "function" },
    {
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        name: "funders",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "i_owner",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    { inputs: [], name: "withdraw", outputs: [], stateMutability: "nonpayable", type: "function" },
]
