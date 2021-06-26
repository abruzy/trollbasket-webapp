import React from 'react'

const Buy = () => {
  return (
    <div className='sm:hidden overflow-hidden'>
      <h1 className='ml-5 my-2 text-base text-gray1 font-medium'>
        Trollbasket
      </h1>
      <div className='px-5 h-14 flex justify-between items-center bg-white border-t-4 border-b-4 border-gray4'>
        <div className='flex items-center'>
          <div className='h-7 w-7 rounded-full bg-gray3 flex items-center justify-center'>
            <img src='/vectors/location.svg' alt='location' />
          </div>
          <p className='mx-2'>Lagos</p>
          <img src='/vectors/chevron-down-arrow.svg' alt='arrow-down' />
        </div>

        <div className='flex items-center border-r-2 border-l-2 border-gray4 px-5'>
          <div className='h-7 w-7 rounded-full bg-gray3 flex items-center justify-center'>
            <img src='/vectors/file.svg' alt='file' />
          </div>
          <p className='ml-2'>My Orders</p>
        </div>

        <div className='flex items-center'>
          <div className='h-7 w-7 rounded-full bg-gray3 flex items-center justify-center'>
            <img src='/vectors/cart.svg' alt='cart' />
          </div>
          <p className='ml-2'>Cart</p>
        </div>
      </div>

      <form className='bg-gray3 mt-3 flex p-1'>
        <input
          type='text'
          placeholder='Search merchbuy'
          className='flex-grow h-14 bg-gray3 rounded'
        />
        <img src='/vectors/search.svg' alt='search' className='' />
      </form>

      <div className='relative w-96 h-32 text-white flex items-center mt-4'>
        <img
          src='/vectors/bg.svg'
          alt='bg'
          className='absolute w-full h-full top-0 left-0 object-contain -z-1'
        />
        <p className='ml-12'>
          Having any <span className='text-orange1'>issues</span> with <br />
          your order?
        </p>
      </div>

      <div className='mt-5 grid grid-cols-4 place-items-center place-content-center gap-x-4 custom-width mx-auto'>
        <div className='flex flex-col items-center'>
          <div className='h-14 w-14 rounded bg-blue1 flex items-center justify-center'>
            <img src='/vectors/menu.svg' alt='menu' className='h-6' />
          </div>
          <p className='text-center text-purple2 text-xs font-normal mt-2'>
            Product Categories
          </p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='h-14 w-14 rounded bg-orange1 flex items-center justify-center'>
            <img src='/vectors/fire.svg' alt='fire' className='h-6' />
          </div>
          <p className='text-center text-purple2 text-xs font-normal mt-2'>
            Popular Products
          </p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='h-14 w-14 rounded bg-purple1 flex items-center justify-center'>
            <img src='/vectors/thumbs.svg' alt='thumbs' className='h-6' />
          </div>
          <p className='text-center text-purple2 text-xs font-normal mt-2'>
            Recommended Products
          </p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='h-14 w-14 rounded bg-green1 flex items-center justify-center'>
            <img src='/vectors/entypo_shop.svg' alt='shop' className='h-6' />
          </div>
          <p className='text-center h-8 text-purple2 text-xs font-normal mt-2'>
            Shops
          </p>
        </div>
      </div>

      <div>
        <div>
          <img src='/vectors/image1.svg' alt='' />
          <p>Free sample small tote bag gucci fen...</p>
          <p>₦900 - ₦1,500</p>
          <p>MOQ 4 (pieces)</p>
        </div>
      </div>
    </div>
  )
}

export default Buy
