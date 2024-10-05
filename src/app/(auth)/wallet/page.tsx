import FundWalletForm from "@/Wallet/FundWalletForm";
import WalletBalance from "@/Wallet/WalletBalance";
import WithdrawForm from "@/Wallet/WithdrawForm";

export default function wallet() {
  return (
    <div className="flex flex-col items-center min-h-screen">
    <div className="flex justify-center space-x-4">
      <FundWalletForm />
      <WithdrawForm />
    </div>
    <div className="flex justify-center mt-4"> {/* Adjust mt-4 as needed */}
      <WalletBalance />
    </div>
  </div>
  
   
  );
}
