import { useState } from 'react';
import { CompanyType } from '@/data/companiesUsingPinot';

type FilterProps = {
    types: CompanyType[];
    onFilterChange: (type: string) => void;
};

const FilterMobile: React.FC<FilterProps> = ({ types, onFilterChange }) => {
    const [selectedType, setSelectedType] = useState('all');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedType(event.target.value);
        onFilterChange(event.target.value);
    };

    return (
        <select
            title="Filter by type"
            value={selectedType}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm "
        >
            {types.map((type) => (
                <option key={type.value} value={type.value}>
                    {type.name}
                </option>
            ))}
        </select>
    );
};

export default FilterMobile;
