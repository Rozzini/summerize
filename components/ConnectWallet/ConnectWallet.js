import { useMoralis } from "react-moralis";
import Popup from "reactjs-popup";
import React, { useEffect, useState } from "react";

export default function ConnectWallet() {
  const { authenticate, isAuthenticated, logout, account, user } = useMoralis();
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  function Pop() {
    return (
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="bg-bluesummerize max-w-xl rounded-2xl">
          <div className="">
            <button className="px-4 pt-2 close" onClick={closeModal}>
              X
            </button>
            <p className="font-sans text-center text-4xl">
              apparently you dont have crypto wallet
            </p>
            <p className="font-sans text-center text-lg py-5 px-1">
            We suggest you to download <a href="https://metamask.io/" className="text-redsummerize">metamask</a>
            </p>
          </div>
        </div>
      </Popup>
    );
  }
  function Popupus() {
    if (typeof window.ethereum === "undefined") {
      setOpen(true);
      console.log({ open });
    } else {
      authenticate({ provider: "metamask" });
    }
  }

  return (
    <div>
      <Pop />
      {isAuthenticated ? (
        <div>
          <button
            className="bg-redsummerize hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={logout}
          >
            <h2>Address {user.get("ethAddress").slice(0, 9)}</h2>
          </button>
        </div>
      ) : (
        <div>
          <button
            className="bg-redsummerize hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => Popupus()}
          >
            <h2>Connect</h2>
          </button>
        </div>
      )}
    </div>
  );
}
