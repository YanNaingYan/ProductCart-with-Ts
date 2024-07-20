
import { ChildrenProp } from '../Props/props';



const Container = ({children}:ChildrenProp) => {
  return <div className=" max-w-[1000px] mx-auto">{children}</div>;
  
}

export default Container