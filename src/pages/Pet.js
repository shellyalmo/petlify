import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PetCard from "../components/PetCard";
const Pet = () => {
  const { id } = useParams();

  //   useEffect(() => {
  //     getPet(id);

  //   }, []);

  return (
    <div>
      <PetCard
        petImg={"https://cdn2.thedogapi.com/images/B1uW7l5VX_390x256.jpg"}
        petId={id}
        currentPage={"pet"}
      />
      {id}
    </div>
  );
};

export default Pet;
