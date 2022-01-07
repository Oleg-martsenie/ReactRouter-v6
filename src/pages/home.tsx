import React from 'react'

export const Home = () => {
    return (
        <div>
            <main className='flex m-auto'>
                <section className='grid grid-cols-1 m-auto'>
                    <div className="w-3/5">
                        <img src="https://sujeitoprogramador.com/wp-content/uploads/2019/06/reactjs.png" className="w-full h-full object-cover" />
                    </div>
                    <div className="">
                        <h4 className='font-medium'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quisquam autem, velit accusantium ad nam quasi quis consequuntur deleniti dignissimos molestias natus, numquam nulla dolore quaerat harum eaque laudantium earum vero omnis ea alias ratione.
                        </h4>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home
