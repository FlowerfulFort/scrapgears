import React, { useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid black;
    padding: 8px 15px;
    display: inline-block;
`;
const InnerContainer = styled.div`
    flex: 1 1 auto;
`;
const LoginButton = styled.input`
    width: 90px;
    margin-left: 10px;
`;

export default (props) => {
    const formRef = useRef();
    const SubmitAuth = () => {
        console.log('submit');
    };
    return (
        <Container>
            <form
                style={{ display: 'flex' }}
                ref={formRef}
                onSubmit={SubmitAuth}
            >
                <InnerContainer>
                    <div>ID</div>
                    <input type="text" name="id" placeholder="ID" required />
                    <div style={{ marginTop: '5px' }}>Password</div>
                    <input
                        type="password"
                        name="pw"
                        placeholder="Password"
                        required
                    />
                </InnerContainer>
                <LoginButton type="submit" value="Submit" />
            </form>
        </Container>
    );
};
