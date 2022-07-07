import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LoginAuthentication from './LoginAuth';
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
    const navigate = useNavigate();
    const formRef = useRef();
    const SubmitAuth = (e) => {
        e.preventDefault();
        console.log('submit');
        const request = {
            id: formRef.current.id.value,
            pw: formRef.current.pw.value,
        };
        console.log(`ID: ${request.id}`);
        console.log(`PW: ${request.pw}`);

        LoginAuthentication(request)
            .then((response) => {
                console.log(response);
                navigate('/dashboard', { replace: true });
            })
            .catch((err) => {
                console.log(err);
            });
        // navigate('/dashboard', { replace: true });
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
