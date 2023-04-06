import React from "react";

const FaQ = () => {
  return (
    <>
      <div className="my-32 sm:-my-10">
        <div className="flex items-center justify-center h-fit md:w-656">
          <div className="bg-white">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
              <h2 className="text-2xl font-semibold text-orange-500">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 mb-8 text-gray-600">
                We have provided some answers to your frequently asked questions
              </p>
              <div className="space-y-4">
                <details className="w-full rounded-lg ring-1 ring-orange-600">
                  <summary className="px-4 py-6">
                    What are your restaurant's hours of operation?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 text-justify">
                    Our restaurant is open from 8AM to 1AM every day of the
                    week, including holidays.
                  </p>
                </details>
                <details className="w-full rounded-lg ring-1 ring-orange-600">
                  <summary className="px-4 py-6">
                    What types of payment do you accept?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 text-justify">
                    We accept cash, credit cards, and debit cards.
                  </p>
                </details>
                <details className="w-full rounded-lg ring-1 ring-orange-600">
                  <summary className="px-4 py-6">
                    Can I bring my own drinks to the restaurant?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 text-justify">
                    We're sorry, but we do not allow outside food or drinks to
                    be brought into the restaurant.
                  </p>
                </details>
                <details className="w-full rounded-lg ring-1 ring-orange-600">
                  <summary className="px-4 py-6">
                    Do you offer gift cards or some discounts?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 text-justify">
                    Yes, our restaurant porvides <strong>Dream Coin's</strong>{" "}
                    on every online transaction made on our website. The
                    customer can avail discount using those dream coin's. But
                    you must have above 500 dream coin's to be applicable to
                    avail discount.
                  </p>
                </details>
                <details className="w-full rounded-lg ring-1 ring-orange-600">
                  <summary className="px-4 py-6">
                    Do you provide bill receipt?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 text-justify">
                    Yes, our your food ordered receipt will be emailed to your
                    respective email id which you have used using for placing
                    order.
                  </p>
                </details>
                <details className="w-full rounded-lg ring-1 ring-orange-600">
                  <summary className="px-4 py-6">
                    What safety measures are you taking to protect customers
                    during the COVID-19 pandemic?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 text-justify">
                    We're closely following the guidelines and regulations set
                    by the local health department and the CDC to ensure the
                    safety of our customers and staff. We have increased our
                    cleaning and sanitation protocols, implemented social
                    distancing measures, and require our staff to wear masks at
                    all times. We also encourage our customers to wear masks
                    when not eating or drinking, and to maintain a safe distance
                    from others while inside the restaurant.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaQ;
