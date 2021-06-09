import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
    margin: 50px 0;
`;

export const CollectionTitle = styled.div`
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
    &:hover {
    color: grey;
    }
`;

export const PreviewItems = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2%;
`;