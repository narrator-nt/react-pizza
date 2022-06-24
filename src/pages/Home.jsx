import React from 'react';
import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import { PizzaBlock } from '../components/PizzaBlock';
import Sceleton from '../components/PizzaBlock/Sceleton';

export const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [sortType, setSortType] = React.useState({ name: 'популярности', sortProperty: 'rating' });
  const [categoryId, setCategoryId] = React.useState(0);

  // const onClickCategory = (index) => {
  //   setActiveIndex(index);
  // };

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://62b1ac63c7e53744afbe6845.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ''
      }&sortBy=${sortType.sortProperty}&order=asc`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
        window.scrollTo(0, 0);
      });
  }, [categoryId, sortType]);
  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
        <Sort value={sortType} onClickSort={(id) => setSortType(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Sceleton key={index} />)
          : items.map((obj) => (isLoading ? <Sceleton /> : <PizzaBlock key={obj.id} {...obj} />))}
      </div>
    </div>
  );
};
