import Link from "next/link";

export const metadata = {
  title: "Blog Post",
  description: "This is blog post page",
};

const BlogPostsPage = async () => {
  const res = await fetch("https://dummyjson.com/users");
  const { users = [] } = await res.json();

  return (
    <>
      <h1>This is blog post page</h1>

      <div className="grid grid-cols-4 gap-7">
        {users.map((item) => (
          <div
            key={item.id}
            className="shadow-lg rounded-2xl border border-gray-300 p-5"
          >
            <h1>
              <strong>Name: </strong> {`${item.firstName} ${item.lastName}`}
            </h1>

            <h5>
              <strong>Email: </strong> {item.email}
            </h5>

            <Link
              href={`/blog-post/${item.id}`}
              className="inline-block bg-pink-200 cursor-pointer px-5 py-3 rounded-lg"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogPostsPage;
