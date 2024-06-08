import { useState } from 'react';

const MySoldProperties = () => {
    const [soldProperties, setSoldProperties] = useState([]);

    // useEffect(() => {
    //     // Fetch sold properties for the current agent
    //     axios.get('/api/sold-properties') // Replace with your API endpoint
    //         .then(response => {
    //             setSoldProperties(response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching sold properties:', error);
    //         });
    // }, []);

    return (
        <div className="w-[95%] mx-auto mt-10">
            <h2 className="font-bold text-3xl text-center mb-5">My Sold Properties</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Property Title</th>
                            <th className="py-3 px-6 text-left">Property Location</th>
                            <th className="py-3 px-6 text-left">Buyer Email</th>
                            <th className="py-3 px-6 text-left">Buyer Name</th>
                            <th className="py-3 px-6 text-left">Sold Price</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {soldProperties.map(property => (
                            <tr key={property.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left">{property.propertyTitle}</td>
                                <td className="py-3 px-6 text-left">{property.propertyLocation}</td>
                                <td className="py-3 px-6 text-left">{property.buyerEmail}</td>
                                <td className="py-3 px-6 text-left">{property.buyerName}</td>
                                <td className="py-3 px-6 text-left">{property.soldPrice}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySoldProperties;
