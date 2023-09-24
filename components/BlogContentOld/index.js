const Index = ({ blogs, moreBlog, blogRestructure, featuredBlog }) => {
  return (
    <>
      <div className="container mx-auto lg:px-32">
        <div className="py-24 px-4 lg:px-12">
          {featuredBlog && featuredBlog.content && (
            <div
              id="blog-content"
              dangerouslySetInnerHTML={{ __html: featuredBlog?.content }}
            ></div>
          )}
        </div>
        {moreBlog && (
          <>
            <h1 className="text-brandBlue text-center text-semibold text-5xl">
              Read more
            </h1>
            <div className={`flex flex-wrap justify-between pt-24`}>
              {moreBlog &&
                moreBlog?.map(({ attributes }, index) => {
                  return (
                    <div
                      className="w-full md:w-thirtyPercent mb-20"
                      key={index}
                    >
                      <div
                        className="w-full h-60 bg-cover bg-center bg-no-repeat shadow-newsCard"
                        style={{
                          backgroundImage: `url(https://images.unsplash.com/photo-1662090565747-dcc33e49e898?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3687&q=80)`,
                        }}
                      />
                      <p className="text-brandBlue mt-2">
                        {attributes?.description}
                      </p>
                      <p className="font-semibold text-brandBlue text-base mt-2 gridDesc">
                        {attributes?.title}
                      </p>
                      <button
                        onClick={() => {}}
                        className="orangeButton mt-4 lg:mt-8 text-base focus:outline-none font-semibold flex items-center py-2 px-3"
                      >
                        READ MORE
                        <i className="fa fa-arrow-right ml-2"></i>
                      </button>
                    </div>
                  );
                })}
              <div className="w-full md:w-thirtyPercent mb-20"></div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Index;
