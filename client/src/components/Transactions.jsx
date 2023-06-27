import React,{ useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import dummyData from '../utils/dummyData';
import { shortenAddress } from '../utils/shortenAddress';

const TransactionCard = ({ addressTo, addressFrom, timestamp, message, amount }) => {
    return (
        <div className='bg-[#181918] m-4 flex flex-1
          2xl:min-w-[450px]
          2xl:max-w-[500px]
          sm:min-w-[270px]
          sm:max-w-[300px]
          flex-col p-3 rounded-md hover:shadow-2xl
        '>  
            <div className='flex flex-col items-center w-full mt-3'>
                <div className='justify-start w-full mb-6 p-2'>
                    <a href={`https://sepolia.etherscan.io/address/${addressTo}`} target='_blank' rel='noopener noreferrer'>
                        <p className='text-white text-base'>
                            From: {shortenAddress(addressFrom)}
                        </p>
                    </a>
                        <p className='text-white text-base'>
                            To: {shortenAddress(addressTo)}
                        </p>
                        {message  && (
                            <>
                                <br />
                                <p className='text-white text-base'>Message: {message}</p>
                            </>
                        )}

                        <div className='bg-black p-2 px-1 w-max rounded-3xl mt-5 shadow-2xl'>
                            <p className='text-[#37c7da]'>Timestamp: {timestamp}</p>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}

const Transactions = () => {
    const {currentAccount, transactions} = useContext(TransactionContext);
  return ( 
    <div id='transactions' className='flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions'>
        <div className='flex flex-col md:p-12 py-12 px-4'>
            {currentAccount ? (
                <h3 className='text-white text-3xl text-center my-2'>Latest Transactions</h3>
            ) : 
            (<h3 className='text-white text-3xl text-center my-2'>Connect Account to see latest transactions</h3>)}
            {/* Latest Transactions */}
            {/* Connect Accounts to see latest txs */}

            <div className='flex flex-wrap justify-center items-center mt-10'>
                {transactions.reverse().map((transaction, i) => (
                 <TransactionCard key={i} {...transaction}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Transactions