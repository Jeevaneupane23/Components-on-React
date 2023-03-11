
import useNavigation from "../hooks/use-navigation-context";
import classNames from "classnames";





function Link({to,children,className,activeClassName}){
    const {navigate,currentPath}=useNavigation();
    const classes=classNames('text-blue-500 ',
    className,
    currentPath===to&&activeClassName
    );
  
 
    

  const onClick=(events)=>{
    if(events.meteKey || events.ctrlKey){
      return;
    }
    events.preventDefault();
    navigate(to);


  }


    return(
        <a className={classes} href={to} onClick={onClick} >{children}</a>
    )

}
export default Link;