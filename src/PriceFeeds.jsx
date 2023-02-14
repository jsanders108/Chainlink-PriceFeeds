import { useState } from 'react'
import {ethers} from 'ethers'
import React from 'react'

export default function PriceFeeds(){

    const {ethereum} = window
    const [account, setAccount] = useState("Not connected")
    const [btcPrice, setBtcPrice] = useState(0)
    const [ethPrice, setEthPrice] = useState(0)
    const [linkPrice, setLinkPrice] = useState(0)
    const [snxPrice, setSnxPrice] = useState(0)
    const [goldPrice, setGoldPrice] = useState(0)

    const connectMetamask = async ()=> {
        if(window.ethereum !== "undefined"){
          const accounts = await ethereum.request({method: "eth_requestAccounts"})
          setAccount(accounts[0])
        }
      }

          
      const getData = async () => {
        const Address = "0x7b3691382b60F0Fe7E83dfE104c4B59f9D1d5366"
        const ABI = [
            {
              "inputs": [],
              "name": "getBtcPrice",
              "outputs": [
                {
                  "internalType": "int256",
                  "name": "",
                  "type": "int256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getEthPrice",
              "outputs": [
                {
                  "internalType": "int256",
                  "name": "",
                  "type": "int256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getGoldPrice",
              "outputs": [
                {
                  "internalType": "int256",
                  "name": "",
                  "type": "int256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getLinkPrice",
              "outputs": [
                {
                  "internalType": "int256",
                  "name": "",
                  "type": "int256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getSnxPrice",
              "outputs": [
                {
                  "internalType": "int256",
                  "name": "",
                  "type": "int256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ];
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        let contract = new ethers.Contract(Address, ABI, signer)
        const btcPrice = await contract.getBtcPrice()
        setBtcPrice(btcPrice)
        const ethPrice = await contract.getEthPrice()
        setEthPrice(ethPrice)
        const linkPrice = await contract.getLinkPrice()
        setLinkPrice(linkPrice)
        const snxPrice = await contract.getSnxPrice()
        setSnxPrice(snxPrice)
        const goldPrice = await contract.getGoldPrice()
        setGoldPrice(goldPrice)
      }

    return (
        <div>
            <div className="main-connect-wrapper">
                <div className="sub-connect-wrapper">
                    <button onClick={connectMetamask} className="connect-btn">Connect to Metamask</button>
                    <p className="connection-message">Account: {account}</p>
                </div>
            </div>
            <div className="priceFeeds-wrapper">
                    <h2 className="main-title">Current Prices</h2>
                    <div className="btc">
                        <img className="btc-icon" src="./src/assets/Bitcoin-logo.jpg" />
                        <p className="coin-name">Bitcoin: ${btcPrice / 100} </p>
                    </div>
                    <div className="eth">
                        <img className="eth-icon" src="./src/assets/Ethereum-logo.jpg" />
                        <p className="coin-name">Ethereum: ${ethPrice / 100}</p>
                    </div>
                    <div className="link">
                        <img className="link-icon" src="./src/assets/Link-logo.jpg" />
                        <p className="coin-name">Chainlink: ${linkPrice / 100} </p>
                    </div>
                    <div className="synthetix">
                        <img className="synthetix-icon" src="./src/assets/Synthetix-logo.jpg" />
                        <p className="coin-name">Synthetix: ${snxPrice / 100} </p>
                    </div>
                    <div className="gold">
                        <img className="gold-icon" src="./src/assets/Gold-logo.jpg" />
                        <p className="coin-name">Gold: ${goldPrice /100} </p>
                    </div>
                    <button onClick={getData} className="getData-btn">Get Data from Chainlink</button>
            </div> 
        </div>
    
    )
}

