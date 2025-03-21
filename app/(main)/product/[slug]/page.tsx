// if we had server component we use PARAMS and AWAIT it
// if we had client component we use useParams()

// if content of this page stays still and would not change over time use generateStaticParams() (ssg)
// if content changes regluarly let it dynamic render (ssr)

/* export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // 1) get the product
  const product = await fetch();

  //  2) use product infos as page title
  return {
    title: `${product.title}`,
    description: product.description
  };
} */

async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}

export default ProductDetailsPage;
