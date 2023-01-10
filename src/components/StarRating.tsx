import { useEffect, useState } from "react"
import { FaStar } from "react-icons/fa"


const StarRating = ({ productId }: { productId: string }) => {

  const stars = Array.from({ length: 5 });

  const [rating, setRating] = useState({ value: 0, hover: null });

  // this will retrieve the values from localstorage 
  useEffect(() => {
    const storedRating = localStorage.getItem(`product-${productId}-rating`);
    if (storedRating) {
      setRating({ value: Number(storedRating), hover: null });
    }
  }, [productId]);

  // the handleChange will keep track, update and store rating values in local storage whenever the user click on a star
  const handleChange = (value: number) => {
    setRating({ value: value, hover: null });
    const storedRatings = localStorage.getItem(`product-${productId}-ratings`);
    const ratings = storedRatings ? JSON.parse(storedRatings) : [];
    ratings.push(value);
    localStorage.setItem(`product-${productId}-rating`, value.toString());
    localStorage.setItem(`product-${productId}-ratings`, JSON.stringify(ratings));
  }


  return (
    <>
      {stars.map((star: any, i: any) => {
        const ratingValue = i + 1;

        return (<label key={i}>
          <input type="radio"
            name="rating"
            value={ratingValue}
            onChange={() => handleChange(ratingValue)}
            hidden
          />

          <FaStar
            size={20}
            color={ratingValue <= (rating.hover || rating.value) ? "#ffc107" : "#e4e5e9"}
            style={{ cursor: "pointer", transition: "color 200" }}
            onMouseOver={() => setRating({ ...rating, hover: ratingValue })}
            onMouseOut={() => setRating({ ...rating, hover: null })}
          >
          </FaStar>
        </label>
        )
      })}

    </>
  )
}

export default StarRating