import { useSelectedConfigureState } from '../../useSelectedConfigureState';
import { FieldHeader } from '../FieldHeader';

export function FieldDefaultValueMapping() {
  const {
    configureState,
  } = useSelectedConfigureState();
  const writeObjects = configureState?.write?.writeObjects;
  const shouldRender = !!(writeObjects);
  return (
    shouldRender && (
    <>
      {writeObjects.map((field) => (
        <>
          <FieldHeader string={`Defaults for ${field.displayName} `} />
          <div>new component</div>
        </>
      ))}
    </>
    )
  );
}
