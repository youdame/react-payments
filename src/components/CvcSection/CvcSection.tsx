import { CvcType } from '../../types';
import Input from '../Input/Input';
import { InputSection } from '../InputSection/InputSection';
import styles from './CvcSection.module.css';

type Props = {
  cvc: CvcType;
  handleCvcChange: (value: string) => void;
};

export default function CvcSection({ cvc, handleCvcChange }: Props) {
  return (
    <div className={styles.sectionContainer}>
      <InputSection.TitleWrapper>
        <InputSection.Title title="CVC 번호를 입력해 주세요" />
      </InputSection.TitleWrapper>
      <div className={styles.inputSection}>
        <InputSection.Label text="CVC" />

        <Input onChange={(e) => handleCvcChange(e.target.value)} value={cvc.value} placeholder="123" isError={Boolean(cvc.errorMessage)} maxLength={3} />

        {cvc.errorMessage && <InputSection.Error message={cvc.errorMessage} />}
      </div>
    </div>
  );
}
