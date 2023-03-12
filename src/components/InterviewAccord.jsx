import Question from "./Question";

const interviewAccord = (props) => {
  const { data } = props;
  return (
    <div className="row">
      {data.map((item) => (
        <Question  key={item.id}/>
      ))}
    </div>
  );
};

export default interviewAccord;
