import React, { useEffect, useState } from 'react';
import '../styles/styles.scss';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Layout from './components/Layout';
import Header from './components/Header';
import { IPersonItem } from './types/person';
import { getPersonsData } from './api/getPersonsData';
import Notes from './components/Content/Notes';
import Consultations from './components/Content/Consultations';
import Videos from './components/Content/Videos';
import Events from './components/Content/Events';

const App: React.FC = (): JSX.Element => {
  const [personsList, setPersonsList] = useState<IPersonItem[] | null>(null);

  // Получаю список пользователей через запрос чтобы не прописывать массив пользователей из фигмы вручную.
  useEffect(() => {
    getPersonsData().then((data) => setPersonsList(data));
  }, []);

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Layout personsList={personsList} />}>
          <Route index element={<Notes />} />
          <Route path='/consultations' element={<Consultations />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='/events' element={<Events />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
