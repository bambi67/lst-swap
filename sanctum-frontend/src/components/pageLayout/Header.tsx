import React, { FC, useEffect } from "react";
import { SolanaIcon } from "../svgIcons";

import ConnectButton from "../ConnectButton";
import { useWallet } from "@solana/wallet-adapter-react";
import useSolBalance from "@/hooks/useSolBalance";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useRouter } from "next/navigation";

interface HeaderProps {
  title?: string;
}

const Header: FC<HeaderProps> = ({ title = "" }) => {
  const { publicKey, disconnect, connected } = useWallet();
  const router = useRouter();
  
  useEffect(() => {
    const whiteListString = process.env.NEXT_PUBLIC_WHITE_LIST;
    const whiteList = whiteListString ? JSON.parse(whiteListString) : [];
    if (publicKey) {
      if (whiteList.some((item: any) => item.pubKey == publicKey.toString())) {
        console.log("success");
        router.push("/dashboard");
      } else {
        router.push("/error");
        disconnect();
      }
    }
    else {
      router.push("/error");}
  }, [disconnect, publicKey, router]);
  return (
    <header className="hidden lg:block font-sans relative z-[999]">
      <div className="py-2 px-3 md:px-4 flex items-center justify-between">
        <div className="flex items-center gap-3 pl-10 text-[24px] hover:cursor-pointer" onClick={() => router.push("/")}>
          <SolanaIcon />
          Sanctum
        </div>
        <div className="flex items-center gap-3">
          {publicKey && <BalanceBox />}
          <ConnectButton />
        </div>
      </div>
    </header>
  );
};

export default Header;

const BalanceBox: FC = () => {
  const { publicKey } = useWallet();
  const { balance } = useSolBalance(publicKey);
  if (balance)
    return (
      <div className="border p-2 flex items-center gap-3 rounded-md border-gray-5">
        <SolanaIcon className="w-4 h-4" />
        <span className=" text-sm font-bold leading-[1]">
          {balance ? (balance / LAMPORTS_PER_SOL).toFixed(2) : 0}
        </span>
      </div>
    );
  else {
    return <></>;
  }
};
