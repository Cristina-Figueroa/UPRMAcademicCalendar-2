import { useParams } from 'react-router-dom';

const EditHoliday = () => {
  const { id } = useParams(); // Extract the holiday ID from the URL

  return (
    <div>
      <h2>Edit Holiday</h2>
      <p>Editing holiday with ID: {id}</p>
      {/* Add form logic here */}
    </div>
  );
};

export default EditHoliday;
