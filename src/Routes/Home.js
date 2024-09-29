import Lesson from "../Component/HomePage/Lesson";
import HomeCard from "../Component/HomePage/HomeCard";
import MidComponent from "../Component/HomePage/MidComponent";

export default function Home() {
  return (
    <>
      <Lesson />
      <MidComponent />
      <h2 style={{ marginTop: "1rem", textAlign: "center" }}>
        Browse Lessons by Type
      </h2>
      <HomeCard />
    </>
  );
}
