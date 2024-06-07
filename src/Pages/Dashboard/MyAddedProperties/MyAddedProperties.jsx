import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const MyAddedProperties = () => {
    const [properties, setProperties] = useState([]);
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        // Fetch the properties added by the agent from the server
        axiosPublic.get(`/properties/${user.email}`)
            .then(res => setProperties(res.data))
            .catch(error => console.error(error));
    }, [user.email]);

    const handleDelete = (propertyId) => {

    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-6">
                <h2 className="text-3xl font-bold text-center text-gray-900">My Added Properties</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        properties.map(property => (
                            <div key={property._id} className="bg-white shadow-lg rounded-lg p-6">
                                <img src={property.propertyImageUrl} alt={property.title} className="w-full h-48 object-cover rounded-md mb-4" />
                                <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                                <p className="text-gray-700 mb-2">{property.location}</p>
                                <p className="text-gray-700 mb-2">Agent: {property.agentName}</p>
                                <img src={user.photoURL} alt={user.displayName} className="w-10 h-10 rounded-full mb-2" />
                                <p className={`mb-2 ${property.verificationStatus === 'verified' ? 'text-green-500' : property.verificationStatus === 'rejected' ? 'text-red-500' : 'text-yellow-500'}`}>
                                    Status: {property.verificationStatus}
                                </p>
                                <p className="text-gray-700 mb-2">Price Range: ${property.minPrice}-${property.maxPrice}</p>
                                <div className="flex space-x-2">
                                    {property.verificationStatus !== 'rejected' && (
                                        <Link to={`/update-property/${property._id}`} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                            Update
                                        </Link>
                                    )}
                                    <button
                                        onClick={() => handleDelete(property._id)}
                                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default MyAddedProperties;
