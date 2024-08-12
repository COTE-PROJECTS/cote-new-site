import React from 'react';

const SubscriptionComponent: React.FC = () => {
    return (
        <section
            className="py-16 bg-cover bg-white flex items-center justify-center"
            style={{
                backgroundImage: 'url("https://www.unwantedwitness.org/wp-content/uploads/2023/07/NewsletterBlack.png")',
            }}
        >
            <div className="max-w-5xl mx-auto w-full px-4 md:px-8">
                <div className="flex justify-center">
                    <img
                        src="https://www.unwantedwitness.org/wp-content/uploads/2021/06/uw-separator.png"
                        alt=""
                        className="mb-5"
                    />
                </div>

                <hr className="my-5 border-t-2 border-white" />

                <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
                    SUBSCRIBE TO OUR NEWSLETTER
                </h1>

                <div className="mt-8">
                    <form
                        className="flex flex-col md:flex-row items-center justify-center gap-4"
                        method="post"
                        action="/"
                    >
                        <input
                            type="email"
                            className="w-full md:w-auto px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-gray-500"
                            placeholder="Email Address"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full md:w-auto bg-[#f7941f] text-white font-semibold py-3 px-8 rounded hover:bg-opacity-90 transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SubscriptionComponent;
