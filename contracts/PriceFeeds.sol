// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PriceFeeds {

    //Queries Chainlink Oracle to get the BTC/USD price
    //BTC/USD GOERLI ADDRESS 0xA39434A63A52E749F02807ae27335515BA4b07F7
    
    function getBtcPrice() public view returns (int256) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(0xA39434A63A52E749F02807ae27335515BA4b07F7);
        (, int256 price,,,) = priceFeed.latestRoundData();
        return price / 10**6; 
        // format of price returned = int256: 148816 (need to divide by 100 in Javascript)
    }

    //Queries Chainlink Oracle to get the ETH/USD price
    //ETH/USD GOERLI ADDRESS 0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e
    
    function getEthPrice() public view returns (int256) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e);
        (, int256 price,,,) = priceFeed.latestRoundData();
        return price / 10**6; 
        // format of price returned = int256: 148816 (need to divide by 100 in Javascript)
    }


    //Queries Chainlink Oracle to get the LINK/USD price
    //LINK/USD GOERLI ADDRESS 0x48731cF7e84dc94C5f84577882c14Be11a5B7456
    
    function getLinkPrice() public view returns (int256) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(0x48731cF7e84dc94C5f84577882c14Be11a5B7456);
        (, int256 price,,,) = priceFeed.latestRoundData();
        return price / 10**6; 
        // format of price returned = int256: 148816 (need to divide by 100 in Javascript)
    }

    //Queries Chainlink Oracle to get the SNX/USD price
    //SNX/USD GOERLI ADDRESS 0xdC5f59e61e51b90264b38F0202156F07956E2577
    
    function getSnxPrice() public view returns (int256) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(0xdC5f59e61e51b90264b38F0202156F07956E2577);
        (, int256 price,,,) = priceFeed.latestRoundData();
        return price / 10**6; 
        // format of price returned = int256: 148816 (need to divide by 100 in Javascript)
    }

    //Queries Chainlink Oracle to get the XAU/USD (Gold) price
    //XAU/USD GOERLI ADDRESS 0x7b219F57a8e9C7303204Af681e9fA69d17ef626f
    
    function getGoldPrice() public view returns (int256) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(0x7b219F57a8e9C7303204Af681e9fA69d17ef626f);
        (, int256 price,,,) = priceFeed.latestRoundData();
        return price / 10**16; 
        // format of price returned = int256: 148816 (need to divide by 100 in Javascript)
    }
}