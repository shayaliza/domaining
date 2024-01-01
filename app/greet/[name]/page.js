// pages/greet/[name].js
// import { useRouter } from "next/router";

const GreetPage = ({ params }) => {
  //   const router = useRouter();
  //   const { name } = router.query;

  return (
    <div>
      <h1>Greet Page</h1>
      {/* <p>Hi, {name}!</p> */}
      <p>Hi, {params.name}!</p>
    </div>
  );
};

export default GreetPage;
