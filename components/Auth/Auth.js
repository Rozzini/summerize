// import logo from "./logo.svg";
import { useMoralis } from "react-moralis";
// import { Abi } from "./abi";
import { useEffect, useState } from "react";

//WEB3AUTH
function Auth() {
  const {
    account,
    isAuthenticated,
    authError,
    isAuthenticating,
    logout,
    user,
    authenticate,
    Moralis,
  } = useMoralis();
  
  const [balance, setbalance] = useState();
  const [info, setinfo] = useState();

  useEffect(() => { async function balance() {
      const options = {
        chain: "mumbai",
        address: user?.attributes.accounts,
      };
      // const balance = await Moralis.Web3API.account.getNativeBalance(options);
      // setbalance(
      //   Moralis.Units.FromWei(JSON.stringify(parseInt(balance.balance)))
      // );
    }
    // balance();
  }, [account]);

  // const mint = async () => {
  //   const options = {
  //     contractAddress: "0x0639666C3D9bcF4ad739210663443D0C8fDA369b",
  //     functionName: "mintNFT",
  //     abi: Abi,
  //     msgValue: "",
  //   };
  //   const transaction = await Moralis.executeFunction(options);
  //   const receipt = await transaction.wait();
  //   setinfo(receipt);
  //   console.log(receipt);
  // };

  //web3auth API
  const handleCustomLogin = async () => {
    authenticate({
      provider: "web3Auth",
      //web3auth api key
      clientId:
        "BENVotxzIrq2Z9OJ75gtCbTgwLY-Pqm0DvYWf1eusS5unGEi492KknMUlZKlPcQp6urt1TFDefVJTN9hc1bSSUk",
      //chain id polygon MUMBAI
      chainId: "0x13881"
    }).then(() => {
      // async function ball() {
      //   //const options = { chain: Moralis.Chains.POLYGON_MUMBAI };
      //   const options = {
      //     chain: "mumbai",
      //     address: user?.attributes.accounts,
      //   };
      //   // window.web3 = await Moralis.enableWeb3();
      //   const balance = await Moralis.Web3API.account.getNativeBalance(options);
      //   setbalance(
      //     Moralis.Units.FromWei(JSON.stringify(parseInt(balance.balance)))
      //   );
      // }
      // ball();
    });
  };

  return (
      <div>
          <button className="bg-gradient-to-r from-[#EB3349] to-[#F45C43] px-8 py-2 rounded-lg text-xl font-bold flex items-center text-white" onClick={isAuthenticated ? logout : handleCustomLogin}>
            {isAuthenticated ? "Sign Out" : "Connect Wallet"}
          </button>
      </div>
  );
}

export default Auth;
