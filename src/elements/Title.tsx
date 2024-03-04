interface ITitle {
  title: string;
  color: string;
}

const Title = ({ title, color }: ITitle) => {
  //클래스 스타일을 적용

  return <h1 className={`text-center text-7xl my-3 font-extrabold ${color}`}>{title}</h1>;
};

export default Title;
