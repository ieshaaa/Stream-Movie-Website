import React, {useEffect, useState} from 'react'
import './schedule.css'
import Card from '../components/Card';
function Schedule() {

  const filterList = [
    {
      _id: 1,
      name: 'All',
      active: true,
    },
    {
      _id: 2,
      name: 'Romance',
      active: false,
    },
    {
      _id: 3,
      name: 'Action',
      active: false,
    },
    {
      _id: 4,
      name: 'Thriller',
      active: false,
    },
    {
      _id: 5,
      name: 'Horror',
      active: false,
    },
    {
      _id: 6,
      name: 'Adventure',
      active: false,
    },
  ];



  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState(filterList);

  const fetchData = () => {
    fetch('/data/movieData.json')
    .then(res => {
      console.log('Response received:', res);
      return res.json();
    })
    .then(data => {
      console.log('Data received:', data);
      setData(data);
    })
    .catch(e => console.error('Error:', e.message));
};
  useEffect(()=> {
    fetchData();
  },[]);

  useEffect(()=> {
    setMovies(data);
  }, [data]);

const handlefilterMovies = (category) => {
  setFilters(
    filters.map((filter) =>  {
      filter.active= false;
      if(filter.name === category) {
        filter.active = true;
      }
      return filter;
    })
  );

  if(category === 'All'){
    setMovies(data);
    return;
  }
      setMovies(data.filter(movie => movie.category === category));
};

  return (
    <section className="schedule" id="schedule">
        <div className="container-fluid">
            <div className="row">
                <h4 className="section-title">Opening this week</h4>
            </div>
            <div className="row">
                  <ul className="filters">
                      {
                        filters.map(filter=>(
                          <li key={filter._id} 
                          className={`${filter.active ? 'active' : undefined}`}
                          onClick={() => {handlefilterMovies(filter.name)}}
                          >
                            {filter.name}
                            </li>
                        ))
                      }
                  </ul>
            </div>
            <div className="row mt-5">
              {movies && movies.length > 0 && movies.map(movie => <Card key={movie._id} movie={movie}/>)}
            </div>
        </div>
    </section>
  )
}

export default Schedule