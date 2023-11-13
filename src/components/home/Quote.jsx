import quoteBG from "../../assets/home/chef-service.jpg";

const Quote = () => {


    
  return (
    <div className={`bg-[url(${quoteBG})]`}>
      <div>
        <h2>Bistro Boss</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default Quote;
