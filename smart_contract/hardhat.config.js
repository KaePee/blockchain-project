require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/8cJ00HQ8ceACg5grWP1XBRmzYerq48j8",
      accounts: ["d58fe3c4731891fd44e66eac49b0f3fb8e2ad53e1f8b16fbaec506fa4ce737f5"],
      gasPrice: 3000000000, // 3 gwei (optional)
    },
  },
};