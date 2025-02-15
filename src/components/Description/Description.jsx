import "./Description.scss";

export default function Description() {
  return (
    <section className="desc">
      <p className="desc__heading">Our mission</p>
      <p className="title desc__body">
        Provide photographers a space to share photos of the neighborhoods they
        cherish,
        <span className="title--italic"> expressed in their unique style.</span>
      </p>
    </section>
  );
}
