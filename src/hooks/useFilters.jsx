import { useState } from 'react';

export const useFilters = () => {
    const [filters, setFilters] = useState({
        unidad: '',
        professional: '',
        rating: '',
    });

    const handleFilterChange = (filterName, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterName]: value,
        }));
    };

    return { filters, handleFilterChange };
}