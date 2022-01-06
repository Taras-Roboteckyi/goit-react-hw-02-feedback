import PropTypes from 'prop-types';
import { SectionApp } from './Section.styled';

export default function Section(props) {
  const { title, children } = props;
  return (
    <SectionApp>
      <h1>{title}</h1>
      {children}
    </SectionApp>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
