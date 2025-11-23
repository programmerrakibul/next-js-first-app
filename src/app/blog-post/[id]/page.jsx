export async function generateMetadata({ params }) {
  const { id } = await params;

  return {
    title: `Product ${id} - My Store`,
  };
}

const SingleBlogPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  const data = await res.json();

  console.log(data);

  return (
    <>
      <h1>{`${data.firstName} ${data.lastName}`}</h1>
    </>
  );
};

export default SingleBlogPage;
