import background from 'img/background.jpg';

const Home = () => {
  return (
    <>
      <picture>
        <source srcSet={background} />
      </picture>
    </>
  );
};

export default Home;
