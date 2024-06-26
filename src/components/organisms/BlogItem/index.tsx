import styled from '@emotion/styled';

import { BlogTitle } from 'components/atoms/BlogTitle';
import { BlogBody } from 'components/atoms/BlogBody';

const Container = styled.div`
  background-color: #ffffff;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 10px 10px 30px #d9d9d9, -10px -10px 30px #ffffff;
  width: 800px;

  @media (max-width: 768px) { // 태블릿 사이즈
    width: 600px;
  }

  @media (max-width: 576px) { // 모바일 사이즈
    width: 90%;
    padding: 10px;
    margin: 10px;
  }
`;

interface Props {
  readonly title: string;
  readonly body: string;
}

export const BlogItem = ({ title, body }: Props) => {
  return (
    <Container>
      <BlogTitle title={title} />
      <BlogBody body={body} />
    </Container>
  );
};
