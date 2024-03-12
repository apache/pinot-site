'use client';

import { useState, useEffect } from 'react';
import { type Company, companyTypes } from '@/data/companiesUsingPinot';
import Image from './Image';
import FilterMobile from './FilterMobile';
import FilterDesktop from './FilterDesktop';

type CompanyTableProps = {
    companies: Company[];
};

const CompanyTable: React.FC<CompanyTableProps> = ({ companies }) => {
    const [filteredCompanies, setFilteredCompanies] = useState(companies);
    const [selectedType, setSelectedType] = useState('all');

    useEffect(() => {
        if (selectedType === 'all') {
            setFilteredCompanies(companies);
        } else {
            // TODO - Use a sanitised comparison for types that may include special characters?
            setFilteredCompanies(companies.filter((company) => company.type === selectedType));
        }
    }, [selectedType, companies]);

    return (
        <div className="container mx-auto md:mb-28 md:px-24 md:pb-4">
            <div className="hidden sm:block">
                <FilterDesktop
                    types={companyTypes}
                    selectedType={selectedType}
                    onFilterChange={setSelectedType}
                />
            </div>
            <div className="sm:hidden">
                <FilterMobile types={companyTypes} onFilterChange={setSelectedType} />
            </div>
            <div className="grid grid-cols-3 gap-6 py-6 lg:grid-cols-6">
                {filteredCompanies.map((company, index) => (
                    <div key={index}>
                        <img src={company.logo} alt={company.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompanyTable;
