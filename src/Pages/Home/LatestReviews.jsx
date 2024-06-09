import { useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const LatestReviews = () => {
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(null);

    const { data: latestReviews = [], refetch } = useQuery({
        queryKey: ['latestReviews'],
        queryFn: async () => {
            const res = await axiosPublic.get('/reviews');
            setLoading(res.data);
            return res.data;
        }
    });

    if(!loading) {
        refetch();
        return <p>Loading...</p>
    }



    return (
        <div className="container mx-auto p-2">
            <h3 className="text-xl font-bold mb-4">Latest User Reviews</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {latestReviews.map(review => (
                    <div key={review.id} className="bg-white shadow-md rounded-md p-4">
                        <div className="flex items-center mb-4">
                            <img src={review?.reviewerImageUrl} alt={review.reviewerName} className="w-12 h-12 rounded-full object-cover mr-4" />
                            <div>
                                <p className="font-bold">{review.reviewerName}</p>
                                <p className="text-gray-600">{review.propertyTitle}</p>
                            </div>
                        </div>
                        <p className="text-gray-700">{review.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestReviews;
