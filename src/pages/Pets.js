import PetCard from "../components/PetCard";

const Pets = () => {
  return (
    <>
      <h2>החיות שלנו</h2>
      <div className="grid-4">
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
      </div>
    </>
  );
};

export default Pets;
