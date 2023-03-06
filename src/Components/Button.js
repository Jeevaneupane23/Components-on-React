import className from "classnames";



function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
   ...rest
  }) {
  
    const classes = className(rest.className,'flex items-center gap-3 px-3 py-1.5 border', {
      'border-blue-500 bg-blue-500 text-white': primary,
      'border-gray-900 bg-gray-900 text-white': secondary,
      'border-green-500 bg-green-500 text-white': success,
      'border-yellow-400 bg-yellow-400 text-white': warning,
      'border-red-500 bg-red-500 text-white': danger,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-blue': outline && primary,
      'text-gray': outline && secondary,
      'text-green': outline && success,
      'text-yellow': outline && warning,
      'text-red': outline && danger,
    });
   
  
    return <button {...rest} className={classes} >{children}</button>;
  }

  
Button.propTypes = {
    checkVariationValue: ({ primary, secondary,
        success,
        warning,
        danger }
    ) => {
        const count = Number(!!primary) + Number(!!success) + Number(!!warning) + Number(!!danger) + Number(!!secondary);


        if (count > 1) {
            return new Error("Only one Props is valid");
        }
        


    }

};


export default Button;