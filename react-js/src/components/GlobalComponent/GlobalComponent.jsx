import PropTypes from 'prop-types';

import { useClassNames } from '@/hooks';
import styles from './GlobalStyle.module.scss';
import './GlobalStyle.scss';

const GlobalComponent = ({ children }) => {
    const cx = useClassNames(styles);

    return <div className={cx('wrapper')}>{children}</div>;
};

GlobalComponent.propTypes = {
    children: PropTypes.node
};

export default GlobalComponent;
