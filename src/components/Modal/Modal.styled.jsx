import styled from "@emotion/styled";

export const Overlay = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.1);
    top: 0;
    left: 0;
`;

export const FormModal = styled.form` 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border: 2px solid rgb(181, 170, 242);
    border-radius: 10px;
    box-shadow: inset 0 -3em 3em rgba(0,0,0,0.1),
             0.3em 0.3em 1em rgba(0,0,0,0.3);
    background-color: rgb(190, 241, 247, 0.6);
`;

export const BoxInput = styled.div`
    margin-top: 5px;
    width: 200px;
    &:first-of-type{
        margin-top: 0;
    }
`;