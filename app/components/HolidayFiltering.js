import React from "react";

const TableFilters = ({ filters, setFilters }) => {
  const handleResetFilters = () => {
    setFilters({ academicPeriod: "", month: "", search: "" });
  };

  return (
    <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
      {/* Academic Period Filter */}
      <select
        value={filters.academicPeriod}
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, academicPeriod: e.target.value }))
        }
      >
        <option value="">All Academic Periods</option>
        <option value="Spring">Spring</option>
        <option value="Summer">Summer</option>
        <option value="Fall">Fall</option>
      </select>

      {/* Month Filter */}
      <select
        value={filters.month}
        onChange={(e) => setFilters((prev) => ({ ...prev, month: e.target.value }))}
      >
        <option value="">All Months</option>
        {[
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ].map((month, index) => (
          <option key={index} value={index + 1}>
            {month}
          </option>
        ))}
      </select>

      {/* Search Filter */}
      <input
        type="text"
        placeholder="Search Description"
        value={filters.search}
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, search: e.target.value }))
        }
      />

      {/* Reset Filters */}
      <button onClick={handleResetFilters}>Reset Filters</button>
    </div>
  );
};

export default TableFilters;
