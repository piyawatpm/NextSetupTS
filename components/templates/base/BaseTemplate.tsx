import styles from './BaseTemplate.module.css';

export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <div className="bg-red-500 text-4xl">{sampleTextProp}</div>;
};

export default BaseTemplate;
