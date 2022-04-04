require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
    networks: {
        hardhat: {
            forking: {
                url: "https://emerald.oasis.dev",
                blockNumber: 940000,
            }
        },
    },
    solidity: "0.8.13",
};