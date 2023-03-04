import PropTypes from 'prop-types'

function Button({ children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded
}) {

    return <button>{children}</button>
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