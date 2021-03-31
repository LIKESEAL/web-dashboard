import styled from 'styled-components';

const Radio = styled.input`
cursor: pointer;
`;

const Text = styled.label`
color: ${props=>props.color};
cursor: pointer;
`

export default {
    Radio,
    Text
}