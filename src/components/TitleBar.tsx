import { TitleBarContainer, TitleBarContent, PageTitle } from './styled';

interface TitleBarProps {
  title: string;
}

export const TitleBar = ({ title }: TitleBarProps) => {
  return (
    <TitleBarContainer>
      <TitleBarContent>
        <PageTitle>{title}</PageTitle>
      </TitleBarContent>
    </TitleBarContainer>
  );
};
