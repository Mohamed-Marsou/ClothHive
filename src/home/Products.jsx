import React, { useState, useEffect } from "react";

 const Products = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = (index) => {
    const updatedImages = [...images];
    updatedImages[index].loaded = true;
    setImages(updatedImages);
  };

  useEffect(() => {
    const loadImages = async () => {
      const imageNames = [
        "product",
        "prd2",
        "prd3",
        "prd4",
        "prd5",
        "prd6",
        "prd7",
        "prd8"
        ];
      const promises = imageNames.map(async (imageName) => {
        const image = await import(`../assets/${imageName}.webp`);
        return { src: image.default, loaded: false };
      });
      const images = await Promise.all(promises);
      setImages(images);
      setIsLoading(false);
    };
    loadImages();
  }, []);

  return (
    <section id="Products__Container">
      <Title title="New Arrivals" />
      <div className="productContainer">
        {images.map((image, index) => (
          <ProductCard
            key={index}
            src={image.src}
            loaded={image.loaded}
            handleLoad={() => handleLoad(index)}
          />
        ))}
      </div>
    </section>
  );
};

 const Title = ( { title } ) => {
  return (
    <div className="sectionTitle">
      <h1>{ title }</h1>
    </div>
  );
};

const ProductCard = ({ src, loaded, handleLoad }) => {
  return (
    <article className="Product_item">
      <div className="img-container">
        <a href="">
          <img
            src={src}
            alt=""
            onLoad={loaded ? null : handleLoad}
            style={{ opacity: loaded ? 1 : 0 }}
          />
        </a>
        <form id="addToCartWrapper" action="" method="post">
          <button>Quick add</button>
        </form>
        <div className="artBtns">
          <a href="">
            <div className="addToWishList">
              <i title="Wish List" className="fa-regular fa-bookmark"></i>
            </div>
          </a>
          <a href="">
            <div className="checkOut">
              <i title="View" className="fa-regular fa-eye"></i>
            </div>
          </a>
        </div>
      </div>
      <h3 className="Prod_name">Cool outfit</h3>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
      <h5 className="price">
        From <p>355.77MAD</p>
      </h5>
    </article>
  );
};

export default Products;
export { Title };