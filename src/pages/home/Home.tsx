import React, { useEffect, useState } from 'react';
import EventCard from '../../components/eventCard/EventCard.tsx';
import Pagination from '../../components/pagination/Pagination.tsx';
import { eventService } from '../../service/eventService.tsx';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(19);
  const [items, setItems] = useState(
    Array.from({ length: 6 }, (_, index) => ({
      id: index,
      name: 'Event Name',
      date: '2025-04-10',
      from: '9:00',
      to: '17:00',
      location: 'Seoul',
      imgUrl:
        'https://media.istockphoto.com/id/1316134499/vi/anh/m%E1%BB%99t-h%C3%ACnh-%E1%BA%A3nh-kh%C3%A1i-ni%E1%BB%87m-c%E1%BB%A7a-m%E1%BB%99t-k%C3%ADnh-l%C3%BAp-tr%C3%AAn-n%E1%BB%81n-m%C3%A0u-xanh-v%E1%BB%9Bi-m%E1%BB%99t-t%E1%BB%AB-ph%C3%B3ng-to-v%C3%AD-d%E1%BB%A5-b%C3%AAn-trong.jpg?s=2048x2048&w=is&k=20&c=hEmxxxHV_RqB983Oj-fIN_1aTs-d_aLbmP7DAZNU52Q=',
    })),
  );
  const pageSize = 6;

  const fetchData = async (page: number) => {
    try {
      console.log(page);
      const res = await eventService.getAllEvents({ page, size: pageSize });
      console.log(res.data);
      setItems(items);
      setTotalItems(19); // total number of items
    } catch (error) {
      console.error('Lỗi gọi API:', error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  return (
    <main className="home-wrapper container py-5">
      <div className="row g-4">
        {items.map((event) => (
          <div className="col-12 col-sm-6 col-md-4" key={event.id}>
            <EventCard {...event} />
          </div>
        ))}
      </div>

      <div className="pagination-wrapper d-flex justify-content-center mt-5">
        <Pagination
          totalItems={totalItems}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        ></Pagination>
      </div>
    </main>
  );
};
export default Home;
