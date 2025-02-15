import "./Description.scss";

export default function Description() {
  return (
    <section className="desc">
      <p className="desc__heading body-copy body-copy--light">Our mission:</p>
      <p className="desc__body title">
        Provide photographers a space to share photos of the neighborhoods they
        cherish,
        <span className="title--italic"> expressed in their unique style.</span>
      </p>
    </section>
  );
}
