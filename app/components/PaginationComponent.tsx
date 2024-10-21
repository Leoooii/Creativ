import { Pagination } from '@nextui-org/react';
import { useState } from 'react';

export const PaginationComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Exemplu de date pe care le paginăm
  const data = [
    'Element 1',
    'Element 2',
    'Element 3',
    'Element 4',
    'Element 5',
    'Element 6',
    'Element 7',
    'Element 8',
    'Element 9',
    'Element 10',
    'Element 11',
    'Element 12',
    'Element 13',
    'Element 14',
    'Element 15',
  ];

  // Calculăm indexul de început și sfârșit pentru datele din pagina curentă
  // const startIndex = (currentPage - 1) * itemsPerPage;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Selectăm datele care trebuie afișate pe pagina curentă
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={'bg-blue-600 bottom-0 mt-4 '}>
      <ul>
        {/* Afișăm datele corespunzătoare paginii curente */}
        {currentData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="bg-black flex justify-center p-2">
        <Pagination
          total={Math.ceil(data.length / itemsPerPage)} // Calculăm numărul total de pagini
          initialPage={1}
          onChange={handlePageChange}
          size="lg"
          color="primary"
        />
      </div>
    </div>
  );
};
