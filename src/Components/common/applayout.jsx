
import { Header,Footer } from './layout';

export const Default = (props) => {
  return (
    <>
      <Header {...props}/>
        {props.children}
      <Footer />
    </>
  );
};