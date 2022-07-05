import React from 'react';
import PropTypes from 'prop-types';

const COLOR_CPU = '#9CB4CC';
const COLOR_MEM = '#C689C6';
const COLOR_DISK = '#90C8AC';
/*
Props:
    name: String
    CPU_usage: Integer
    MEM_usage: Integer
*/
class ServInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        
    }
}

ServInfo.propTypes = {
    name: PropTypes.string.isRequired,
    CPU_usage: PropTypes.number.isRequired,
    MEM_usage: PropTypes.number.isRequired,
};

export default ServInfo;
