import React, { useState } from 'react';
import '../css/filter.css';

const FilterSidebar = () => {
    const [isOpen, setIsOpen] = useState({
        idealFor: false,
        occasion: false,
        work: false,
        fabric: false,
        segment: false,
        suitableFor: false,
        rawMaterials: false,
        pattern: false,
    });

    const toggleSection = (section) => {
        setIsOpen(prevState => ({ ...prevState, [section]: !prevState[section] }));
    };

    return (
        <div className="filter-sidebar">
            <p className="items-count">3425 ITEMS</p>
            <a href="#" className="hide-filters">HIDE FILTER</a>
            <div className="filter-option">
                <input type="checkbox" id="customizable" />
                <label htmlFor="customizable">CUSTOMIZABLE</label>
            </div>
            {['idealFor', 'occasion', 'work', 'fabric', 'segment', 'suitableFor', 'rawMaterials', 'pattern'].map(section => (
                <div key={section} className="filter-category">
                    <h3 onClick={() => toggleSection(section)}>
                        {section.toUpperCase().replace(/_/g, ' ')}
                        <span>{isOpen[section] ? '-' : '+'}</span>
                    </h3>
                    {isOpen[section] && <p>All</p>}
                </div>
            ))}
        </div>
    );
}

export default FilterSidebar;
