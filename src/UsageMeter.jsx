import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Meter = styled.progress`
    width: 150px;
`;

class UsageMeter extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Meter value={this.props.value} max={100}>
                    {this.props.value}%
                </Meter>
            </div>
        );
    }
}

UsageMeter.propTypes = {
    value: PropTypes.number,
    color: PropTypes.string,
    meter: PropTypes.bool,
};
UsageMeter.defaultProps = {
    meter: true,
    color: 'blue',
};
export default UsageMeter;
