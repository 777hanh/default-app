import classNamesBind from 'classnames/bind';
import classNamesDedupe from 'classnames/dedupe';

const useClassNames = styles => {
    // Bind classnames to the provided 'thisarg'
    const cxBind = classNamesBind.bind(styles);

    // Return a function that generates de-duped class names
    return (...classes) => {
        // Bind the classnames and dedupe the resulting class names
        return classNamesDedupe(cxBind(...classes));
    };
};

export default useClassNames;
