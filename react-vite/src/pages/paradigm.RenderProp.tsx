import { GeneralContainer } from '@/share/GeneralContainer';
import { RenderProp } from '@/paradigms/React.RenderProp';

export default function () {
  return (
    <GeneralContainer>
      <div style={{ width: '50px', height: '50px', border: '1px solid #000000' }}>
        <RenderProp
          renderProp={(onClick) => {
            return <span onClick={onClick}>123</span>;
          }}
        />
      </div>
    </GeneralContainer>
  );
}
