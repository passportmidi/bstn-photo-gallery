import "./Description.scss";

export default function Description() {
  return (
    <section className="desc">
      <p className="desc__heading">Our mission</p>
      <p className="desc__body">
        Provide photographers a space to share photos of the neighborhoods they
        cherish,
        <span className="desc__body--italic">
          {" "}
          expressed in their unique style.
        </span>
      </p>
    </section>
  );
}
