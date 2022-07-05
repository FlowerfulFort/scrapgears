import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
/*
const Meter = styled.progress`
    width: 150px;
`;
*/
const Container = styled.div`
    display: flex;
    span {
        font-size: 0.9rem;
        margin-left: 5px;
        flex: 0 0 auto;
        width: 2.5rem;
    }
    height: 1.2rem;
    padding: 5px 0px;
`;
const Progressbar_back = styled.div`
    flex: 1 1 auto;
    background: hsla(232, 5%, 70%, 0.9);
    height: 100%;
    width: 100%;
`;
const Progressbar_front = styled(Progressbar_back)`
    ${(props) => `background: ${props.color}; width: ${props.value}%;`}
`;

const UsageMeter = (props) => {
    return (
        <Container>
            <Progressbar_back>
                <Progressbar_front value={props.value} color={props.color} />
            </Progressbar_back>
            <span>{props.value}%</span>
        </Container>
    );
};
UsageMeter.propTypes = {
    value: PropTypes.number,
    color: PropTypes.string,
    meter: PropTypes.bool,
};
UsageMeter.defaultProps = {
    meter: true,
    color: 'skyblue',
};
export default UsageMeter;
