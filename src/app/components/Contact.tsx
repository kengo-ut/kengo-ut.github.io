import React from 'react'

const Contact = () => {
  return (
    // Contact form
    // <section classNameName="relative">
    //   <div classNameName="absolute h-20 -top-20 invisible" id="contact"></div>
    //   <div classNameName="container mx-auto">
    //     <h2 classNameName="text-6xl font-bold text-center">Contact</h2>
    //     <hr classNameName="w-1/12 mt-4 mx-auto border-2 border-black" />
    //     <div classNameName="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
    //       <div classNameName="bg-white p-10 rounded-3xl space-y-5 border-black border-2">
    //         <h3 classNameName="text-3xl font-bold text-center">Email</h3>
    //         <p classNameName="text-xl leading-8">
    //           If you have any questions or requests, please feel free to contact me by email.
    //         </p>
    //       </div>
    //       <div classNameName="bg-white p-10 rounded-3xl space-y-5 border-black border-2">
    //         <h3 classNameName="text-3xl font-bold text-center">Social Media</h3>
    //         <p classNameName="text-xl leading-8">
    //           You can also contact me on social media.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <div className='flex items-center justify-center h-screen'>
      <div
        className='rounded-lg border bg-card text-card-foreground shadow-sm'
        data-v0-t='card'
      >
        <div className='p-6'>
          <div className='space-y-8'>
            <div className='space-y-2'>
              <h2 className='text-6xl font-semibold'>Contact</h2>
              <p className='text-xl text-gray-600'>
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </p>
            </div>
            <div className='space-y-4'>
              <div className='grid grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <label className='text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                    First name
                  </label>
                  <input
                    className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-md ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                    id='first-name'
                    placeholder='Enter your first name'
                  />
                </div>
                <div className='space-y-2'>
                  <label className='text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                    Last name
                  </label>
                  <input
                    className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-md ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                    id='last-name'
                    placeholder='Enter your last name'
                  />
                </div>
              </div>
              <div className='space-y-2'>
                <label className='text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                  Email
                </label>
                <input
                  className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-md ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                  type='email'
                  id='email'
                  placeholder='Enter your email'
                />
              </div>
              <div className='space-y-2'>
                <label className='text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                  Message
                </label>
                <textarea
                  className='flex w-full rounded-md border border-input bg-background px-3 py-2 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]'
                  id='message'
                  placeholder='Enter your message'
                ></textarea>
              </div>
              <button
                className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-gray-800 text-white'
                type='submit'
              >
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
