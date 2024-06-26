import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import { BlogCard } from "@/components/BlogCard";
import { GridList } from "@/components/GridList";
import blogPosts from "./blogCardData";

const BlogPage = () => {
  return (
    <>
      <PageIntro eyebrow="Blog" title="The latest articles and news">
        <p>
          Stay up-to-date with the latest news and updates of Emran Consulting Ltd.
        </p>
      </PageIntro>

      <Container>
        <section className="mt-16 items-center justify-around">
          <GridList>
            {blogPosts.map((post, index) => (
              <BlogCard
                key={index}
                title={post.title}
                author={post.author}
                date={post.date}
              >
                {post.content}
              </BlogCard>
            ))}
          </GridList>
        </section>
      </Container>
    </>
  );
};

export default BlogPage;
