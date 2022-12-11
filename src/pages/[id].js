export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/projects");
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((dt) => {
    return {
      params: { id: dt.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("http://localhost:5000/projects/" + id);
  const data = await res.json();

  return {
    props: { data },
  };
};

const projectdetails = ({ data }) => {
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
      <p>{data.website}</p>
      <p>{data.address.city}</p>
    </div>
  );
};

export default projectdetails;
