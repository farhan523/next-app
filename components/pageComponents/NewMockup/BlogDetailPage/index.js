import Layout from "../../../Layouts/HomeLayout";
import ArticleContent from "../../../NewMockupComponents/Dashboard/ArticleContent";

const BlogDetailPage = ({ article, type }) => {
  return (
    <Layout>
      <div>
        <ArticleContent article={article} type={type} />
      </div>
    </Layout>
  );
};

export default BlogDetailPage;
