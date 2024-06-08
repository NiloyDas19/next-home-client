import  { useState} from 'react';

const RequestedProperties = () => {
    const [offeredProperties, setOfferedProperties] = useState([]);

    // useEffect(() => {
    //     // Fetch offered properties for the current agent
    //     axios.get('/api/offered-properties') // Replace with your API endpoint
    //         .then(response => {
    //             setOfferedProperties(response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching offered properties:', error);
    //         });
    // }, []);

    // const handleAccept = (propertyId) => {
    //     // Handle accept logic
    //     axios.post(`/api/accept-offer/${propertyId}`)
    //         .then(response => {
    //             // Update state to reflect accepted offer
    //             setOfferedProperties(offeredProperties.map(property => 
    //                 property.id === propertyId ? { ...property, status: 'accepted' } : property
    //             ));
    //         })
    //         .catch(error => {
    //             console.error('Error accepting offer:', error);
    //         });
    // };

    // const handleReject = (propertyId) => {
    //     // Handle reject logic
    //     axios.post(`/api/reject-offer/${propertyId}`)
    //         .then(response => {
    //             // Update state to reflect rejected offer
    //             setOfferedProperties(offeredProperties.map(property => 
    //                 property.id === propertyId ? { ...property, status: 'rejected' } : property
    //             ));
    //         })
    //         .catch(error => {
    //             console.error('Error rejecting offer:', error);
    //         });
    // };

    return (
        <div className="w-[95%] mx-auto mt-10">
            <h2 className="font-bold text-3xl text-center mb-5">Requested/Offered Properties</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Property Title</th>
                            <th className="py-3 px-6 text-left">Property Location</th>
                            <th className="py-3 px-6 text-left">Buyer Email</th>
                            <th className="py-3 px-6 text-left">Buyer Name</th>
                            <th className="py-3 px-6 text-left">Offered Price</th>
                            <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {offeredProperties.map(property => (
                            <tr key={property.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left">{property.propertyTitle}</td>
                                <td className="py-3 px-6 text-left">{property.propertyLocation}</td>
                                <td className="py-3 px-6 text-left">{property.buyerEmail}</td>
                                <td className="py-3 px-6 text-left">{property.buyerName}</td>
                                <td className="py-3 px-6 text-left">{property.offeredPrice}</td>
                                <td className="py-3 px-6 text-center">
                                    {property.status === 'pending' ? (
                                        <>
                                            <button
                                                onClick={() => handleAccept(property.id)}
                                                className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                                            >
                                                Accept
                                            </button>
                                            <button
                                                onClick={() => handleReject(property.id)}
                                                className="bg-red-500 text-white px-3 py-1 rounded"
                                            >
                                                Reject
                                            </button>
                                        </>
                                    ) : (
                                        <span className={`px-3 py-1 rounded ${property.status === 'accepted' ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                                            {property.status}
                                        </span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RequestedProperties;
