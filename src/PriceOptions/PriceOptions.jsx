
import { FaCheckCircle } from "react-icons/fa";
const PriceOptions = () => {
    const price = [
        {
            "id": 1,
            "name": "Basic Plan",
            "price": 30.99,
            "currency": "USD",
            "duration": "Monthly",
            "features": [
                "Access to gym floor during business hours",
                "Locker room access",
                "Free group fitness class once a week"
            ]
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "price": 49.99,
            "currency": "USD",
            "duration": "Monthly",
            "features": [
                "24/7 gym access",
                "Unlimited group fitness classes",
                "Access to sauna and steam room",
                "1 personal training session per month"
            ]
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "price": 79.99,
            "currency": "USD",
            "duration": "Monthly",
            "features": [
                "All features from the Standard Plan",
                "Dedicated locker",
                "Free protein shakes after workout",
                "4 personal training sessions per month",
                "Priority access to new equipment and events"
            ]
        },
        {
            "id": 4,
            "name": "Annual Membership ",
            "price": 499.99,
            "currency": "USD",
            "duration": "Yearly",
            "features": [
                "24/7 gym access",
                "Unlimited group fitness classes",
                "Discount on personal training packages",
                "Free access to partner gyms"
            ]
        },
        {
            "id": 5,
            "name": "Couple Plan",
            "price": 89.99,
            "currency": "USD",
            "duration": "Monthly",
            "features": [
                "24/7 gym access for two members",
                "Unlimited group classes for both",
                "Access to sauna and pool",
                "Discount on personal training for couples"
            ]
        },
        {
            "id": 5,
            "name": "Couple Plan",
            "price": 89.99,
            "currency": "USD",
            "duration": "Monthly",
            "features": [
                "24/7 gym access for two members",
                "Unlimited group classes for both",
                "Access to sauna and pool",
                "Discount on personal training for couples"
            ]
        }
    ]

    return (
        <div>
            <h2 className="text-4xl font-semibold pt-36 flex justify-center">Best Prices</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 ">
                {
                    price.map(p =>
                        <div key={p.id}
                            className="bg-blue-700 flex-col  rounded-lg mt-10 text-white">
                            <div className="flex items-end justify-center">
                                <h1 className="text-7xl pt-4">{p.price}</h1>
                                <p className="font-semibold">/mon</p>
                            </div>
                            <h2 className="flex justify-center text-3xl font-medium py-4 ">{p.name}</h2>
                            {
                                p.features.map((ft, idx) => <ul key={idx}
                                    className=" pl-8 ">
                                    <li className="flex items-center gap-2 "><FaCheckCircle className="text-green-500"></FaCheckCircle>{ft}</li>
                                </ul>)

                            }
                            <button className="text-2xl font-semibold flex justify-center mt-6 mb-6 w-[80%] mx-auto rounded-lg bg-green-500 hover:bg-green-800 py-2">Buy Now</button>

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default PriceOptions;