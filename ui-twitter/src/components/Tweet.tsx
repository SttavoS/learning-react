type TweetProps = {
  user: string;
  children: string;
};

const Tweet = (props: TweetProps) => {
  return (
    <>
      <section>
        <h1>{props.user}</h1>
        <p>{props.children}</p>
      </section>
    </>
  );
};

export default Tweet;
