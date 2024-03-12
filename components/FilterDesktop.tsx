import { CompanyType } from '@/data/companiesUsingPinot';

type FilterProps = {
    types: CompanyType[];
    selectedType: string;
    onFilterChange: (type: string) => void;
};

const FilterDesktop: React.FC<FilterProps> = ({ types, selectedType, onFilterChange }) => (
    <div className="flex flex-wrap justify-center gap-10">
        {types.map((type) => (
            <button
                key={type.value}
                onClick={() => onFilterChange(type.value)}
                className={`text-base leading-snug ${
                    selectedType === type.value
                        ? 'border-b-4 border-crimson-100 font-semibold'
                        : 'font-normal'
                }`}
            >
                {type.name}
            </button>
        ))}
    </div>
);

export default FilterDesktop;
