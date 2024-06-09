import { Link } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const AdvertisementSection = () => {

    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(null);

    const { data: advertisedProperties = [], refetch } = useQuery({
        queryKey: ['advertisedProperties'],
        queryFn: async () => {
            const res = await axiosPublic.get('/advertisedProperties');
            setLoading(res.data);
            return res.data;
        }
    })

    if (!loading) {
        return <div className="flex justify-center items-center h-screen">
            <h1 className="text-4xl font-bold text-red-500">Loading...</h1>
        </div>
    }

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold text-center mb-10">Advertisement Section</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {advertisedProperties.slice(0, 4).map(property => (
                    <div key={property._id} className="bg-white shadow-md rounded-md overflow-hidden">
                        <img src={property.propertyImageUrl} alt={property.propertyTitle} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold">{property.propertyTitle}</h2>
                            <p className="text-gray-700">{property.propertyLocation}</p>
                            <p className={`mt-2 ${property.verificationStatus === 'verified' ? 'text-green-500' : 'text-red-500'}`}>
                                {property.verificationStatus}
                            </p>
                            <p className="mt-2">Price Range: ${property.minPrice} - ${property.maxPrice}</p>
                            <Link to={`/property-details/${property._id}`} className="block mt-4 text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                                Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdvertisementSection;
